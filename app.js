const WORLDS = [
  {
    id:'history', name:'Archiva', palette:['#24183d','#3f2b69','#5e4596','#8a6cc5','#c6b0f2'], size:1.2, subject:'History & Teamwork', orbit:'Orbit 6 · Outer frontier', short:'HT', color:'#b79cff', deep:'#37235f', soft:'rgba(183,156,255,.14)', ring:'#dccfff', ringed:true,
    surface:'radial-gradient(circle at 68% 24%,rgba(239,216,255,.72) 0 7%,transparent 8%),radial-gradient(ellipse at 28% 72%,rgba(69,39,102,.62) 0 24%,transparent 25%),radial-gradient(ellipse at 72% 54%,rgba(210,170,244,.22) 0 19%,transparent 20%),linear-gradient(145deg,#8c6cc5 0%,#5a3f86 52%,#30214f 100%)',
    complete:'You used clues and teamwork to make a smart plan.',
    lessons:[
      {label:'Clues from the past',title:'Old records are clues',text:'Space teams study old flight logs, photos, and recordings. A primary source is something made during the event, like a crew photo.',fact:'A secondary source is made later to explain what happened.',visual:'source-sort'},
      {label:'Check the claims',title:'Check every claim',text:'A claim is something someone says is true. Historians check each claim against primary sources before they believe it.',fact:'A claim with no evidence is called a rumor.',visual:'claim-check'},
      {label:'Share the work',title:'Teams share the work',text:'Big missions need teams. Each person takes the job that fits their skills, so nothing gets missed.',fact:'About 400,000 people worked on the Apollo Moon missions.',visual:'team-match'}
    ]
  },
  {
    id:'reading', name:'Lexis', palette:['#4f2b12','#8a4f1f','#c47a2d','#ecb04f','#ffe08f'], size:1.4, subject:'Reading & Writing', orbit:'Orbit 5 · Signal belt', short:'RW', color:'#ffd166', deep:'#654918', soft:'rgba(255,209,102,.14)', ringed:false,
    surface:'radial-gradient(ellipse at 32% 28%,rgba(255,248,194,.5) 0 10%,transparent 11%),repeating-linear-gradient(0deg,rgba(82,46,12,.2) 0 5px,transparent 6px 19px),linear-gradient(140deg,#ffd978,#c47a2d 58%,#633519)',
    complete:'Your message gave the team clear facts and a next step.',
    lessons:[
      {label:'Be specific',title:'Exact words help',text:'“The rover had a bad day” doesn’t help anyone fix it. Good logs say when, what changed, and why, using numbers.',fact:'A sol is one day on Mars, about 40 minutes longer than an Earth day.',visual:'precision-rewrite'},
      {label:'Know your reader',title:'Write for your reader',text:'Different readers need different details. Engineers want exact numbers, while museum visitors want the big picture.',fact:'The reader you write for is called your audience.',visual:'audience-match'},
      {label:'Say what’s next',title:'End with a next step',text:'A good report ends by saying what should happen next, so the team knows exactly what to do.',fact:'A clear next step says what to do and when.',visual:'next-step'}
    ]
  },
  {
    id:'art', name:'Prisma', palette:['#6875ea','#c46ee8','#ff6d8f','#ffcd67','#62dcc3'], size:1.0, subject:'Art & Design', orbit:'Orbit 4 · Color cloud', short:'AD', color:'#ff8cb8', deep:'#6c2447', soft:'rgba(255,140,184,.14)', ringed:true, ring:'#ffcf75',
    surface:'conic-gradient(from 25deg,#ff6d8f,#ffcd67,#62dcc3,#6875ea,#c46ee8,#ff6d8f)',
    complete:'You turned invisible light into a picture people can understand.',
    lessons:[
      {label:'False color',title:'Colors for hidden light',text:'Telescopes catch light our eyes can’t see, like infrared, the warm glow of heat. Scientists give each kind a color so we can see it.',fact:'Longer waves get red, middle waves get green, and shorter waves get blue.',visual:'channel-preview'},
      {label:'Read the key',title:'Every picture needs a key',text:'A color key tells people what each color means. Without one, nobody knows which light they’re looking at.',fact:'Our key: red shows infrared, green shows visible light, and blue shows ultraviolet.',visual:'key-read'},
      {label:'Show the detail',title:'Brightness shows detail',text:'Too dark hides faint dust, and too bright washes it out. Artists adjust the brightness until the details stand out.',fact:'Contrast is how different the light and dark parts look.',visual:'contrast-tune'}
    ]
  },
  {
    id:'engineering', name:'Rivet', palette:['#123f43','#1f6b62','#2f927c','#62cfa5','#d6fff0'], size:0.8, subject:'Engineering & Technology', orbit:'Orbit 3 · Rover lane', short:'ET', color:'#7ef0c4', deep:'#1c5f58', soft:'rgba(126,240,196,.13)', ringed:false,
    surface:'repeating-radial-gradient(circle at 38% 38%,transparent 0 13px,rgba(218,255,239,.2) 14px 16px),linear-gradient(140deg,#83e3bb,#2f927c 52%,#164c50)',
    complete:'Your rover reached the ridge with power to spare.',
    lessons:[
      {label:'Tradeoffs',title:'Every path has a cost',text:'Soft sand makes wheels slip and drains the battery. A longer path on firm rock can be safer than a short cut.',fact:'A tradeoff means giving up a little of one thing to get more of another.',visual:'tradeoff-board'},
      {label:'Plan the route',title:'Plan before you drive',text:'Engineers plan a rover’s path on a map first. Adding up each square’s cost stops nasty surprises.',fact:'Mars rovers get new driving plans from Earth almost every day.',visual:'path-plan'},
      {label:'Keep a reserve',title:'Save some power',text:'Rovers never plan to use every bit of battery. Leftover power is saved in case something goes wrong.',fact:'Extra room for mistakes is called a safety margin.',visual:'reserve-pick'}
    ]
  },
  {
    id:'science', name:'Spectra', palette:['#3d1520','#793448','#b84e3a','#ee8b52','#ffc98f'], size:0.65, subject:'Science', orbit:'Orbit 2 · Spectrum ring', short:'SC', color:'#ff9d72', deep:'#713727', soft:'rgba(255,157,114,.14)', ringed:false,
    surface:'radial-gradient(circle at 70% 25%,#ffd09b 0 7%,transparent 8%),radial-gradient(circle at 35% 68%,#663521 0 12%,transparent 13%),linear-gradient(140deg,#ee8b52,#793448)',
    complete:'You read dark lines in starlight to learn what a star is made of.',
    lessons:[
      {label:'Light fingerprints',title:'Starlight has fingerprints',text:'When starlight passes through gas, each element, like hydrogen, takes out certain colors. The dark lines left behind work like that element’s fingerprint.',fact:'Each line sits at a spot measured in nanometers (nm), a super tiny unit of length.',visual:'line-match'},
      {label:'Measure the light',title:'Colors have numbers',text:'Each color of light has a wavelength, measured in nanometers. Blue light is near 450 nm and red is near 650 nm.',fact:'A nanometer is one billionth of a meter.',visual:'nm-find'},
      {label:'Mix the elements',title:'Stars mix elements',text:'Most stars hold more than one element, so their dark lines add up into one pattern.',fact:'The Sun’s light shows lines from dozens of elements.',visual:'line-mix'}
    ]
  },
  {
    id:'math', name:'Numeria', palette:['#163872','#2454a0','#2f8fd0','#3fd1e7','#d8fbff'], size:0.9, subject:'Math', orbit:'Orbit 1 · Inner path', short:'MA', color:'#68ddff', deep:'#1b5375', soft:'rgba(104,221,255,.14)', ringed:true, ring:'#9aeaff',
    surface:'repeating-linear-gradient(18deg,transparent 0 13px,rgba(255,255,255,.18) 14px 17px),linear-gradient(140deg,#3fd1e7,#2454a0)',
    complete:'You used numbers to put your probe in the right orbit.',
    lessons:[
      {label:'Timing',title:'Aim where it will be',text:'A space station keeps moving, so you must launch toward where it will be. The angle between you and it is called the phase angle.',fact:'Meeting up in space means same place, same time, and same speed.',visual:'phase-meet'},
      {label:'Speed and size',title:'Faster means wider',text:'An orbit’s size depends on speed. Speed up and the path swings out wider; slow down and it shrinks.',fact:'Bigger orbits take longer to go all the way around.',visual:'speed-size'},
      {label:'Angles',title:'Angles measure turns',text:'An angle tells how far something turns. A full turn is 360°, and a quarter turn is 90°.',fact:'Space crews use angles to point antennas and engines.',visual:'angle-turn'}
    ]
  }
];

const KEY='space-everyone-journey-v6';
// Bump when the steps inside a world change, so stale resume points are dropped
const LESSON_LAYOUT=3;
let state=loadState();
let activeIndex=selectedIndex();
let lessonIndex=activeIndex;
let lessonStep=0;
let lessonReview=false;
const $=s=>document.querySelector(s);
const lessonDialog=$('#lesson-dialog');

function freshState(){return{completed:[],dates:{},resume:{},selected:null,layout:LESSON_LAYOUT}}
function loadState(){
  try{
    const saved=JSON.parse(localStorage.getItem(KEY));
    if(!saved||!Array.isArray(saved.completed)) return freshState();
    const ids=WORLDS.map(w=>w.id),next=freshState();
    next.completed=[...new Set(saved.completed)].filter(id=>ids.includes(id));
    next.completed.forEach(id=>{next.dates[id]=saved.dates?.[id]||new Date().toISOString()});
    if(saved.layout===LESSON_LAYOUT) WORLDS.forEach(w=>{
      const step=Number(saved.resume?.[w.id]);
      if(!next.completed.includes(w.id)&&Number.isInteger(step)&&step>0) next.resume[w.id]=Math.min(step,stepCount(w)-2);
    });
    if(ids.includes(saved.selected)) next.selected=saved.selected;
    return next;
  }catch{return freshState()}
}
function saveState(){localStorage.setItem(KEY,JSON.stringify(state))}
function stepCount(w){return w.lessons.length+2}
function isDone(i){return state.completed.includes(WORLDS[i].id)}
function firstOpenIndex(from=0){for(let k=0;k<WORLDS.length;k++){const i=(from+k)%WORLDS.length;if(!isDone(i))return i}return -1}
// Point to a world the kid already started; otherwise the next unfinished one in route order
function suggestNext(from){const started=WORLDS.findIndex((w,i)=>!isDone(i)&&state.resume[w.id]>0);return started>=0?started:firstOpenIndex(from+1)}
function selectedIndex(){const i=WORLDS.findIndex(w=>w.id===state.selected);return i>=0?i:Math.max(firstOpenIndex(),0)}
// Pixel icons drawn from 8x8 grids, to match the pixel-textured planets
const PIXEL_ICONS={
  check:['........','.......#','......##','#....##.','##..##..','.####...','..##....','........'],
  lock:['..####..','.#....#.','.#....#.','########','###..###','###..###','########','........']
};
const ICON=name=>`<svg class="icon" viewBox="0 0 8 8" aria-hidden="true" shape-rendering="crispEdges">${PIXEL_ICONS[name].flatMap((row,y)=>[...row].map((c,x)=>c==='#'?`<rect x="${x}" y="${y}" width="1" height="1"/>`:'')).join('')}</svg>`;
function worldsLeft(){const left=WORLDS.length-state.completed.length;return `${left} world${left===1?'':'s'} to go`}
function createStars(){let seed=7331;const random=()=>((seed=Math.imul(seed,1664525)+1013904223>>>0)/4294967296);$('#star-layer').innerHTML=Array.from({length:120},(_,i)=>`<i class="star ${i%17===0?'large':''}" style="left:${(random()*100).toFixed(2)}%;top:${(random()*100).toFixed(2)}%;--speed:${(2.2+random()*4).toFixed(2)}s;--delay:${(-random()*5).toFixed(2)}s;--opacity:${(.35+random()*.6).toFixed(2)}"></i>`).join('')}
function setTheme(w){document.documentElement.style.setProperty('--theme',w.color);document.documentElement.style.setProperty('--theme-deep',w.deep);document.documentElement.style.setProperty('--theme-soft',w.soft)}
function planetStyle(w){return `--planet-surface:${w.surface};--ring:${w.ring||w.color}`}
function planetMarkup(w){return `<span class="planet-body ${w.ringed?'ringed':''}"><span class="planet-ring-back" aria-hidden="true"></span><span class="planet-sphere"></span><span class="planet-ring-front" aria-hidden="true"></span><canvas class="planet-canvas" data-world="${w.id}" aria-hidden="true"></canvas></span>`}

function renderHome(){
  const done=state.completed.length,complete=done===WORLDS.length;
  $('#progress-count').textContent=`${done} / 6`;
  // One block per world, lit in that world's color once it is recorded
  $('#progress-blocks').innerHTML=WORLDS.map((w,i)=>`<span class="${isDone(i)?'lit':''}" style="--c:${w.color}"></span>`).join('');
  $('#log-count').textContent=done;
  $('#active-journey').hidden=complete;
  $('#active-journey').inert=complete;
  $('#complete-journey').hidden=!complete;
  document.body.classList.toggle('is-complete',complete);
  if(complete){renderCompleteHome();return}
  activeIndex=selectedIndex();
  const world=WORLDS[activeIndex],worldDone=isDone(activeIndex),resumed=!worldDone&&state.resume[world.id]>0;
  setTheme(world);
  $('#orbit-kicker').textContent=`${world.orbit} · ${done} of 6 worlds recorded`;
  buildSystem();
  document.querySelectorAll('.sys-planet').forEach(btn=>{
    const i=Number(btn.dataset.index),w=WORLDS[i],d=isDone(i),current=i===activeIndex;
    const status=d?'Recorded':state.resume[w.id]>0?'In progress':'Not explored yet';
    btn.classList.toggle('is-current',current);
    btn.classList.toggle('is-done',d);
    btn.toggleAttribute('aria-current',current);
    btn.setAttribute('aria-label',current?`${d?'Review':'Enter'} ${w.name}, ${w.subject}, ${status.toLowerCase()}`:`Fly to ${w.name}, ${w.subject}, ${status.toLowerCase()}`);
    btn.querySelector('.sys-label small').innerHTML=current?`${d?ICON('check')+' ':''}${status}`:'';
  });
  const launch=$('#launch-button');
  launch.innerHTML=worldDone?`<span>Review this world</span><small>${ICON('check')} Recorded</small>`:resumed?'<span>Keep going</span><small>Pick up where you stopped</small>':'<span>Enter this world</span><small>About 3 minutes</small>';
  launch.onclick=()=>openLesson(activeIndex);
  $('#route-list').innerHTML=WORLDS.map((w,i)=>{
    const d=isDone(i),status=d?'Recorded':state.resume[w.id]>0?'In progress':'Not yet';
    return `<li><button type="button" class="route-item ${d?'complete':'open'} ${i===activeIndex?'current':''}" data-index="${i}" aria-pressed="${i===activeIndex}" aria-label="${w.name}, ${w.subject}, ${status}"><span class="route-index">0${i+1}</span><strong>${w.name}</strong><span class="route-subject">${w.subject}</span><span class="swatch" aria-hidden="true">${w.palette.map(c=>`<i style="background:${c}"></i>`).join('')}</span><small>${d?ICON('check')+' ':''}${status}</small></button></li>`;
  }).join('');
  $('#route-list').querySelectorAll('.route-item').forEach(item=>item.addEventListener('click',()=>travelTo(Number(item.dataset.index))));
  $('#cert-status').innerHTML=`<span class="cert-lock">${ICON('lock')}</span><span><strong>Certificate</strong><small>${worldsLeft()}</small></span>`;
  // Lay out now, and again once the route strip has settled
  layoutSystem();
  requestAnimationFrame(layoutSystem);
}

// The home map: the sun in the middle and one tilted orbit per world, all in view at once.
// Math sits on the inner orbit and History on the outer one, matching their orbit names.
const ORBIT_ANGLE={math:210,science:30,engineering:150,art:320,reading:100,history:250};
function buildSystem(){
  const stage=$('#space-stage');
  if(stage.dataset.built)return;
  stage.dataset.built='1';
  stage.innerHTML='<span class="sys-sun" aria-hidden="true"><canvas class="planet-canvas" data-world="sun" aria-hidden="true"></canvas></span>'
    +WORLDS.map(()=>'<span class="sys-orbit" aria-hidden="true"></span>').join('')
    +'<span class="sys-marker" aria-hidden="true"><i></i><i></i><i></i><i></i></span>'
    +WORLDS.map((w,i)=>`<button type="button" class="sys-planet" data-index="${i}" style="${planetStyle(w)}">${planetMarkup(w)}<span class="planet-check">${ICON('check')}</span><span class="sys-label"><strong>${w.name}</strong><em>${w.subject}</em><small></small></span></button>`).join('');
  stage.querySelectorAll('.sys-planet').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const i=Number(btn.dataset.index);
      if(i===activeIndex)openLesson(i);else travelTo(i);
    });
    ['pointerenter','focus'].forEach(e=>btn.addEventListener(e,()=>{orbitClock.held=true}));
    ['pointerleave','blur'].forEach(e=>btn.addEventListener(e,()=>{orbitClock.held=false}));
  });
}
// Orbit clock: advances every frame unless a kid is pointing at or focused on a planet, so targets hold still
const orbitClock={t:0,last:0,held:false};
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let systemGeo=null,markerPos=null,markerGlide=null,markerIndex=-1;
const planetScale=WORLDS.map(()=>1);
function layoutSystem(){
  const stage=$('#space-stage');
  if(!stage?.dataset.built)return;
  const W=stage.clientWidth,H=stage.clientHeight;
  if(!W||!H)return;
  // Fill the width first, then tilt the view just enough to fill the height too.
  // Phones show only the picked world's label, so the map can run closer to the edges and look straight down.
  const narrow=W<600,sizeFor=r=>Math.min(84,Math.max(36,r*.14));
  let R=W/2-(narrow?30:40);
  // Room for an ordinary planet at the top and a planet plus its label at the bottom
  const top=sizeFor(R)*.9+8,bottom=sizeFor(R)*.75+(narrow?24:40),halfH=(H-top-bottom)/2;
  const tilt=Math.min(narrow?1:.7,Math.max(.26,halfH/R));
  R=Math.max(80,Math.min(R,halfH/tilt));
  const cx=W/2,cy=top+halfH;
  const sun=stage.querySelector('.sys-sun'),sunSize=Math.min(100,Math.max(34,R*.17));
  Object.assign(sun.style,{left:`${cx}px`,top:`${cy}px`,width:`${sunSize}px`,height:`${sunSize}px`});
  const radii=WORLDS.map((w,i)=>R*(.36+.64*(WORLDS.length-1-i)/(WORLDS.length-1)));
  stage.querySelectorAll('.sys-orbit').forEach((orbit,i)=>Object.assign(orbit.style,{left:`${cx}px`,top:`${cy}px`,width:`${2*radii[i]}px`,height:`${2*radii[i]*tilt}px`}));
  systemGeo={stage,cx,cy,R,tilt,radii,base:sizeFor(R),planets:stage.querySelectorAll('.sys-planet'),marker:stage.querySelector('.sys-marker')};
  // Snap into place the first time; after that, picks and resizes animate
  placePlanets(performance.now(),!markerPos);
}
// Like real planets, inner worlds go around faster: the outer orbit takes 3 minutes
function orbitSpeed(i){return 2*Math.PI/180*Math.pow(systemGeo.R/systemGeo.radii[i],1.5)}
function placePlanets(now,snap){
  const g=systemGeo;
  if(!g)return;
  const {cx,cy,tilt,base,planets,marker}=g;
  let target=null;
  WORLDS.forEach((w,i)=>{
    const a=ORBIT_ANGLE[w.id]*Math.PI/180+orbitClock.t*orbitSpeed(i);
    const x=cx+g.radii[i]*Math.cos(a),y=cy+g.radii[i]*tilt*Math.sin(a);
    // Each world has its own size; the picked one grows smoothly, and the near side of the sun looks a little bigger
    const want=i===activeIndex?1.35:1;
    planetScale[i]=snap?want:planetScale[i]+(want-planetScale[i])*.12;
    // Whole pixels keep the 3D canvases from resizing every frame
    const size=Math.round(base*w.size*(.9+.2*(Math.sin(a)+1)/2)*planetScale[i]);
    const btn=planets[i];
    // The picked world and its label stay in front so passing worlds never cover its name
    Object.assign(btn.style,{left:`${x.toFixed(1)}px`,top:`${y.toFixed(1)}px`,zIndex:String(i===activeIndex?5000:10+Math.round(y))});
    btn.style.setProperty('--planet-size',`${size}px`);
    // The reticle hugs the planet: ringed worlds are wider than their sphere but no taller
    const markerW=size*(w.ringed?1.75:1)+24,markerH=size+24;
    btn.style.setProperty('--label-top',`${((i===activeIndex?markerH:size)/2+8).toFixed(1)}px`);
    // Near the bottom of the map, labels sit above their world so the route strip never covers them
    btn.classList.toggle('label-above',y>cy+g.radii[i]*tilt*.45);
    // Slide the label sideways when a world passes near the edge of the map
    const half=i===activeIndex?130:65,W=g.stage.clientWidth;
    btn.style.setProperty('--label-shift',`${(Math.min(Math.max(x,half+4),W-half-4)-x).toFixed(1)}px`);
    if(i===activeIndex)target={x,y,w:markerW,h:markerH};
  });
  if(!target)return;
  // When the pick changes, the marker flies from where it was to the new world as it moves
  if(markerIndex!==activeIndex){
    if(markerPos&&!snap)markerGlide={from:{...markerPos},start:now};
    markerIndex=activeIndex;
  }
  let pos=target;
  if(markerGlide){
    const p=Math.min(1,(now-markerGlide.start)/800),e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2,f=markerGlide.from;
    pos={x:f.x+(target.x-f.x)*e,y:f.y+(target.y-f.y)*e,w:f.w+(target.w-f.w)*e,h:f.h+(target.h-f.h)*e};
    if(p>=1)markerGlide=null;
  }
  markerPos=pos;
  marker.style.setProperty('--marker-w',`${pos.w.toFixed(1)}px`);
  marker.style.setProperty('--marker-h',`${pos.h.toFixed(1)}px`);
  marker.style.transform=`translate(${pos.x.toFixed(1)}px,${pos.y.toFixed(1)}px) translate(-50%,-50%)`;
}
function tickSystem(now){
  requestAnimationFrame(tickSystem);
  const dt=orbitClock.last?Math.min(.1,(now-orbitClock.last)/1000):0;
  orbitClock.last=now;
  if(!systemGeo||!systemGeo.stage.offsetParent)return;
  if(!orbitClock.held&&!reduceMotion.matches)orbitClock.t+=dt;
  placePlanets(now,false);
}

function renderCompleteHome(){
  setTheme(WORLDS[WORLDS.length-1]);
  // Same orbits and starting spots as the home map: Math inside, History outside.
  // Near-side worlds cross in front of their orbit while far-side worlds pass behind it.
  $('#complete-system').innerHTML=`<span class="complete-sun" aria-hidden="true"><canvas class="planet-canvas" data-world="sun" aria-hidden="true"></canvas></span>`+WORLDS.map((w,i)=>{
    const k=WORLDS.length-1-i,angle=ORBIT_ANGLE[w.id]*Math.PI/180;
    const size=30+k*12;
    const height=54+k*19;
    const rx=size/2, ry=height/6.4;
    const x=50+rx*Math.cos(angle);
    const y=50+ry*Math.sin(angle);
    const orbitLayer=8+k*3;
    const planetLayer=orbitLayer+(Math.sin(angle)>0?2:-1);
    return `<span class="complete-ring" style="--orbit-size:${size}%;--orbit-height:${height}px;--layer:${orbitLayer};--delay:${-i*1.2}s"></span><button class="complete-planet" data-index="${i}" aria-label="Review ${w.name}, ${w.subject}" style="left:${x.toFixed(2)}%;top:${y.toFixed(2)}%;--s:${Math.round(40*w.size)}px;--layer:${planetLayer};--delay:${-i*.7}s;${planetStyle(w)}">${planetMarkup(w)}</button>`;
  }).join('');
  $('#complete-grid').innerHTML=WORLDS.map((w,i)=>`<button class="complete-card" data-index="${i}" style="--card-color:${w.color}"><strong>${w.name}</strong><span class="card-subject">${w.subject}</span><small>${w.complete}</small></button>`).join('');
  document.querySelectorAll('.complete-planet, .complete-card').forEach(el=>{
    el.addEventListener('click',()=>openLesson(Number(el.dataset.index)));
  });
}

function openLesson(index=activeIndex){
  lessonIndex=index;
  // Recorded worlds open in review mode; unfinished worlds resume where the kid stopped
  lessonReview=isDone(index);
  const w=WORLDS[lessonIndex];
  setTheme(w);
  lessonStep=lessonReview?0:Math.min(state.resume[w.id]||0,stepCount(w)-2);
  $('#lesson-title').textContent=w.subject;
  $('#lesson-orbit').textContent=`Planet ${w.name} · ${w.orbit}${lessonReview?' · Review':''}`;
  $('#lesson-footer-note').textContent=lessonReview?'You finished this world, so you can move through it freely.':'';
  lessonDialog.showModal();
  renderLesson();
}

function renderLesson(){
  const w=WORLDS[lessonIndex],lessonCount=w.lessons.length,total=stepCount(w);
  $('#lesson-progress-fill').style.width=`${(lessonStep+1)/total*100}%`;
  $('#lesson-steps').innerHTML=[...w.lessons.map(s=>s.label),'Field mission','Orbit passed'].map((name,i)=>`<button type="button" class="step-pill ${i===lessonStep?'active':i<lessonStep||lessonReview?'done':''}" data-step="${i}">${i+1}. ${name}</button>`).join('');
  // On narrow screens the step tabs scroll sideways, so keep the current one in view
  const activePill=$('#lesson-steps .step-pill.active');
  $('#lesson-steps').scrollLeft=activePill?activePill.offsetLeft-$('#lesson-steps').offsetLeft-18:0;
  if(lessonReview){
    $('#lesson-steps').querySelectorAll('.step-pill').forEach(pill=>pill.addEventListener('click',()=>{lessonStep=Number(pill.dataset.step);renderLesson()}));
  }
  $('#lesson-back').style.visibility=lessonStep===0?'hidden':'visible';
  const onActivity=lessonStep===lessonCount;
  const onComplete=lessonStep===total-1;
  $('#lesson-next').style.display=onActivity||onComplete?'none':'block';
  if(!lessonReview) $('#lesson-footer-note').textContent='';
  $('#lesson-next').disabled=!lessonReview;
  if(lessonStep<lessonCount) renderConcept(w,w.lessons[lessonStep]);
  else if(lessonStep===lessonCount){
    if(lessonReview){
      $('#lesson-stage').innerHTML=`<article class="activity-page"><div class="activity-heading"><div><span class="mission-badge">Field mission</span><h3>${activityTitle(w.id)}</h3></div><p>This practice is optional while you review.</p></div><div class="activity-workspace" id="activity-workspace"></div><div class="step-nav" style="margin-top:16px"><button class="continue-button" id="skip-activity">Continue</button></div></article>`;
      activityRenderers[w.id]();
      $('#skip-activity').onclick=()=>{lessonStep++;renderLesson()};
    } else renderActivity(w);
  } else renderCompletion(w);
  if(!lessonReview&&!isDone(lessonIndex)){state.resume[w.id]=lessonStep;saveState()}
  $('#lesson-stage').scrollTop=0;
}

function renderConcept(w,step){
  $('#lesson-next').disabled=!lessonReview;
  $('#lesson-stage').innerHTML=`<article class="lesson-page"><div class="lesson-copy"><span class="mission-badge">Lesson</span><h3>${step.title}</h3><p>${step.text}</p><p class="big-fact">${step.fact}</p></div><div class="lesson-visual"><span class="visual-label">Field note</span>${visualHTML(step)}</div></article>`;
  document.querySelectorAll('.lesson-check').forEach(el=>{el.textContent='';el.className='sr-only';el.setAttribute('aria-live','polite')});
  bindConceptVisual(step);
  if(lessonReview) $('#lesson-next').disabled=false;
}

// Shared pieces for lesson activities and missions
function say(el,html,kind=''){el.innerHTML=html;el.dataset.kind=kind}
function strip(lines,cls=''){return `<span class="spec-strip ${cls}" aria-hidden="true">${lines.map(nm=>`<i style="left:${((nm-400)/3).toFixed(1)}%"></i>`).join('')}</span>`}
const SPEC_SCALE='<span class="spec-scale" aria-hidden="true"><b>400</b><b>500</b><b>600</b><b>700 nm</b></span>';
function wave(cycles){let d='M0 12';for(let x=1;x<=60;x++)d+=` L${x} ${(12-8*Math.sin(x/60*cycles*2*Math.PI)).toFixed(1)}`;return `<svg class="wave" viewBox="0 0 60 24" aria-hidden="true"><path d="${d}"/></svg>`}
const COLORS={red:'#ec4167',green:'#42d39a',blue:'#6295ff'};
const LIGHTS=[
  {id:'ir',name:'Infrared',size:'Longest waves',cycles:1.5,right:'red'},
  {id:'vis',name:'Visible',size:'Middle waves',cycles:3,right:'green'},
  {id:'uv',name:'Ultraviolet',size:'Shortest waves',cycles:6,right:'blue'}
];
function lightRows(){return LIGHTS.map(l=>`<div class="light-row" data-light="${l.id}">${wave(l.cycles)}<div class="light-name"><strong>${l.name}</strong><small>${l.size}</small></div><div class="chip-row">${Object.entries(COLORS).map(([k,c])=>`<button type="button" class="choice-chip color-chip" data-color="${k}"><span style="background:${c}"></span>${k[0].toUpperCase()+k.slice(1)}</button>`).join('')}</div></div>`).join('')}
// A row of answer chips: a right answer locks the row, a wrong one shakes and explains
function bindChoices(row,isRight,onRight,onWrong){
  const chips=[...row.querySelectorAll('.choice-chip')];
  chips.forEach(chip=>chip.addEventListener('click',()=>{
    if(row.dataset.locked)return;
    chips.forEach(c=>c.classList.remove('wrong'));
    if(isRight(chip)){chip.classList.add('right');row.dataset.locked='1';chips.forEach(c=>c.disabled=true);onRight(chip)}
    else{void chip.offsetWidth;chip.classList.add('wrong');onWrong(chip)}
  }));
}
// Mission parts open one at a time; only the lesson area scrolls, never the dialog itself
function openPart(n){
  const part=$(`[data-part="${n}"]`),stage=$('#lesson-stage');
  if(!part||!part.hidden)return;
  part.hidden=false;
  const below=part.getBoundingClientRect().bottom-stage.getBoundingClientRect().bottom;
  if(below>0)stage.scrollBy({top:below+16,behavior:reduceMotion.matches?'auto':'smooth'});
}

const VAGUE=[
  {text:'a day',options:['some day','Sol 18','a while ago'],right:'Sol 18'},
  {text:'power got bad',options:['power got really bad','battery fell from 62% to 41%','things went wrong'],right:'battery fell from 62% to 41%'},
  {text:'weather',options:['bad weather','the dust storm','stuff outside'],right:'the dust storm'}
];
const STAR_LINES=[486,589,656];
const ELEMENTS=[{name:'Hydrogen',lines:[486,656]},{name:'Helium',lines:[447,502]},{name:'Sodium',lines:[589]}];
const CLAIMS=[
  {t:'The hatch was sealed at 14:02.',ok:true,why:'The log says “Hatch sealed” at 14:02, so it’s backed up.'},
  {t:'Oxygen was running low.',ok:false,why:'The log says oxygen was at 98%, so that claim isn’t backed up.'},
  {t:'The crew forgot to seal the hatch.',ok:false,why:'The log shows the hatch was sealed, so that’s a rumor.'}
];
const TEAM=[{name:'Mae',skill:'loves reading maps',job:'route'},{name:'Leo',skill:'is great with tools',job:'fix'}];
const TEAM_JOBS={fix:'Fix the radio',route:'Plan the route'};
const READERS=[
  {t:'Battery dropped from 62% to 41% on Sol 18.',to:'eng',why:'Exact numbers help engineers fix things.'},
  {t:'A huge dust storm swept over our rover today!',to:'pub',why:'Visitors want the big, exciting picture.'}
];
const ENDINGS=[
  {t:'Hope it gets better soon.',why:'Hoping doesn’t tell the team what to do.'},
  {t:'Drive slowly and send a wheel photo by Sol 20.',right:true},
  {t:'Wheels are really important.',why:'True, but it isn’t a next step.'}
];
const KEY_QUESTIONS=[{q:'Which cloud shows infrared light?',right:'red'},{q:'Which cloud shows ultraviolet light?',right:'blue'}];
// A 3 by 3 map: the rover starts bottom left and the tower is top right
const PLAN_GRID=['rock','rock','rock goal','rock','sand','sand','rock','sand','rock'];
const PLAN_START=6,PLAN_GOAL=2;
const RESERVE_PLANS=[
  {t:'Plan A',d:'uses 10 power, 0 left',why:'Zero left over: one surprise and the rover is stuck.'},
  {t:'Plan B',d:'uses 7 power, 3 left',right:true},
  {t:'Plan C',d:'uses 12 power',why:'12 is more power than the battery holds.'}
];
const NM_TASKS=[{nm:450,color:'blue'},{nm:650,color:'red'}];
const MIX_STAR=[558,589,630];
const MIX_ELEMENTS=[{name:'Hydrogen',lines:[486,656]},{name:'Sodium',lines:[589]},{name:'Oxygen',lines:[558,630]}];

function visualHTML(step){
  const v=step.visual;
  if(v==='source-sort') return `<p class="note-prompt">Drag or tap each card, then tap the box it belongs in.</p><div class="sort-bins"><div class="sort-bin" data-bin="primary"><h4>Primary</h4><small>Made during the event</small><div class="bin-drop" data-accept="primary"></div></div><div class="sort-bin" data-bin="secondary"><h4>Secondary</h4><small>Made later</small><div class="bin-drop" data-accept="secondary"></div></div></div><div class="sort-bank" id="source-bank"><button type="button" class="sort-chip" draggable="true" data-kind="primary" data-why="The crew said it during the flight.">Radio recording</button><button type="button" class="sort-chip" draggable="true" data-kind="primary" data-why="This real part flew on the mission.">Heat-shield piece</button><button type="button" class="sort-chip" draggable="true" data-kind="primary" data-why="It was taken during the mission.">Crew photo</button><button type="button" class="sort-chip" draggable="true" data-kind="secondary" data-why="Someone wrote it years later to explain the mission.">Textbook chapter</button></div><p class="reveal-panel" id="source-why"></p><p class="lesson-check" id="field-note"></p>`;
  if(v==='precision-rewrite'){const b=i=>`<button type="button" class="blank-chip" data-v="${i}">${VAGUE[i].text}</button>`;return `<p class="note-prompt">Tap each vague phrase and pick the exact version.</p><div class="rewrite-card"><p>On ${b(0)}, the rover’s ${b(1)} during ${b(2)}.</p></div><div class="choice-pop" id="choice-pop" hidden></div><p class="reveal-panel" id="rewrite-out"></p><p class="lesson-check" id="field-note"></p>`}
  if(v==='channel-preview') return `<p class="note-prompt">Tap a color for each kind of light.</p><div class="mini-nebula" id="mini-nebula"></div>${lightRows()}<p class="reveal-panel" id="light-note"></p><p class="lesson-check" id="field-note"></p>`;
  if(v==='tradeoff-board'){const sq=(kind,n,cost)=>`<span class="route-squares">${Array.from({length:n},()=>`<i class="${kind}">${cost}</i>`).join('')}</span>`;return `<p class="note-prompt">Each rock square costs 1 power and each sand square costs 2. Which route uses less?</p><div class="trade-cards"><button type="button" class="trade-card" data-ok="no"><strong>Short cut · 4 sand squares</strong>${sq('sand',4,2)}<small class="trade-total">2 + 2 + 2 + 2 = 8 power</small></button><button type="button" class="trade-card" data-ok="yes"><strong>Long way · 6 rock squares</strong>${sq('rock',6,1)}<small class="trade-total">1 + 1 + 1 + 1 + 1 + 1 = 6 power</small></button></div><p class="reveal-panel" id="trade-note"></p><p class="lesson-check" id="field-note"></p>`}
  if(v==='line-match') return `<p class="note-prompt">Tap each element whose lines all show up in the star.</p><div class="spec-row"><span class="spec-name">Star</span>${strip(STAR_LINES,'star-strip')}</div>${ELEMENTS.map((e,i)=>`<button type="button" class="choice-chip element-card" data-el="${i}"><span class="spec-name">${e.name}</span>${strip(e.lines)}</button>`).join('')}<div class="spec-row"><span class="spec-name"></span>${SPEC_SCALE}</div><p class="reveal-panel" id="line-note"></p><p class="lesson-check" id="field-note"></p>`;
  if(v==='phase-meet') return `<p class="note-prompt">Aim your probe, then launch it to meet the station.</p><div class="phase-stage"><svg class="phase-svg" viewBox="0 0 200 200" aria-hidden="true"><circle class="phase-orbit-ring" cx="100" cy="100" r="72"/><line class="phase-ray aim" id="aim-ray" x1="100" y1="100" x2="172" y2="100"/><circle class="phase-hub" cx="100" cy="100" r="8"/><circle class="phase-dot probe" id="probe-mark" cx="100" cy="100" r="5"/><rect class="phase-dot station" id="station-mark" width="14" height="14"/></svg><span class="phase-key"><i class="station"></i>Station <i class="probe"></i>Your probe</span></div><label class="aim-control">Aim ahead of the station <output id="phase-out">10°</output><input id="phase-range" type="range" min="0" max="90" value="10"></label><button type="button" class="pass-button" id="launch">Launch</button><p class="reveal-panel" id="phase-note"></p><p class="lesson-check" id="field-note"></p>`;
  const check='<p class="lesson-check" id="field-note"></p>';
  if(v==='claim-check') return `<p class="note-prompt">Is each claim backed up by the crew log?</p><div class="log-card"><span class="visual-label">Crew log · 14:02</span><p>Hatch sealed. Oxygen at 98%.</p></div>${CLAIMS.map((c,i)=>`<div class="claim-row" data-i="${i}"><p>${c.t}</p><div class="chip-row"><button type="button" class="choice-chip" data-ok="yes">Backed up</button><button type="button" class="choice-chip" data-ok="no">Not backed up</button></div></div>`).join('')}<p class="reveal-panel" id="claim-note"></p>${check}`;
  if(v==='team-match') return `<p class="note-prompt">Give each crew member the job that fits their skill.</p>${TEAM.map((p,i)=>`<div class="crew-row" data-i="${i}"><div><strong>${p.name}</strong><small>${p.skill}</small></div><div class="chip-row">${Object.entries(TEAM_JOBS).map(([k,t])=>`<button type="button" class="choice-chip" data-job="${k}">${t}</button>`).join('')}</div></div>`).join('')}<p class="reveal-panel" id="team-note"></p>${check}`;
  if(v==='audience-match') return `<p class="note-prompt">Who is each message written for?</p>${READERS.map((m,i)=>`<div class="claim-row" data-i="${i}"><p>“${m.t}”</p><div class="chip-row"><button type="button" class="choice-chip" data-to="eng">Engineers</button><button type="button" class="choice-chip" data-to="pub">Museum visitors</button></div></div>`).join('')}<p class="reveal-panel" id="reader-note"></p>${check}`;
  if(v==='next-step') return `<p class="note-prompt">Pick the best last line for this report.</p><div class="log-card"><span class="visual-label">Rover report · Sol 19</span><p>Wheel 3 is stuck in loose sand.</p></div><div class="chip-row stacked" id="ending-row">${ENDINGS.map((e,i)=>`<button type="button" class="choice-chip" data-i="${i}">${e.t}</button>`).join('')}</div><p class="reveal-panel" id="ending-note"></p>${check}`;
  if(v==='key-read') return `<p class="note-prompt">Use the key to answer the question.</p><div class="key-picture" aria-hidden="true"><i class="blob red"></i><i class="blob green"></i><i class="blob blue"></i></div><div class="mapping-key"><span>Red: infrared</span><span>Green: visible</span><span>Blue: ultraviolet</span></div><p class="key-question" id="key-question"></p><div class="chip-row" id="key-row"></div><p class="reveal-panel" id="key-note"></p>${check}`;
  if(v==='contrast-tune') return `<p class="note-prompt">Slide until you can see the dark dust pillar.</p><div class="nebula-canvas tune-canvas" id="tune-canvas"><div class="nebula-clouds"></div><span class="dust-pillar"></span></div><label class="aim-control">Brightness <output id="tune-out">10</output><input id="tune-range" type="range" min="0" max="100" value="10"></label><span class="meter" id="tune-meter"></span>${check}`;
  if(v==='path-plan') return `<p class="note-prompt">Tap squares to drive to the tower using 5 power or less.</p><div class="mini-grid" id="mini-grid">${PLAN_GRID.map((t,i)=>`<button type="button" class="terrain-cell ${t}" data-cell="${i}" aria-label="${t==='sand'?'Sand':'Rock'}${i===PLAN_GOAL?', tower':''}"></button>`).join('')}</div><p class="plan-total"><strong id="plan-used">0</strong> of 5 power used <button type="button" class="back-button" id="plan-reset">Reset</button></p><p class="reveal-panel" id="plan-note"></p>${check}`;
  if(v==='reserve-pick') return `<p class="note-prompt">The battery holds 10 power. Which plan is safest?</p><div class="chip-row stacked" id="reserve-row">${RESERVE_PLANS.map((r,i)=>`<button type="button" class="choice-chip" data-i="${i}"><strong>${r.t}</strong> · ${r.d}</button>`).join('')}</div><p class="reveal-panel" id="reserve-note"></p>${check}`;
  if(v==='nm-find') return `<p class="note-prompt" id="nm-task"></p><div class="spectrum-view spectrum-scanner mini-spectrum" id="nm-scanner" role="slider" aria-label="Wavelength" aria-valuemin="400" aria-valuemax="700" aria-valuenow="550" tabindex="0"><span class="scanner" id="nm-bar"></span></div>${SPEC_SCALE}<p class="spectrum-readout"><span>Scanner at <output id="nm-out">550 nm</output></span></p><p class="reveal-panel" id="nm-note"></p>${check}`;
  if(v==='line-mix') return `<p class="note-prompt">Turn on elements until your mix matches the star.</p><div class="spec-row"><span class="spec-name">Star</span>${strip(MIX_STAR,'star-strip')}</div><div class="spec-row"><span class="spec-name">Your mix</span><span id="mix-strip">${strip([])}</span></div><div class="chip-row" id="mix-row">${MIX_ELEMENTS.map((e,i)=>`<button type="button" class="choice-chip" data-i="${i}" aria-pressed="false">${e.name}</button>`).join('')}</div><p class="reveal-panel" id="mix-note"></p>${check}`;
  if(v==='speed-size') return `<p class="note-prompt">Change the speed until your orbit fits the dashed one.</p><div class="phase-stage"><svg class="phase-svg" viewBox="0 0 200 200" aria-hidden="true"><circle class="phase-orbit-ring" cx="100" cy="100" r="62"/><circle class="size-orbit" id="size-orbit" cx="100" cy="100" r="40"/><circle class="phase-hub" cx="100" cy="100" r="8"/></svg></div><label class="aim-control">Speed <output id="size-out">20</output><input id="size-range" type="range" min="0" max="100" value="20"></label><span class="meter" id="size-meter"></span>${check}`;
  if(v==='angle-turn') return `<p class="note-prompt">Turn the antenna a quarter turn to point at the station.</p><div class="phase-stage"><svg class="phase-svg" viewBox="0 0 200 200" aria-hidden="true"><circle class="phase-orbit-ring" cx="100" cy="100" r="72"/><path class="turn-arc" id="turn-arc" d=""/><line class="phase-ray probe" id="antenna" x1="100" y1="100" x2="172" y2="100"/><circle class="phase-hub" cx="100" cy="100" r="8"/><rect class="phase-dot station" x="93" y="21" width="14" height="14"/></svg></div><div class="chip-row"><button type="button" class="back-button" id="turn-left">Turn +15°</button><button type="button" class="back-button" id="turn-right">Turn −15°</button><strong class="turn-readout" id="turn-out">0°</strong></div><p class="reveal-panel" id="turn-note"></p>${check}`;
  return `<p class="lesson-check" id="field-note"></p>`;
}

function bindConceptVisual(step){
  const next=$('#lesson-next'), note=$('#field-note'), v=step.visual;
  const done=msg=>{next.disabled=false;note.textContent=msg;if(!lessonReview)$('#lesson-footer-note').textContent=''};

  if(v==='source-sort'){
    const why=$('#source-why'); let placed=0, picked=null, dragChip=null;
    const place=(chip,accept)=>{
      if(chip.dataset.locked) return;
      chip.classList.remove('picked'); picked=null;
      if(chip.dataset.kind!==accept){chip.classList.remove('wrong');void chip.offsetWidth;chip.classList.add('wrong');say(why,`Not quite: was <strong>${chip.textContent}</strong> made during the event, or later?`,'bad');return}
      chip.classList.remove('wrong');
      chip.dataset.locked='1'; chip.draggable=false; chip.disabled=true;
      document.querySelector(`.bin-drop[data-accept="${accept}"]`).append(chip);
      placed++;
      say(why,`<strong>${chip.textContent}</strong>: ${chip.dataset.why}${placed===4?' All sorted!':''}`,'good');
      if(placed===4) done('All sorted! You can tell clues from later stories.');
    };
    $('#source-bank').querySelectorAll('.sort-chip').forEach(chip=>{
      chip.addEventListener('dragstart',e=>{dragChip=chip; chip.classList.add('dragging'); e.dataTransfer.setData('text/plain',chip.dataset.kind); e.dataTransfer.effectAllowed='move'});
      chip.addEventListener('dragend',()=>{chip.classList.remove('dragging'); dragChip=null});
      // Tap a card, then tap a box: drag-and-drop does not fire on touch screens
      chip.addEventListener('click',()=>{if(chip.dataset.locked)return; picked?.classList.remove('picked'); picked=chip; chip.classList.add('picked'); say(why,'')});
    });
    document.querySelectorAll('.sort-bin').forEach(bin=>{
      const drop=bin.querySelector('.bin-drop');
      bin.addEventListener('click',()=>{if(picked) place(picked, drop.dataset.accept)});
      bin.addEventListener('dragover',e=>{e.preventDefault(); drop.classList.add('drag-over')});
      bin.addEventListener('dragleave',()=>drop.classList.remove('drag-over'));
      bin.addEventListener('drop',e=>{e.preventDefault(); drop.classList.remove('drag-over'); const chip=dragChip||document.querySelector('.sort-chip.dragging'); if(chip) place(chip, drop.dataset.accept)});
    });
    return;
  }

  if(v==='precision-rewrite'){
    const pop=$('#choice-pop'), out=$('#rewrite-out'); let fixed=0;
    document.querySelectorAll('.blank-chip').forEach(blank=>blank.addEventListener('click',()=>{
      if(blank.dataset.done) return;
      const item=VAGUE[Number(blank.dataset.v)];
      document.querySelectorAll('.blank-chip').forEach(b=>b.classList.toggle('picked',b===blank));
      pop.hidden=false;
      delete pop.dataset.locked;
      pop.innerHTML=`<p>Pick the exact version of “${item.text}”:</p><div class="chip-row">${item.options.map(o=>`<button type="button" class="choice-chip">${o}</button>`).join('')}</div>`;
      bindChoices(pop,chip=>chip.textContent===item.right,()=>{
        blank.textContent=item.right; blank.dataset.done='1'; blank.classList.remove('picked'); blank.classList.add('filled'); pop.hidden=true; fixed++;
        if(fixed===3){say(out,'The team knows exactly what happened.','good');done('Much clearer! It says when, what changed, and why.')}
        else say(out,'');
      },()=>say(out,'Still vague: look for a name or a number.','bad'));
    }));
    return;
  }

  if(v==='channel-preview'){
    const neb=$('#mini-nebula'),hint=$('#light-note'),set={};let right=0;
    const paint=()=>{neb.style.background=`radial-gradient(circle at 30% 40%,${set.ir||'#333'},transparent 32%),radial-gradient(circle at 70% 55%,${set.vis||'#333'},transparent 34%),radial-gradient(circle at 50% 70%,${set.uv||'#333'},transparent 28%),#120916`};
    document.querySelectorAll('.light-row').forEach(row=>{
      const light=LIGHTS.find(l=>l.id===row.dataset.light);
      bindChoices(row,chip=>chip.dataset.color===light.right,chip=>{
        set[light.id]=COLORS[light.right]; paint(); right++;
        if(right===3){say(hint,'Long waves are red, middle waves green, short waves blue.','good');done('Color key made! Each kind of light has its own color.')}
        else say(hint,`Yes! ${light.name} gets ${light.right}.`,'good');
      },()=>say(hint,`${light.name} has the ${light.size.toLowerCase()}, so it gets ${light.right}.`,'bad'));
    });
    paint();
    return;
  }

  if(v==='tradeoff-board'){
    const hint=$('#trade-note'), cards=document.querySelectorAll('.trade-card');
    cards.forEach(card=>card.addEventListener('click',()=>{
      cards.forEach(c=>{c.classList.add('show-total');c.classList.toggle('selected',c===card)});
      if(card.dataset.ok==='yes'){say(hint,'The long way is 6 power and the short cut is 8, so the long way wins.','good');done('Smart choice! Shorter isn’t always cheaper.')}
      else{next.disabled=!lessonReview;say(hint,'The short cut costs 8 power: sand doubles the cost of every square.','bad')}
    }));
    return;
  }

  if(v==='line-match'){
    const hint=$('#line-note'); let right=0;
    document.querySelectorAll('.element-card').forEach(card=>card.addEventListener('click',()=>{
      if(card.classList.contains('right'))return;
      const el=ELEMENTS[Number(card.dataset.el)], fits=el.lines.every(nm=>STAR_LINES.includes(nm));
      card.classList.remove('wrong');
      if(fits){card.classList.add('right');right++;say(hint,`${el.name} fits: ${el.lines.length>1?'all its lines are':'its line is'} in the star.`,'good');if(right===2)done('You read the fingerprints! This star has hydrogen and sodium.')}
      else{void card.offsetWidth;card.classList.add('wrong');say(hint,`${el.name} has lines at ${el.lines.join(' and ')} nm, and the star doesn’t.`,'bad')}
    }));
    return;
  }

  if(v==='phase-meet'){
    // The station moves 47° along its orbit while the probe flies out to meet it
    const travel=47, cx=100, cy=100, r=72, range=$('#phase-range'), launch=$('#launch'), hint=$('#phase-note');
    const at=deg=>{const a=deg*Math.PI/180;return {x:cx+r*Math.cos(a),y:cy-r*Math.sin(a)}};
    const placeStation=deg=>{const p=at(deg),s=$('#station-mark');s.setAttribute('x',(p.x-7).toFixed(1));s.setAttribute('y',(p.y-7).toFixed(1))};
    const placeProbe=(deg,t)=>{const p=at(deg),m=$('#probe-mark');m.setAttribute('cx',(cx+(p.x-cx)*t).toFixed(1));m.setAttribute('cy',(cy+(p.y-cy)*t).toFixed(1))};
    const aim=()=>{const deg=Number(range.value),p=at(deg);$('#phase-out').value=`${deg}°`;$('#aim-ray').setAttribute('x2',p.x.toFixed(1));$('#aim-ray').setAttribute('y2',p.y.toFixed(1));placeStation(0);placeProbe(deg,0)};
    let misses=0;
    range.oninput=aim;
    launch.onclick=()=>{
      const deg=Number(range.value);launch.disabled=true;range.disabled=true;
      const finish=()=>{
        launch.disabled=false;range.disabled=false;
        const off=deg-travel;
        if(Math.abs(off)<=4){say(hint,`Docked! You aimed ${deg}° ahead, right where the station arrived.`,'good');done('You found the phase angle: aim where it will be.')}
        else{misses++;say(hint,`${off<0?'Too far behind: the station had already gone past.':'Too far ahead: the station hadn’t got there yet.'}${misses>=2?` Watch where the station stops, then aim there.`:''}`,'bad')}
      };
      if(reduceMotion.matches){placeStation(travel);placeProbe(deg,1);finish();return}
      const start=performance.now();
      const step=now=>{const t=Math.min(1,(now-start)/1600);placeStation(travel*t);placeProbe(deg,t);if(t<1)requestAnimationFrame(step);else finish()};
      requestAnimationFrame(step);
    };
    aim();
    return;
  }

  if(v==='claim-check'||v==='audience-match'){
    // One row per claim or message; each needs the right answer before Continue unlocks
    const list=v==='claim-check'?CLAIMS:READERS,hint=$(v==='claim-check'?'#claim-note':'#reader-note');let right=0;
    document.querySelectorAll('.claim-row').forEach(row=>{
      const item=list[Number(row.dataset.i)];
      const isRight=chip=>v==='claim-check'?(chip.dataset.ok==='yes')===item.ok:chip.dataset.to===item.to;
      bindChoices(row,isRight,()=>{say(hint,item.why,'good');if(++right===list.length)done(v==='claim-check'?'You checked every claim against the log.':'Each message fits its reader.')},()=>say(hint,v==='claim-check'?item.why:`Not quite: ${item.why.charAt(0).toLowerCase()+item.why.slice(1)}`,'bad'));
    });
    return;
  }

  if(v==='team-match'){
    const hint=$('#team-note');let right=0;
    document.querySelectorAll('.crew-row').forEach(row=>{
      const p=TEAM[Number(row.dataset.i)];
      bindChoices(row,chip=>chip.dataset.job===p.job,()=>{say(hint,`${p.name} ${p.skill}, so that job fits.`,'good');if(++right===TEAM.length)done('Everyone has a job that fits their skill.')},()=>say(hint,`${p.name} ${p.skill}. Which job uses that?`,'bad'));
    });
    return;
  }

  if(v==='next-step'){
    const hint=$('#ending-note');
    bindChoices($('#ending-row'),chip=>ENDINGS[chip.dataset.i].right,()=>{say(hint,'It says what to do and when.','good');done('The report ends with a clear next step.')},chip=>say(hint,ENDINGS[chip.dataset.i].why,'bad'));
    return;
  }

  if(v==='key-read'){
    const hint=$('#key-note'),row=$('#key-row');let q=0;
    const ask=()=>{
      $('#key-question').textContent=KEY_QUESTIONS[q].q;
      delete row.dataset.locked;
      row.innerHTML=['red','green','blue'].map(c=>`<button type="button" class="choice-chip color-chip" data-color="${c}"><span style="background:${COLORS[c]}"></span>The ${c} cloud</button>`).join('');
      bindChoices(row,chip=>chip.dataset.color===KEY_QUESTIONS[q].right,()=>{
        if(++q<KEY_QUESTIONS.length){say(hint,'Yes, the key says so.','good');ask()}
        else{say(hint,'You read the key like a scientist.','good');done('You can read a color key.')}
      },chip=>say(hint,`The key says ${chip.dataset.color} shows ${{red:'infrared',green:'visible',blue:'ultraviolet'}[chip.dataset.color]} light.`,'bad'));
    };
    ask();
    return;
  }

  if(v==='contrast-tune'){
    const range=$('#tune-range'),canvas=$('#tune-canvas'),meter=$('#tune-meter');
    canvas.style.setProperty('--c1',COLORS.red);canvas.style.setProperty('--c2',COLORS.green);canvas.style.setProperty('--c3',COLORS.blue);
    const paint=()=>{
      const val=Number(range.value);$('#tune-out').value=val;
      canvas.style.filter=`brightness(${(.15+val*.022).toFixed(2)}) contrast(${(1+val*.012).toFixed(2)})`;
      const ok=val>=40&&val<=62;
      meter.textContent=ok?'Just right: the pillar stands out':val<40?'Too dark: the dust is hidden':'Too bright: the dust is washed out';
      meter.dataset.kind=ok?'good':'bad';
      if(ok)done('You found the brightness that shows the dust.');
    };
    range.oninput=paint;paint();
    return;
  }

  if(v==='path-plan'){
    const grid=$('#mini-grid'),hint=$('#plan-note');let pos,used,finished;
    const cost=n=>PLAN_GRID[n].includes('sand')?2:1;
    const near=p=>[p-3,p+3,p%3?p-1:-1,p%3<2?p+1:-1].filter(n=>n>=0&&n<9);
    const paint=()=>grid.querySelectorAll('.terrain-cell').forEach(c=>{const n=Number(c.dataset.cell),r=!finished&&near(pos).includes(n);c.classList.toggle('rover',n===pos);c.classList.toggle('reach',r);c.innerHTML=r?`<span class="cost">${cost(n)}</span>`:'';});
    const reset=()=>{pos=PLAN_START;used=0;finished=false;grid.querySelectorAll('.terrain-cell').forEach(c=>c.classList.toggle('path',Number(c.dataset.cell)===PLAN_START));$('#plan-used').textContent='0';say(hint,'');paint()};
    grid.querySelectorAll('.terrain-cell').forEach(c=>c.addEventListener('click',()=>{
      const n=Number(c.dataset.cell);
      if(finished||!near(pos).includes(n))return;
      pos=n;used+=cost(n);c.classList.add('path');$('#plan-used').textContent=used;
      if(used>5){finished=true;say(hint,`That route needs ${used} power, more than 5. Reset and try a cheaper way.`,'bad')}
      else if(pos===PLAN_GOAL){finished=true;say(hint,`You made it with ${used} power by staying on rock.`,'good');done('You planned a route within the budget.')}
      paint();
    }));
    $('#plan-reset').onclick=reset;reset();
    return;
  }

  if(v==='reserve-pick'){
    const hint=$('#reserve-note');
    bindChoices($('#reserve-row'),chip=>RESERVE_PLANS[chip.dataset.i].right,()=>{say(hint,'Plan B keeps 3 power spare in case something goes wrong.','good');done('You kept a safety margin.')},chip=>say(hint,RESERVE_PLANS[chip.dataset.i].why,'bad'));
    return;
  }

  if(v==='nm-find'){
    const view=$('#nm-scanner'),hint=$('#nm-note');let nm=550,task=0,dragging=false;
    const setTask=()=>{$('#nm-task').textContent=task<NM_TASKS.length?`Drag the scanner to ${NM_TASKS[task].nm} nm.`:'You found both colors.'};
    const update=()=>{
      $('#nm-out').value=`${nm} nm`;$('#nm-bar').style.left=`${(nm-400)/3}%`;view.setAttribute('aria-valuenow',nm);
      const t=NM_TASKS[task];
      if(t&&Math.abs(nm-t.nm)<=8){say(hint,`${t.nm} nm is ${t.color} light.`,'good');task++;setTask();if(task===NM_TASKS.length)done('You can find colors by their wavelength.')}
    };
    const fromPointer=e=>{const r=view.getBoundingClientRect();nm=Math.round(400+Math.max(0,Math.min(1,(e.clientX-r.left)/r.width))*300);update()};
    view.addEventListener('pointerdown',e=>{dragging=true;view.setPointerCapture(e.pointerId);fromPointer(e)});view.addEventListener('pointermove',e=>{if(dragging)fromPointer(e)});view.addEventListener('pointerup',()=>dragging=false);view.addEventListener('pointercancel',()=>dragging=false);
    view.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();nm=Math.max(400,Math.min(700,nm+(e.key==='ArrowRight'?2:-2)));update()}});
    setTask();update();
    return;
  }

  if(v==='line-mix'){
    const hint=$('#mix-note'),on=new Set();
    document.querySelectorAll('#mix-row .choice-chip').forEach(chip=>chip.addEventListener('click',()=>{
      const i=Number(chip.dataset.i);on.has(i)?on.delete(i):on.add(i);
      chip.classList.toggle('selected',on.has(i));chip.setAttribute('aria-pressed',on.has(i));
      const lines=[...on].flatMap(k=>MIX_ELEMENTS[k].lines).sort((a,b)=>a-b);
      $('#mix-strip').innerHTML=strip(lines);
      const extra=lines.filter(nm=>!MIX_STAR.includes(nm)),missing=MIX_STAR.filter(nm=>!lines.includes(nm));
      if(!extra.length&&!missing.length){say(hint,'Sodium and oxygen together make the star’s pattern.','good');done('You mixed elements to match a star.')}
      else if(extra.length)say(hint,`Your mix has a line at ${extra[0]} nm, and the star doesn’t.`,'bad');
      else say(hint,`Still missing ${missing.length===1?'a line':'lines'} at ${missing.join(' and ')} nm.`,'');
    }));
    return;
  }

  if(v==='speed-size'){
    const range=$('#size-range'),meter=$('#size-meter');
    const paint=()=>{
      const val=Number(range.value),r=30+val*.6;$('#size-out').value=val;$('#size-orbit').setAttribute('r',r.toFixed(1));
      const ok=Math.abs(r-62)<=3;
      meter.textContent=ok?'Just right: your orbit fits':r<62?'Too small: speed up':'Too big: slow down';
      meter.dataset.kind=ok?'good':'bad';$('#size-orbit').classList.toggle('matched',ok);
      if(ok)done('Speed sets the size of an orbit.');
    };
    range.oninput=paint;paint();
    return;
  }

  if(v==='angle-turn'){
    const hint=$('#turn-note');let angle=0;
    const paint=()=>{
      const a=angle*Math.PI/180,x=100+72*Math.cos(a),y=100-72*Math.sin(a);
      $('#antenna').setAttribute('x2',x.toFixed(1));$('#antenna').setAttribute('y2',y.toFixed(1));
      $('#turn-arc').setAttribute('d',angle>0?`M100 100 L130 100 A30 30 0 ${angle>180?1:0} 0 ${(100+30*Math.cos(a)).toFixed(1)} ${(100-30*Math.sin(a)).toFixed(1)} Z`:'');
      $('#turn-out').textContent=`${angle}°`;
      if(angle===90){say(hint,'A quarter turn is 90°, and the antenna points right at the station.','good');done('You turned exactly a quarter turn.')}
      else if(angle>90)say(hint,'Too far: turn back a little.','bad');
      else say(hint,'');
    };
    $('#turn-left').onclick=()=>{angle=Math.min(180,angle+15);paint()};
    $('#turn-right').onclick=()=>{angle=Math.max(0,angle-15);paint()};
    paint();
    return;
  }

  done('');
}

function renderActivity(w){
  $('#lesson-next').style.display='none';
  $('#lesson-stage').innerHTML=`<article class="activity-page"><div class="activity-heading"><div><span class="mission-badge">Field mission</span><h3>${activityTitle(w.id)}</h3></div></div><div class="activity-workspace" id="activity-workspace"></div></article>`;
  activityRenderers[w.id]();
}
function activityTitle(id){return{history:'Fix the Moon camp',reading:'Send a rover report',art:'Color a space cloud',engineering:'Drive to the relay ridge',science:'Scan a star’s light',math:'Put the probe in orbit'}[id]}
function feedback(message,error=false){const el=$('.activity-feedback');el.textContent=message;el.classList.toggle('error',error)}
function passActivity(){const w=WORLDS[lessonIndex];recordWorld(w);lessonStep=stepCount(w)-1;renderLesson()}
function recordWorld(w){
  if(!state.completed.includes(w.id)){state.completed.push(w.id);state.dates[w.id]=new Date().toISOString()}
  delete state.resume[w.id];
  state.selected=w.id;
  saveState();
  renderHome();
}

const activityRenderers={
  history(){
    const clues=[
      {title:'Radio recording · 19:42',text:'“Power from the solar cable dropped after the gust, and box B feels warm.”',kind:'primary',why:'It was recorded during the storm.'},
      {title:'Helmet-camera photo · 19:44',text:'The cable cover is lifted and dust is stuck on the plug.',kind:'primary',why:'It was taken during the storm.'},
      {title:'News story, written later',text:'“Experts say Moon weather is a mystery and crews always panic.”',kind:'secondary',why:'It was written afterward by someone who wasn’t there.'}
    ];
    const causes=[
      {t:'Moon weather is a mystery',why:'That idea comes from the later news story, not the evidence.'},
      {t:'Dust got into the solar cable plug',right:true},
      {t:'The rover crashed into the camp',why:'None of the clues mention the rover.'}
    ];
    const crew=[{name:'Jordan',skill:'fixes wiring',job:'repair'},{name:'Sam',skill:'finds safe paths',job:'route'},{name:'Ari',skill:'explains things clearly',job:'report'}];
    const jobs={route:'Map a shelter route',repair:'Repair the cable',report:'Report to Earth'};
    $('#activity-workspace').innerHTML=`<div class="history-mission">
      <section class="brief-card" data-part="1"><span class="visual-label">Check the clues</span><p>A dust storm cut power at the Moon camp. Which clues were made during the storm?</p><div class="source-cards">${clues.map((c,i)=>`<article class="source-card" data-clue="${i}"><strong>${c.title}</strong><p>${c.text}</p><div class="chip-row"><button type="button" class="choice-chip" data-kind="primary">Primary</button><button type="button" class="choice-chip" data-kind="secondary">Secondary</button></div><small class="clue-note"></small></article>`).join('')}</div></section>
      <section class="brief-card" data-part="2" hidden><span class="visual-label">Find the cause</span><p>Using only the primary clues, what broke?</p><div class="chip-row" id="cause-row">${causes.map((c,i)=>`<button type="button" class="choice-chip" data-cause="${i}">${c.t}</button>`).join('')}</div><p class="reveal-panel" id="cause-note"></p></section>
      <section class="brief-card" data-part="3" hidden><span class="visual-label">Give each person a job</span><p>Match each job to the right skill.</p><div class="crew-rows">${crew.map((c,i)=>`<div class="crew-row" data-crew="${i}"><div><strong>${c.name}</strong><small>${c.skill}</small></div><div class="chip-row">${Object.entries(jobs).map(([k,t])=>`<button type="button" class="choice-chip" data-job="${k}">${t}</button>`).join('')}</div></div>`).join('')}</div><p class="reveal-panel" id="crew-note"></p><button type="button" class="pass-button" id="check-history" disabled>Send the plan</button><p class="activity-feedback" role="status"></p></section></div>`;
    let tagged=0,staffed=0;
    document.querySelectorAll('.source-card').forEach(card=>{
      const clue=clues[Number(card.dataset.clue)],note=card.querySelector('.clue-note');
      bindChoices(card,chip=>chip.dataset.kind===clue.kind,()=>{note.textContent=`Right: ${clue.why}`;note.dataset.kind='good';if(++tagged===3)openPart(2)},()=>{note.textContent=clue.kind==='primary'?'Check the time: this was made during the storm.':'Check who made it, and when.';note.dataset.kind='bad'});
    });
    bindChoices($('#cause-row'),chip=>causes[Number(chip.dataset.cause)].right,()=>{say($('#cause-note'),'Yes! The recording and the photo both point to the dusty plug.','good');openPart(3)},chip=>say($('#cause-note'),causes[Number(chip.dataset.cause)].why,'bad'));
    document.querySelectorAll('.crew-row').forEach(row=>{
      const person=crew[Number(row.dataset.crew)];
      bindChoices(row,chip=>chip.dataset.job===person.job,()=>{if(++staffed===3){say($('#crew-note'),'Everyone has the job that fits their skill.','good');$('#check-history').disabled=false}else say($('#crew-note'),`${person.name} is on it.`,'good')},()=>say($('#crew-note'),`${person.name} ${person.skill}, so pick the job that fits.`,'bad'));
    });
    $('#check-history').onclick=()=>{feedback('Plan accepted! You used the evidence and gave everyone the right job.');setTimeout(passActivity,900)};
  },
  reading(){
    const audiences=[
      {t:'Museum visitors',why:'Visitors are curious, but they can’t fix the battery.'},
      {t:'Power engineers',right:true},
      {t:'Food team',why:'The food team doesn’t work on power.'}
    ];
    const slots=[
      {label:'When',options:[{t:'Recently,',why:'“Recently” doesn’t say when. Use the sol.'},{t:'On Sol 18,',right:true},{t:'Once upon a time,',why:'That’s how stories start, not reports.'}]},
      {label:'What changed',options:[{t:'a dust storm dropped the battery from 62% to 41%.',right:true},{t:'the rover felt tired.',why:'Rovers don’t get tired. What do the numbers say?'},{t:'something happened with the power.',why:'Too vague: say how much the battery dropped.'}]},
      {label:'What to do next',options:[{t:'Please fix it.',why:'Fix what, and how? Give a clear next step.'},{t:'Good luck!',why:'Friendly, but it doesn’t tell the team what to do.'},{t:'We should stop driving until the battery is back above 50%.',right:true}]}
    ];
    $('#activity-workspace').innerHTML=`<div class="comm-console"><div class="telemetry"><span class="visual-label">ROVER DATA · SOL 18</span><dl><dt>Event</dt><dd>Dust storm</dd><dt>Battery</dt><dd>62% → 41%</dd><dt>Location</dt><dd>Ridge route B</dd><dt>Mobility</dt><dd>Normal</dd></dl><div class="message-preview" id="message-preview"></div></div><div class="message-steps">
      <section data-part="1"><span class="visual-label">Who is it for?</span><div class="chip-row" id="audience-row">${audiences.map((a,i)=>`<button type="button" class="choice-chip" data-i="${i}">${a.t}</button>`).join('')}</div></section>
      ${slots.map((s,i)=>`<section data-part="${i+2}" hidden><span class="visual-label">${s.label}</span><div class="chip-row stacked" data-slot="${i}">${s.options.map((o,j)=>`<button type="button" class="choice-chip" data-j="${j}">${o.t}</button>`).join('')}</div></section>`).join('')}
      <p class="reveal-panel" id="message-note"></p><button type="button" class="pass-button" id="send-log" disabled>Send message</button><p class="activity-feedback" role="status"></p></div></div>`;
    const picked={to:null,parts:[]},note=$('#message-note');
    const preview=()=>{$('#message-preview').innerHTML=`<span class="visual-label">Your message</span><p><strong>To:</strong> ${picked.to||'…'}</p><p>${slots.map((s,i)=>picked.parts[i]||`<span class="blank">${s.label.toLowerCase()}</span>`).join(' ')}</p>`};
    bindChoices($('#audience-row'),chip=>audiences[chip.dataset.i].right,chip=>{picked.to=chip.textContent;preview();say(note,'Engineers can fix the power, so they need the facts.','good');openPart(2)},chip=>say(note,audiences[chip.dataset.i].why,'bad'));
    document.querySelectorAll('[data-slot]').forEach(row=>{
      const i=Number(row.dataset.slot);
      bindChoices(row,chip=>slots[i].options[chip.dataset.j].right,chip=>{picked.parts[i]=chip.textContent;preview();if(i<slots.length-1){say(note,'');openPart(i+3)}else{say(note,'Your message says when, what changed, and what to do.','good');$('#send-log').disabled=false}},chip=>say(note,slots[i].options[chip.dataset.j].why,'bad'));
    });
    preview();
    $('#send-log').onclick=()=>{feedback('Message sent! The engineers know just what happened and what to do.');setTimeout(passActivity,900)};
  },
  art(){
    const looks=[
      {t:'Too dark',contrast:.8,bright:.45,why:'Too dark: the dust disappears into the black.'},
      {t:'Just right',contrast:1.4,bright:.95,right:true},
      {t:'Too bright',contrast:2.6,bright:1.7,why:'Too bright: everything turns white and the shapes vanish.'}
    ];
    const cloud=(id='')=>`<div class="nebula-canvas" ${id}><div class="nebula-clouds"></div><div class="nebula-stars"></div></div>`;
    $('#activity-workspace').innerHTML=`<div class="color-lab"><div>${cloud('id="nebula-canvas" aria-label="Your false-color space cloud"')}<div class="mapping-key"><span>Red: infrared dust</span><span>Green: visible gas</span><span>Blue: ultraviolet stars</span></div></div><div class="channel-controls">
      <section data-part="1"><span class="visual-label">Color each kind of light</span>${lightRows()}</section>
      <section data-part="2" hidden><span class="visual-label">Show the dust</span><p>Which brightness lets you see the dust best?</p><div class="chip-row look-row" id="look-row">${looks.map((l,i)=>`<button type="button" class="choice-chip look-chip" data-i="${i}">${cloud()}<span>${l.t}</span></button>`).join('')}</div></section>
      <p class="reveal-panel" id="art-note"></p><button type="button" class="pass-button" id="save-image" disabled>Save my picture</button><p class="activity-feedback" role="status"></p></div></div>`;
    let seed=99;const rnd=()=>((seed=seed*48271%2147483647)/2147483647);
    const starField=Array.from({length:36},()=>`<i style="left:${(5+rnd()*90).toFixed(1)}%;top:${(8+rnd()*84).toFixed(1)}%;width:${(1.5+rnd()*3).toFixed(0)}px;height:${(1.5+rnd()*3).toFixed(0)}px;opacity:${(.4+rnd()*.6).toFixed(2)}"></i>`).join('');
    document.querySelectorAll('.nebula-stars').forEach(s=>s.innerHTML=starField);
    const canvases=document.querySelectorAll('.nebula-canvas'),note=$('#art-note');let colored=0;
    const tint=(key,color)=>canvases.forEach(c=>c.style.setProperty(key,color));
    const light=(c,l)=>{c.style.setProperty('--cloud-contrast',l.contrast);c.style.setProperty('--cloud-bright',l.bright)};
    light($('#nebula-canvas'),{contrast:1,bright:.7});
    document.querySelectorAll('.look-chip').forEach(chip=>light(chip.querySelector('.nebula-canvas'),looks[chip.dataset.i]));
    const slot={ir:'--c1',vis:'--c2',uv:'--c3'};
    document.querySelectorAll('.light-row').forEach(row=>{
      const l=LIGHTS.find(x=>x.id===row.dataset.light);
      bindChoices(row,chip=>chip.dataset.color===l.right,()=>{tint(slot[l.id],COLORS[l.right]);if(++colored===3){say(note,'');openPart(2)}else say(note,`Yes! ${l.name} is ${l.right}.`,'good')},()=>say(note,`${l.name} has the ${l.size.toLowerCase()}, so it gets ${l.right}.`,'bad'));
    });
    bindChoices($('#look-row'),chip=>looks[chip.dataset.i].right,chip=>{light($('#nebula-canvas'),looks[chip.dataset.i]);say(note,'The dust clouds stand out clearly.','good');$('#save-image').disabled=false},chip=>say(note,looks[chip.dataset.i].why,'bad'));
    $('#save-image').onclick=()=>{feedback('Picture saved! Your colors follow the rule and the dust is easy to see.');setTimeout(passActivity,900)};
  },
  engineering(){
    const levels=[
      {name:'Survey flats',energy:16,start:30,goal:5,hazards:[13,20,27],sands:[24,18,12,6]},
      {name:'Cliff detour',energy:15,start:30,goal:5,hazards:[24,18,12,6,7,8,9],sands:[31,32,33,34]},
      {name:'Relay maze',energy:16,start:30,goal:5,hazards:[31,32,33,34,35,18,12,6,26,27,28,29,13,7,8,21,22,23,16,17,11],sands:[24,25,19,14,9]}
    ];
    let levelIndex=0,cfg,pos,energy,finished,history;
    $('#activity-workspace').innerHTML=`<div class="rover-lab"><div><div class="rover-levels" id="rover-levels"></div><div class="rover-grid" id="rover-grid" tabindex="0" aria-label="Rover map: use arrow keys or tap a highlighted square"></div></div><div class="rover-panel"><span class="visual-label">ROVER STATUS</span><h4 id="rover-level-title"></h4><div class="energy-bar"><span id="energy-fill"></span></div><strong id="energy-readout"></strong><div class="rover-legend"><span class="rock-key">Rock · 1</span><span class="sand-key">Sand · 2</span><span class="hazard-key">Blocked</span></div><p>Tap a highlighted square to drive there. Its number is the power it costs.</p><div class="rover-actions"><button type="button" class="back-button" id="undo-move">Undo</button><button type="button" class="back-button" id="restart-level">Restart</button></div><button type="button" class="pass-button" id="confirm-route" disabled></button><p class="activity-feedback" role="status"></p></div></div>`;
    const grid=$('#rover-grid'),fill=$('#energy-fill'),read=$('#energy-readout'),confirm=$('#confirm-route'),dots=$('#rover-levels');
    const cost=n=>cfg.sands.includes(n)?2:1;
    const neighbors=p=>[p-6,p+6,p%6?p-1:-1,p%6<5?p+1:-1].filter(n=>n>=0&&n<36&&!cfg.hazards.includes(n));
    const paint=()=>{
      const reach=finished?[]:neighbors(pos);
      grid.querySelectorAll('.terrain-cell').forEach(cell=>{const n=Number(cell.dataset.cell),r=reach.includes(n);cell.classList.toggle('rover',n===pos);cell.classList.toggle('reach',r);cell.innerHTML=r?`<span class="cost">${cost(n)}</span>`:''});
      fill.style.width=`${energy/cfg.energy*100}%`;read.textContent=`${energy} energy left`;
      $('#undo-move').disabled=history.length===0;
    };
    const renderLevel=()=>{
      cfg=levels[levelIndex];pos=cfg.start;energy=cfg.energy;finished=false;history=[];
      dots.innerHTML=levels.map((l,i)=>`<span class="rover-level-dot ${i<levelIndex?'passed':i===levelIndex?'active':''}">${i+1}</span>`).join('');
      $('#rover-level-title').textContent=`Level ${levelIndex+1} · ${cfg.name}`;
      grid.innerHTML=Array.from({length:36},(_,i)=>`<button type="button" class="terrain-cell ${cfg.hazards.includes(i)?'hazard':cfg.sands.includes(i)?'sand':'rock'} ${i===cfg.goal?'goal':''}" data-cell="${i}" ${cfg.hazards.includes(i)?'disabled':''} aria-label="${cfg.hazards.includes(i)?'Blocked':cfg.sands.includes(i)?'Sand':'Rock'}${i===cfg.goal?', relay tower goal':''}"></button>`).join('');
      grid.querySelectorAll('.terrain-cell').forEach(c=>{if(!c.disabled)c.onclick=()=>move(Number(c.dataset.cell))});
      grid.querySelector(`[data-cell="${pos}"]`).classList.add('path');
      confirm.disabled=true;confirm.textContent=levelIndex===levels.length-1?'Finish the drive':'Next level';feedback('');paint();
    };
    const move=n=>{
      if(finished)return;
      if(!neighbors(pos).includes(n)){feedback('Pick a highlighted square next to the rover.',true);return}
      if(energy-cost(n)<0){feedback('Not enough power for that square. Tap Undo or Restart to try another path.',true);return}
      history.push({pos,energy});pos=n;energy-=cost(n);
      grid.querySelector(`[data-cell="${n}"]`).classList.add('path');feedback('');
      if(pos===cfg.goal){finished=true;confirm.disabled=false;feedback(`Level ${levelIndex+1} done with ${energy} energy left!`)}
      else if(!neighbors(pos).some(m=>cost(m)<=energy))feedback('Out of power! Tap Undo or Restart to try a cheaper path.',true);
      paint();
    };
    $('#undo-move').onclick=()=>{const last=history.pop();if(!last)return;grid.querySelector(`[data-cell="${pos}"]`).classList.remove('path');({pos,energy}=last);finished=false;confirm.disabled=true;feedback('');paint()};
    $('#restart-level').onclick=renderLevel;
    grid.addEventListener('keydown',e=>{const d={ArrowUp:-6,ArrowDown:6,ArrowLeft:-1,ArrowRight:1}[e.key];if(d===undefined)return;e.preventDefault();const n=pos+d;if(neighbors(pos).includes(n))move(n)});
    confirm.onclick=()=>{if(levelIndex<levels.length-1){levelIndex++;renderLevel();return}feedback('All three levels done. Great driving!');setTimeout(passActivity,900)};
    renderLevel();
  },
  science(){
    // A new star: hydrogen plus helium, with sodium and oxygen as look-alikes
    const lines=[447,486,502,656],found=new Set();
    const elements=[{name:'Hydrogen',lines:[486,656]},{name:'Sodium',lines:[589]},{name:'Helium',lines:[447,502]},{name:'Oxygen',lines:[558,630]}];
    $('#activity-workspace').innerHTML=`<div class="spectrum-lab"><div><div class="spectrum-view spectrum-scanner" id="spectrum-scanner" role="slider" aria-label="Spectrum wavelength" aria-valuemin="400" aria-valuemax="700" aria-valuenow="420" tabindex="0">${lines.map(l=>`<i class="absorption-line" data-wavelength="${l}" style="left:${(l-400)/3}%"></i>`).join('')}<span class="scanner" id="scanner"></span></div>${SPEC_SCALE}<div class="spectrum-readout"><span>Scanner at <output id="wavelength-output">420 nm</output></span><small id="scan-hint">Drag the white bar across the colors.</small></div></div>
      <div class="scan-findings" data-part="1"><span class="visual-label">Find 4 dark lines</span>${lines.map(l=>`<div class="finding" data-line="${l}">Not found yet</div>`).join('')}<p class="reveal-panel" id="scan-note"></p></div><section data-part="2" hidden class="identify"><span class="visual-label">Name the elements</span><p>Tap each element whose lines all match the star.</p><div class="spec-row"><span class="spec-name">Star</span>${strip(lines,'star-strip')}</div>${elements.map((e,i)=>`<button type="button" class="choice-chip element-card" data-el="${i}"><span class="spec-name">${e.name}</span>${strip(e.lines)}</button>`).join('')}<button type="button" class="pass-button" id="identify-star" disabled>Save my scan</button><p class="activity-feedback" role="status"></p></section></div>`;
    const view=$('#spectrum-scanner'),scanner=$('#scanner'),note=$('#scan-note');let wavelength=420,dragging=false,named=0;
    const update=()=>{
      const pct=(wavelength-400)/3;$('#wavelength-output').value=`${wavelength} nm`;scanner.style.left=`${pct}%`;view.setAttribute('aria-valuenow',wavelength);
      lines.forEach((l,i)=>{if(!found.has(l)&&Math.abs(wavelength-l)<=6){found.add(l);view.querySelector(`[data-wavelength="${l}"]`).classList.add('revealed');const el=$(`[data-line="${l}"]`);el.classList.add('found');el.textContent=`Dark line at ${l} nm`;if(found.size===lines.length){say(note,'');openPart(2)}else say(note,`${found.size} of 4 found.`,'good')}});
    };
    const setFromPointer=e=>{const rect=view.getBoundingClientRect();wavelength=Math.round(400+Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width))*300);update()};
    view.addEventListener('pointerdown',e=>{dragging=true;view.setPointerCapture(e.pointerId);setFromPointer(e)});view.addEventListener('pointermove',e=>{if(dragging)setFromPointer(e)});view.addEventListener('pointerup',()=>dragging=false);view.addEventListener('pointercancel',()=>dragging=false);
    view.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();wavelength=Math.max(400,Math.min(700,wavelength+(e.key==='ArrowRight'?2:-2)));update()}});
    document.querySelectorAll('.identify .element-card').forEach(card=>card.addEventListener('click',()=>{
      if(card.classList.contains('right'))return;
      const el=elements[Number(card.dataset.el)],fits=el.lines.every(nm=>lines.includes(nm));card.classList.remove('wrong');
      if(fits){card.classList.add('right');if(++named===2){say(note,'Hydrogen and helium: every dark line is explained.','good');$('#identify-star').disabled=false}else say(note,`${el.name} matches.`,'good')}
      else{void card.offsetWidth;card.classList.add('wrong');say(note,`${el.name} would leave ${el.lines.length>1?'lines':'a line'} at ${el.lines.join(' and ')} nm, and the star has none there.`,'bad')}
    }));
    update();
    $('#identify-star').onclick=()=>{feedback('Scan saved! This star has hydrogen and helium.');setTimeout(passActivity,900)};
  },
  math(){
    $('#activity-workspace').innerHTML=`<div class="orbit-lab"><div class="orbit-sim"><span class="target-orbit"></span><span class="probe-orbit" id="probe-orbit"></span></div><div class="orbit-controls"><span class="visual-label">ORBIT MODEL</span><p>Line your solid path up with the dashed target orbit.</p><label>Speed: changes the size <output id="velocity-output">88%</output><input id="velocity" type="range" min="70" max="130" value="88"></label><span class="meter" id="size-meter"></span><label>Tilt: turns the path <output id="phase-output">35°</output><input id="phase" type="range" min="20" max="80" value="35"></label><span class="meter" id="tilt-meter"></span><button type="button" class="pass-button" id="test-orbit" disabled>Lock in orbit</button><p class="activity-feedback" role="status"></p></div></div>`;
    const velocity=$('#velocity'),tilt=$('#phase'),orbit=$('#probe-orbit');
    const meter=(el,ok,text)=>{el.textContent=text;el.dataset.kind=ok?'good':'bad'};
    const update=()=>{
      const v=Number(velocity.value),p=Number(tilt.value);
      $('#velocity-output').value=`${v}%`;$('#phase-output').value=`${p}°`;
      orbit.style.setProperty('--orbit-w',`${42+(v-70)*.686}%`);orbit.style.setProperty('--orbit-h',`${19+(v-70)*.6}%`);orbit.style.transform=`translate(-50%,-50%) rotate(${(p-47)*.7-12}deg)`;
      const sizeOk=Math.abs(v-105)<=4,tiltOk=Math.abs(p-47)<=5;
      meter($('#size-meter'),sizeOk,sizeOk?'Size matches':v<105?'Too small: speed up':'Too big: slow down');
      meter($('#tilt-meter'),tiltOk,tiltOk?'Tilt matches':p<47?'Turn it more':'Turned too far');
      orbit.classList.toggle('matched',sizeOk&&tiltOk);
      $('#test-orbit').disabled=!(sizeOk&&tiltOk);
    };
    velocity.addEventListener('input',update);tilt.addEventListener('input',update);update();
    $('#test-orbit').onclick=()=>{feedback('Perfect orbit! Your path matches the target.');setTimeout(passActivity,900)};
  }
};

function renderCompletion(w){
  if(lessonReview){
    $('#lesson-stage').innerHTML=`<div class="lesson-complete" style="${planetStyle(w)}"><div class="complete-world">${planetMarkup(w)}</div><span class="mission-badge">Review</span><h3>${w.name}</h3><p>${w.complete}</p><button class="continue-button" id="travel-next">Close review</button></div>`;
    $('#travel-next').onclick=()=>lessonDialog.close();
    return;
  }
  const done=state.completed.length,next=suggestNext(lessonIndex);
  const tally=WORLDS.map((x,i)=>`<span class="tally-dot ${isDone(i)?'lit':''}" style="--dot:${x.color}" title="${x.name}"></span>`).join('');
  $('#lesson-stage').innerHTML=`<div class="lesson-complete" style="${planetStyle(w)}"><div class="complete-world">${planetMarkup(w)}</div><span class="mission-badge">Orbit passed</span><h3>${w.name} recorded.</h3><p>${w.complete}</p><div class="world-tally" aria-label="${done} of 6 worlds recorded"><div class="tally-dots" aria-hidden="true">${tally}</div><strong>${done} of 6 worlds recorded</strong></div>${next<0?'<button class="continue-button" id="travel-next">See the completed journey</button>':`<button class="continue-button" id="travel-next">Next: ${WORLDS[next].name}</button><button class="map-button" id="back-to-map">Back to the system map</button>`}</div>`;
  $('#travel-next').onclick=()=>{
    if(next<0){lessonDialog.close();return}
    lessonDialog.close();
    travelTo(next);
  };
  $('#back-to-map')?.addEventListener('click',()=>lessonDialog.close());
}

function travelTo(index){
  if(index===activeIndex)return;
  state.selected=WORLDS[index].id;
  saveState();
  renderHome();
}

function openLog(){
  $('#log-entries').innerHTML=state.completed.length?state.completed.map(id=>{const w=WORLDS.find(x=>x.id===id);return `<article class="log-entry" style="--entry-color:${w.color}"><div class="stamp" aria-hidden="true">${planetMarkup(w)}</div><div><h3>${w.name} <span class="log-subject">${w.subject}</span></h3><p>${w.complete}</p></div><time>${new Intl.DateTimeFormat(undefined,{month:'short',day:'numeric'}).format(new Date(state.dates[id]))}</time></article>`}).join(''):'<p class="empty-log">Finish any world and its record will appear here.</p>';
  $('#log-dialog').showModal();
}
function openCertificate(){
  if(state.completed.length<6) return;
  $('#certificate-date').textContent=new Intl.DateTimeFormat(undefined,{year:'numeric',month:'long',day:'numeric'}).format(new Date());
  $('#certificate-dialog').showModal();
}

$('#lesson-next').onclick=()=>{if(lessonStep<stepCount(WORLDS[lessonIndex])-1){lessonStep++;renderLesson()}};
$('#lesson-back').onclick=()=>{if(lessonStep>0){lessonStep--;renderLesson()}};
$('#close-lesson').onclick=()=>lessonDialog.close();
// Refresh the map after any close so newly recorded worlds light up
lessonDialog.addEventListener('close',renderHome);
function resetJourney(){
  if(!confirm('Reset the journey? Progress, the journey log, and saved lesson place will be cleared.')) return;
  state=freshState();
  saveState();
  activeIndex=selectedIndex();
  lessonIndex=0;
  lessonStep=0;
  lessonReview=false;
  lessonDialog.close();
  $('#log-dialog').close();
  $('#certificate-dialog').close();
  renderHome();
}
$('#reset-button').onclick=resetJourney;
$('#log-button').onclick=openLog;
$('#close-log').onclick=()=>$('#log-dialog').close();
$('#complete-certificate').onclick=openCertificate;
$('#close-certificate').onclick=()=>$('#certificate-dialog').close();
$('#explorer-name').oninput=e=>$('#printed-name').textContent=e.target.value.trim()||'Curious Explorer';
$('#print-certificate').onclick=()=>window.print();
[lessonDialog,$('#log-dialog'),$('#certificate-dialog')].forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
window.addEventListener('resize',()=>requestAnimationFrame(layoutSystem));
createStars();
renderHome();
requestAnimationFrame(tickSystem);
