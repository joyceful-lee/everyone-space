// Low-poly 3D planets: one shared WebGL renderer draws every world, then each
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

  // Each world gets its own palette (dark to light) and surface pattern
  const LOOKS={
    history:{palette:['#24183d','#3f2b69','#5e4596','#8a6cc5','#c6b0f2'],field:(u,v,n)=>.55*n.a(u,v)+.35*n.b(u,v)+.1*n.c(u,v)},
    reading:{palette:['#4f2b12','#8a4f1f','#c47a2d','#ecb04f','#ffe08f'],field:(u,v,n)=>.5+.42*Math.sin((v*7+(n.a(u,v)-.5)*1.4)*Math.PI)+(n.c(u,v)-.5)*.3},
    art:{palette:['#6875ea','#c46ee8','#ff6d8f','#ffcd67','#62dcc3'],field:(u,v,n)=>n.b(u,v)},
    engineering:{palette:['#123f43','#1f6b62','#2f927c','#62cfa5','#d6fff0'],field:(u,v,n)=>Math.abs(v-.5)>.4?.98:.6*n.a(u,v)+.4*n.b(u,v)},
    science:{palette:['#3d1520','#793448','#b84e3a','#ee8b52','#ffc98f'],field:(u,v,n)=>.45*n.a(u,v)+.55*n.c(u,v)},
    math:{palette:['#163872','#2454a0','#2f8fd0','#3fd1e7','#d8fbff'],field:(u,v,n)=>.55*n.a(u,v)+.25*n.b(u,v)+((Math.floor(u*TEX_W)+Math.floor(v*TEX_H))%7<2?.22:0)}
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
    const colors=look.palette.map(hex=>new THREE.Color(hex));
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
    tex.encoding=THREE.sRGBEncoding;
    tex.needsUpdate=true;
    return tex;
  }

  const sphereGeometry=new THREE.IcosahedronGeometry(1,1);
  const camera=new THREE.OrthographicCamera(-2,2,2,-2,.1,20);
  camera.position.z=6;
  const scenes={};
  function sceneFor(id){
    if(scenes[id])return scenes[id];
    const w=WORLDS.find(x=>x.id===id);
    if(!w)return null;
    const scene=new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xffffff,.22));
    const sun=new THREE.DirectionalLight(0xffffff,1.05);
    sun.position.set(-2.2,1.6,3);
    scene.add(sun);
    const tilt=new THREE.Group();
    tilt.rotation.z=-.22;
    scene.add(tilt);
    const sphere=new THREE.Mesh(sphereGeometry,new THREE.MeshPhongMaterial({map:pixelTexture(w),flatShading:true,shininess:0,specular:0x000000}));
    tilt.add(sphere);
    if(w.ringed){
      const ringColor=new THREE.Color(w.ring||w.color);
      // Rings sit almost edge-on to the light, so they carry some of their own color
      [[1.3,1.48,1],[1.53,1.7,.7]].forEach(([inner,outer,shade])=>{
        const color=ringColor.clone().multiplyScalar(shade);
        const ring=new THREE.Mesh(new THREE.RingGeometry(inner,outer,18,1),new THREE.MeshPhongMaterial({color,emissive:color.clone().multiplyScalar(.5),flatShading:true,shininess:0,specular:0x000000,side:THREE.DoubleSide}));
        ring.rotation.x=Math.PI/2-.36;
        tilt.add(ring);
      });
    }
    const offset=seeded(id+'spin')()*Math.PI*2;
    return scenes[id]={scene,sphere,offset};
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
      if(canvas.width!==px){canvas.width=px;canvas.height=px}
      if(px>bufferSize){bufferSize=px;renderer.setSize(px,px,false)}
      entry.sphere.rotation.y=entry.offset+t*.22;
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
