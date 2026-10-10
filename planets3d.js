// Low-poly 3D planets and sun: one shared WebGL renderer draws every world, then each
// .planet-canvas copies its frame. One context keeps us far below browser limits.
(function(){
  if(!window.THREE||typeof WORLDS==='undefined')return;
  let renderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true})}catch(e){return}
  if(!renderer.getContext())return;
  renderer.setPixelRatio(1);
  renderer.setClearColor(0x000000,0);
  renderer.outputEncoding=THREE.sRGBEncoding;
  document.documentElement.classList.add('planets-3d');

  const TEX_W=32,TEX_H=16,MAX_PX=1200,FRAME_MS=1000/30;
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');

  // Each world's surface pattern; its palette (dark to light) lives on WORLDS so the page can show it too
  const LOOKS={
    history:{field:(u,v,n)=>.55*n.a(u,v)+.35*n.b(u,v)+.1*n.c(u,v)},
    reading:{field:(u,v,n)=>.5+.42*Math.sin((v*7+(n.a(u,v)-.5)*1.4)*Math.PI)+(n.c(u,v)-.5)*.3},
    art:{field:(u,v,n)=>n.b(u,v)},
    engineering:{field:(u,v,n)=>Math.abs(v-.5)>.4?.98:.6*n.a(u,v)+.4*n.b(u,v)},
    science:{field:(u,v,n)=>.45*n.a(u,v)+.55*n.c(u,v)},
    sun:{palette:['#c4541c','#e8782a','#f6a33c','#ffcf5c','#fff0a8'],field:(u,v,n)=>.35*n.b(u,v)+.65*n.c(u,v)},
    math:{field:(u,v,n)=>.55*n.a(u,v)+.25*n.b(u,v)+((Math.floor(u*TEX_W)+Math.floor(v*TEX_H))%7<2?.22:0)}
  };

  function seeded(str){let h=2166136261;for(const ch of str){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}let s=h>>>0;return()=>((s=Math.imul(s,1664525)+1013904223>>>0)/4294967296)}
  // Value noise that wraps around the sphere horizontally, so the texture has no seam
  function noise(rand,gx,gy){
    const g=Array.from({length:gx*(gy+1)},rand),at=(i,j)=>g[((i%gx)+gx)%gx+j*gx],ease=t=>t*t*(3-2*t);
    return(u,v)=>{const x=u*gx,y=v*gy,x0=Math.floor(x),y0=Math.min(Math.floor(y),gy-1),sx=ease(x-x0),sy=ease(y-y0);
      const top=at(x0,y0)+(at(x0+1,y0)-at(x0,y0))*sx,bottom=at(x0,y0+1)+(at(x0+1,y0+1)-at(x0,y0+1))*sx;return top+(bottom-top)*sy};
  }
  function pixelTexture(w){
    const look=LOOKS[w.id]||LOOKS.history,rand=seeded(w.id);
    const n={a:noise(rand,4,2),b:noise(rand,8,4),c:noise(rand,16,8)};
    const colors=(w.palette||look.palette).map(hex=>new THREE.Color(hex));
    const data=new Uint8Array(TEX_W*TEX_H*4);
    for(let y=0;y<TEX_H;y++)for(let x=0;x<TEX_W;x++){
      const u=(x+.5)/TEX_W,v=(y+.5)/TEX_H;
      const value=Math.min(.999,Math.max(0,(look.field(u,v,n)-.5)*1.9+.5+(rand()-.5)*.14));
      const c=colors[Math.floor(value*colors.length)],i=(y*TEX_W+x)*4;
      data[i]=c.r*255;data[i+1]=c.g*255;data[i+2]=c.b*255;data[i+3]=255;
    }
    const tex=new THREE.DataTexture(data,TEX_W,TEX_H,THREE.RGBAFormat);
    tex.magFilter=tex.minFilter=THREE.NearestFilter;
    tex.generateMipmaps=false;
    // Left unconverted: the dither shader works directly on the palette's sRGB values
    tex.needsUpdate=true;
    return tex;
  }

  const sphereGeometry=new THREE.IcosahedronGeometry(1,1);
  // Dithered flat shading: each facet's light is snapped to a few levels and blended with a
  // 4x4 Bayer pattern, like pixel-art planets. ditherCell sets the pattern's pixel size per draw.
  const ditherCell={value:2};
  const LIGHT=new THREE.Vector3(-2.2,1.6,3).normalize();
  function ditherMaterial({map=null,color=new THREE.Color(1,1,1),ambient=.22,levels=3,glow=0,twoSided=false}){
    return new THREE.ShaderMaterial({
      uniforms:{map:{value:map},useMap:{value:map?1:0},color:{value:color},light:{value:LIGHT},ambient:{value:ambient},levels:{value:levels},glow:{value:glow},twoSided:{value:twoSided?1:0},cell:ditherCell},
      side:twoSided?THREE.DoubleSide:THREE.FrontSide,
      extensions:{derivatives:true},
      vertexShader:`varying vec2 vUv;varying vec3 vWorld;
        void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
      fragmentShader:`uniform sampler2D map;uniform float useMap;uniform vec3 color;uniform vec3 light;uniform float ambient;uniform float levels;uniform float glow;uniform float twoSided;uniform float cell;
        varying vec2 vUv;varying vec3 vWorld;
        float bayer(vec2 p){
          float x=mod(p.x,4.),y=mod(p.y,4.);
          vec4 r0=vec4(0.,8.,2.,10.),r1=vec4(12.,4.,14.,6.),r2=vec4(3.,11.,1.,9.),r3=vec4(15.,7.,13.,5.);
          vec4 row=y<1.?r0:y<2.?r1:y<3.?r2:r3;
          float v=x<1.?row.x:x<2.?row.y:x<3.?row.z:row.w;
          return (v+.5)/16.;
        }
        void main(){
          vec3 n=normalize(cross(dFdx(vWorld),dFdy(vWorld)));
          float d=dot(n,light);
          d=twoSided>.5?abs(d):max(d,0.);
          float lit=ambient+(1.-ambient)*d;
          float q=floor(lit*levels+bayer(floor(gl_FragCoord.xy/cell)))/levels;
          q=mix(clamp(q,ambient,1.),1.,glow);
          vec3 base=useMap>.5?texture2D(map,vUv).rgb:color;
          gl_FragColor=vec4(base*q,1.);
        }`
    });
  }
  const camera=new THREE.OrthographicCamera(-2,2,2,-2,.1,20);
  camera.position.z=6;
  const scenes={};
  function sceneFor(id){
    if(scenes[id])return scenes[id];
    // The sun shares the planet look but lights itself, so its facets stay bright
    const isSun=id==='sun',w=isSun?{id}:WORLDS.find(x=>x.id===id);
    if(!w)return null;
    const scene=new THREE.Scene();
    const tilt=new THREE.Group();
    tilt.rotation.z=-.22;
    scene.add(tilt);
    // The sun mostly lights itself, so only a little dithered shading shows on it
    const sphere=new THREE.Mesh(sphereGeometry,ditherMaterial({map:pixelTexture(w),glow:isSun?.6:0}));
    tilt.add(sphere);
    if(w.ringed){
      const ringColor=new THREE.Color(w.ring||w.color);
      // Rings sit almost edge-on to the light, so they keep more of their own color
      [[1.3,1.48,1],[1.53,1.7,.7]].forEach(([inner,outer,shade])=>{
        const color=ringColor.clone().multiplyScalar(shade);
        const ring=new THREE.Mesh(new THREE.RingGeometry(inner,outer,18,1),ditherMaterial({color,ambient:.7,twoSided:true}));
        ring.rotation.x=Math.PI/2-.36;
        tilt.add(ring);
      });
    }
    // Each world turns at its own pace, one full turn every 6 to 11 seconds
    const spinRand=seeded(id+'spin'),offset=spinRand()*Math.PI*2,spin=.55+spinRand()*.5;
    return scenes[id]={scene,sphere,offset,spin};
  }

  // Canvases drawn at their current size (a WeakMap, so cloned canvases still get drawn)
  const drawn=new WeakMap();
  let bufferSize=0,last=0;
  function draw(now){
    requestAnimationFrame(draw);
    const moving=!reduceMotion.matches;
    if(moving&&now-last<FRAME_MS)return;
    last=now;
    const t=moving?now/1000:0,dpr=Math.max(window.devicePixelRatio||1,1.5);
    document.querySelectorAll('canvas.planet-canvas').forEach(canvas=>{
      const css=canvas.offsetWidth;
      if(!css)return;
      const rect=canvas.getBoundingClientRect();
      if(rect.bottom<0||rect.right<0||rect.top>innerHeight||rect.left>innerWidth)return;
      const px=Math.min(MAX_PX,Math.round(css*dpr));
      // Without motion, each canvas only needs drawing once per size
      if(!moving&&drawn.get(canvas)===px)return;
      const entry=sceneFor(canvas.dataset.world);
      if(!entry)return;
      // New canvases start at 300x150, so check both sides
      if(canvas.width!==px||canvas.height!==px){canvas.width=px;canvas.height=px}
      if(px>bufferSize){bufferSize=px;renderer.setSize(px,px,false)}
      entry.sphere.rotation.y=entry.offset+t*entry.spin;
      // Dither pixels scale with the planet, so big and small worlds read the same
      ditherCell.value=Math.max(3,Math.round(px/65));
      renderer.setViewport(0,0,px,px);
      renderer.setScissor(0,0,px,px);
      renderer.setScissorTest(true);
      renderer.clear();
      renderer.render(entry.scene,camera);
      const ctx=canvas.getContext('2d');
      ctx.clearRect(0,0,px,px);
      ctx.drawImage(renderer.domElement,0,bufferSize-px,px,px,0,0,px,px);
      drawn.set(canvas,px);
    });
  }
  requestAnimationFrame(draw);
})();
