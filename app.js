const WORLDS = [
  {
    id:'history', subject:'History & Teamwork', orbit:'Orbit 6 · Outer frontier', short:'HT', color:'#b79cff', deep:'#37235f', soft:'rgba(183,156,255,.14)', ring:'#dccfff', ringed:true,
    surface:'radial-gradient(circle at 68% 24%,rgba(239,216,255,.72) 0 7%,transparent 8%),radial-gradient(ellipse at 28% 72%,rgba(69,39,102,.62) 0 24%,transparent 25%),radial-gradient(ellipse at 72% 54%,rgba(210,170,244,.22) 0 19%,transparent 20%),linear-gradient(145deg,#8c6cc5 0%,#5a3f86 52%,#30214f 100%)',
    complete:'You used clues and teamwork to make a smart plan.',
    lessons:[
      {label:'Clues from the past',title:'Old records are clues',text:'Space teams study old flight logs, photos, and recordings. A primary source is something made during the event, like a crew photo.',fact:'A secondary source is made later to explain what happened.',visual:'source-sort'}
    ]
  },
  {
    id:'reading', subject:'Reading & Writing', orbit:'Orbit 5 · Signal belt', short:'RW', color:'#ffd166', deep:'#654918', soft:'rgba(255,209,102,.14)', ringed:false,
    surface:'radial-gradient(ellipse at 32% 28%,rgba(255,248,194,.5) 0 10%,transparent 11%),repeating-linear-gradient(0deg,rgba(82,46,12,.2) 0 5px,transparent 6px 19px),linear-gradient(140deg,#ffd978,#c47a2d 58%,#633519)',
    complete:'Your message gave the team clear facts and a next step.',
    lessons:[
      {label:'Be specific',title:'Exact words help',text:'“The rover had a bad day” doesn’t help anyone fix it. Good logs say when, what changed, and why, using numbers.',fact:'A sol is one day on Mars, about 40 minutes longer than an Earth day.',visual:'precision-rewrite'}
    ]
  },
  {
    id:'art', subject:'Art & Design', orbit:'Orbit 4 · Color cloud', short:'AD', color:'#ff8cb8', deep:'#6c2447', soft:'rgba(255,140,184,.14)', ringed:true, ring:'#ffcf75',
    surface:'conic-gradient(from 25deg,#ff6d8f,#ffcd67,#62dcc3,#6875ea,#c46ee8,#ff6d8f)',
    complete:'You turned invisible light into a picture people can understand.',
    lessons:[
      {label:'False color',title:'Colors for hidden light',text:'Telescopes catch light our eyes can’t see, like infrared, the warm glow of heat. Scientists give each kind a color so we can see it.',fact:'Longer waves get red, middle waves get green, and shorter waves get blue.',visual:'channel-preview'}
    ]
  },
  {
    id:'engineering', subject:'Engineering & Technology', orbit:'Orbit 3 · Rover lane', short:'ET', color:'#7ef0c4', deep:'#1c5f58', soft:'rgba(126,240,196,.13)', ringed:false,
    surface:'repeating-radial-gradient(circle at 38% 38%,transparent 0 13px,rgba(218,255,239,.2) 14px 16px),linear-gradient(140deg,#83e3bb,#2f927c 52%,#164c50)',
    complete:'Your rover reached the ridge with power to spare.',
    lessons:[
      {label:'Tradeoffs',title:'Every path has a cost',text:'Soft sand makes wheels slip and drains the battery. A longer path on firm rock can be safer than a short cut.',fact:'A tradeoff means giving up a little of one thing to get more of another.',visual:'tradeoff-board'}
    ]
  },
  {
    id:'science', subject:'Science', orbit:'Orbit 2 · Spectrum ring', short:'SC', color:'#ff9d72', deep:'#713727', soft:'rgba(255,157,114,.14)', ringed:false,
    surface:'radial-gradient(circle at 70% 25%,#ffd09b 0 7%,transparent 8%),radial-gradient(circle at 35% 68%,#663521 0 12%,transparent 13%),linear-gradient(140deg,#ee8b52,#793448)',
    complete:'You read dark lines in starlight to learn what a star is made of.',
    lessons:[
      {label:'Light fingerprints',title:'Starlight has fingerprints',text:'When starlight passes through gas, each element, like hydrogen, takes out certain colors. The dark lines left behind work like that element’s fingerprint.',fact:'Each line sits at a spot measured in nanometers (nm), a super tiny unit of length.',visual:'line-match'}
    ]
  },
  {
    id:'math', subject:'Math', orbit:'Orbit 1 · Inner path', short:'MA', color:'#68ddff', deep:'#1b5375', soft:'rgba(104,221,255,.14)', ringed:true, ring:'#9aeaff',
    surface:'repeating-linear-gradient(18deg,transparent 0 13px,rgba(255,255,255,.18) 14px 17px),linear-gradient(140deg,#3fd1e7,#2454a0)',
    complete:'You used numbers to put your probe in the right orbit.',
    lessons:[
      {label:'Timing',title:'Aim where it will be',text:'A space station keeps moving, so you must launch toward where it will be. The angle between you and it is called the phase angle.',fact:'Meeting up in space means same place, same time, and same speed.',visual:'phase-meet'}
    ]
  }
];

const KEY='space-everyone-journey-v6';
// Bump when the steps inside a world change, so stale resume points are dropped
const LESSON_LAYOUT=2;
let state=loadState();
let activeIndex=selectedIndex();
let lessonIndex=activeIndex;
let lessonStep=0;
let lessonReview=false;
let traveling=false;
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
const ICON=name=>`<span class="icon" aria-hidden="true">${name}</span>`;
function worldsLeft(){const left=WORLDS.length-state.completed.length;return `${left} world${left===1?'':'s'} to go`}
function createStars(){let seed=7331;const random=()=>((seed=Math.imul(seed,1664525)+1013904223>>>0)/4294967296);$('#star-layer').innerHTML=Array.from({length:120},(_,i)=>`<i class="star ${i%17===0?'large':''}" style="left:${(random()*100).toFixed(2)}%;top:${(random()*100).toFixed(2)}%;--speed:${(2.2+random()*4).toFixed(2)}s;--delay:${(-random()*5).toFixed(2)}s;--opacity:${(.35+random()*.6).toFixed(2)}"></i>`).join('')}
function setTheme(w){document.documentElement.style.setProperty('--theme',w.color);document.documentElement.style.setProperty('--theme-deep',w.deep);document.documentElement.style.setProperty('--theme-soft',w.soft)}
function planetStyle(w){return `--planet-surface:${w.surface};--ring:${w.ring||w.color}`}
function planetMarkup(w){return `<span class="planet-body ${w.ringed?'ringed':''}"><span class="planet-ring-back" aria-hidden="true"></span><span class="planet-sphere"></span><span class="planet-ring-front" aria-hidden="true"></span></span>`}

function renderHome(){
  const done=state.completed.length,complete=done===WORLDS.length;
  $('#progress-count').textContent=`${done} / 6`;
  $('#progress-fill').style.width=`${done/6*100}%`;
  $('#log-count').textContent=done;
  $('#active-journey').hidden=complete;
  $('#active-journey').inert=complete;
  $('#complete-journey').hidden=!complete;
  document.body.classList.toggle('is-complete',complete);
  if(complete){renderCompleteHome();return}
  activeIndex=selectedIndex();
  const world=WORLDS[activeIndex],worldDone=isDone(activeIndex),resumed=!worldDone&&state.resume[world.id]>0;
  setTheme(world);
  const stage=$('#space-stage');
  // Every world can be picked, so the whole system stays in view at one zoom level
  stage.style.setProperty('--zoom','1');
  document.querySelectorAll('.orbit-plane').forEach((orbit,i)=>{
    orbit.classList.remove('departed');
    orbit.hidden=false;
    orbit.style.display='block';
    orbit.setAttribute('aria-hidden','true');
    orbit.classList.toggle('outermost-visible', i===5);
    orbit.classList.add('geometry-set');
    orbit.style.removeProperty('top');
    orbit.style.removeProperty('height');
    orbit.innerHTML='';
  });
  $('#orbit-kicker').textContent=`${world.orbit} · ${done} of 6 worlds recorded`;
  const field=$('#planet-field');
  field.innerHTML=`<button class="stage-planet is-current can-enter ${worldDone?'is-done':''}" data-index="${activeIndex}" aria-label="${worldDone?'Review':'Enter'} ${world.subject}" style="${planetStyle(world)}">${planetMarkup(world)}<span class="planet-caption"><strong>${world.subject}</strong><small>${worldDone?`${ICON('check_circle')} Recorded`:resumed?'In progress':'Not explored yet'}</small></span></button>`;
  field.querySelector('.is-current')?.addEventListener('click',()=>openLesson(activeIndex));

  // The other five worlds wait on the inner rings; tap one to fly there
  WORLDS.map((w,i)=>i).filter(i=>i!==activeIndex).forEach((i,k)=>{
    const depth=k+1;
    const plane=document.querySelector(`.orbit-plane[data-plane="${5-depth}"]`);
    if(!plane) return;
    const w=WORLDS[i],d=isDone(i);
    const btn=document.createElement('button');
    btn.className=`orbit-planet ${depth%2===1?'side-left':'side-right'} depth-${depth} ${d?'is-done':''}`;
    btn.dataset.index=String(i);
    btn.title=w.subject;
    btn.setAttribute('aria-label',`Fly to ${w.subject}, ${d?'recorded':'not explored yet'}`);
    btn.style.cssText=planetStyle(w);
    btn.innerHTML=planetMarkup(w)+(d?'<span class="planet-check icon" aria-hidden="true">check</span>':'');
    btn.addEventListener('click',()=>travelTo(i));
    plane.appendChild(btn);
  });

  $('#stage-instruction').hidden=true;
  const launch=$('#launch-button');
  launch.innerHTML=worldDone?`<span>Review this world</span><small>${ICON('check_circle')} Recorded</small>`:resumed?'<span>Keep going</span><small>Pick up where you stopped</small>':'<span>Enter this world</span><small>About 3 minutes</small>';
  launch.onclick=()=>openLesson(activeIndex);
  $('#route-list').innerHTML=WORLDS.map((w,i)=>{
    const d=isDone(i),status=d?'Recorded':state.resume[w.id]>0?'In progress':'Not yet';
    return `<li><button type="button" class="route-item ${d?'complete':'open'} ${i===activeIndex?'current':''}" data-index="${i}" aria-pressed="${i===activeIndex}" aria-label="${w.subject}, ${status}"><span class="route-index">0${i+1}</span><strong>${w.subject}</strong><small>${d?ICON('check_circle')+' ':''}${status}</small></button></li>`;
  }).join('');
  $('#route-list').querySelectorAll('.route-item').forEach(item=>item.addEventListener('click',()=>travelTo(Number(item.dataset.index))));
  $('#cert-status').innerHTML=`<span class="icon cert-lock" aria-hidden="true">lock</span><span><strong>Certificate</strong><small>${worldsLeft()}</small></span>`;
  // Lay out now so travel can measure the arrival spot, and again once the route strip has settled
  layoutOrbitGeometry();
  requestAnimationFrame(layoutOrbitGeometry);
}

function layoutOrbitGeometry(){
  const stage=$('#space-stage'),planet=stage?.querySelector('.stage-planet.is-current'),sun=stage?.querySelector('.distant-sun'),outerOrbit=stage?.querySelector('.orbit-plane-6'),activeOrbit=stage?.querySelector('.orbit-plane.outermost-visible');
  if(!stage||!planet||!sun||!outerOrbit||!activeOrbit)return;
  const orbitAnchor=sun.offsetTop+sun.offsetHeight/2;
  const outerBottom=stage.clientHeight-(window.innerWidth*.10);
  const outerHeight=Math.max(120,outerBottom-orbitAnchor);
  const outerWidth=outerOrbit.offsetWidth;
  stage.querySelectorAll('.orbit-plane.geometry-set').forEach(orbit=>{
    const widthRatio=outerWidth?orbit.offsetWidth/outerWidth:1;
    const height=outerHeight*widthRatio;
    orbit.style.height=`${height.toFixed(1)}px`;
    orbit.style.top=`${(orbitAnchor+height/2).toFixed(1)}px`;
  });
  const activeBottom=orbitAnchor+parseFloat(activeOrbit.style.height||'0');
  planet.style.top=`${activeBottom.toFixed(1)}px`;
}

function renderCompleteHome(){
  setTheme(WORLDS[WORLDS.length-1]);
  // Place each world on its own ellipse. Near-side worlds cross in front of
  // their orbit while far-side worlds pass behind it, creating real depth.
  const angles=[205,325,155,25,215,340].map(a=>a*Math.PI/180);
  $('#complete-system').innerHTML=`<span class="complete-sun" aria-hidden="true"></span>`+WORLDS.map((w,i)=>{
    const size=30+i*12;
    const height=54+i*19;
    const rx=size/2, ry=height/6.4;
    const x=50+rx*Math.cos(angles[i]);
    const y=50+ry*Math.sin(angles[i]);
    const orbitLayer=8+i*3;
    const planetLayer=orbitLayer+(Math.sin(angles[i])>0?2:-1);
    return `<span class="complete-ring" style="--orbit-size:${size}%;--orbit-height:${height}px;--layer:${orbitLayer};--delay:${-i*1.2}s"></span><button class="complete-planet" data-index="${i}" aria-label="Review ${w.subject}" style="left:${x.toFixed(2)}%;top:${y.toFixed(2)}%;--s:${28+i*5}px;--layer:${planetLayer};--delay:${-i*.7}s;${planetStyle(w)}">${planetMarkup(w)}</button>`;
  }).join('');
  $('#complete-grid').innerHTML=WORLDS.map((w,i)=>`<button class="complete-card" data-index="${i}" style="--card-color:${w.color}"><strong>${w.subject}</strong><small>${w.complete}</small></button>`).join('');
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
  $('#lesson-orbit').textContent=lessonReview?`${w.orbit} · Review`:`${w.orbit}`;
  $('#lesson-footer-note').textContent=lessonReview?'You finished this world, so you can move through it freely.':'Try the activity to unlock Continue.';
  lessonDialog.showModal();
  renderLesson();
}

function renderLesson(){
  const w=WORLDS[lessonIndex],lessonCount=w.lessons.length,total=stepCount(w);
  $('#lesson-progress-fill').style.width=`${(lessonStep+1)/total*100}%`;
  $('#lesson-steps').innerHTML=[...w.lessons.map(s=>s.label),'Field mission','Orbit passed'].map((name,i)=>`<button type="button" class="step-pill ${i===lessonStep?'active':i<lessonStep||lessonReview?'done':''}" data-step="${i}">${i+1}. ${name}</button>`).join('');
  if(lessonReview){
    $('#lesson-steps').querySelectorAll('.step-pill').forEach(pill=>pill.addEventListener('click',()=>{lessonStep=Number(pill.dataset.step);renderLesson()}));
  }
  $('#lesson-back').style.visibility=lessonStep===0?'hidden':'visible';
  const onActivity=lessonStep===lessonCount;
  const onComplete=lessonStep===total-1;
  $('#lesson-next').style.display=onActivity||onComplete?'none':'block';
  if(!lessonReview) $('#lesson-footer-note').textContent=onComplete?'':onActivity?'Finish the mission to record this world.':'Try the activity to unlock Continue.';
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

function visualHTML(step){
  const v=step.visual;
  if(v==='source-sort') return `<p class="note-prompt">Drag or tap each card into Primary or Secondary.</p><div class="sort-bins"><div class="sort-bin" data-bin="primary"><h4>Primary source</h4><div class="bin-drop" data-accept="primary"></div></div><div class="sort-bin" data-bin="secondary"><h4>Secondary source</h4><div class="bin-drop" data-accept="secondary"></div></div></div><div class="sort-bank" id="source-bank"><button type="button" class="sort-chip" draggable="true" data-kind="primary" data-why="The crew said it during the flight.">Radio recording</button><button type="button" class="sort-chip" draggable="true" data-kind="primary" data-why="This real part flew on the mission.">Heat-shield piece</button><button type="button" class="sort-chip" draggable="true" data-kind="primary" data-why="It was taken during the mission.">Crew photo</button><button type="button" class="sort-chip" draggable="true" data-kind="secondary" data-why="Someone wrote it years later to explain the mission.">Textbook chapter</button></div><p class="reveal-panel" id="source-why">Sort a card to learn why it goes there.</p><p class="lesson-check" id="field-note">Sort all four cards to continue.</p>`;
  if(v==='precision-rewrite') return `<p class="note-prompt">Tap each vague phrase to swap in exact details.</p><div class="rewrite-card" id="rewrite-card"><p>On <button class="blank-chip" data-fill="Sol 18">a day</button>, the rover’s <button class="blank-chip" data-fill="battery fell from 62% to 41%">power got bad</button> during <button class="blank-chip" data-fill="the dust storm">weather</button>.</p></div><p class="reveal-panel" id="rewrite-out">This draft is too vague to help.</p><p class="lesson-check" id="field-note">Fix all three vague phrases.</p>`;
  if(v==='channel-preview') return `<p class="note-prompt">Give each kind of light its own color and watch the picture change.</p><div class="mini-nebula" id="mini-nebula"></div><label class="mapping-row">Infrared<select data-ch="ir"><option value="">Color…</option><option value="red">Red</option><option value="green">Green</option><option value="blue">Blue</option></select></label><label class="mapping-row">Visible<select data-ch="vis"><option value="">Color…</option><option value="red">Red</option><option value="green">Green</option><option value="blue">Blue</option></select></label><label class="mapping-row">Ultraviolet<select data-ch="uv"><option value="">Color…</option><option value="red">Red</option><option value="green">Green</option><option value="blue">Blue</option></select></label><p class="lesson-check" id="field-note">Use a different color for each one to continue.</p>`;
  if(v==='tradeoff-board') return `<p class="note-prompt">Pick the route that keeps the rover safe and charged.</p><div class="trade-cards"><button class="trade-card" data-ok="no"><strong>Short cut through soft sand</strong><small>Distance 4 · Uses lots of power · Wheels may slip</small></button><button class="trade-card" data-ok="yes"><strong>Longer path on firm rock</strong><small>Distance 6 · Uses some power · Wheels grip well</small></button></div><p class="reveal-panel" id="trade-note">Which matters more: a short path or a safe one?</p><p class="lesson-check" id="field-note">Choose the safer route to continue.</p>`;
  if(v==='line-match') return `<p class="note-prompt">Tap a dark line, then tap the element it belongs to.</p><div class="pair-board"><div class="pair-col">${[['486','Line near 486 nm'],['589','Line near 589 nm'],['656','Line near 656 nm']].map(([id,label])=>`<button class="pair-item" data-pair="${id}">${label}</button>`).join('')}</div><div class="pair-col">${[['589','Sodium'],['656','Hydrogen α'],['486','Hydrogen β']].map(([id,label])=>`<button class="pair-item" data-pair="${id}">${label}</button>`).join('')}</div></div><p class="reveal-panel" id="line-note">Hint: hydrogen has two lines here.</p><p class="lesson-check" id="field-note">Match all three lines to continue.</p>`;
  if(v==='phase-meet') return `<p class="note-prompt">Slide the phase angle until the two lines meet at the same dot.</p><div class="phase-stage"><svg class="phase-svg" viewBox="0 0 200 200" aria-hidden="true"><circle class="phase-orbit-ring" cx="100" cy="100" r="72"/><line class="phase-ray station" id="station-ray" x1="100" y1="100" x2="172" y2="100"/><line class="phase-ray probe" id="probe-ray" x1="100" y1="100" x2="149" y2="152"/><circle class="phase-dot station" id="station-mark" cx="172" cy="100" r="6"/><circle class="phase-dot probe" id="probe-mark" cx="149" cy="152" r="6"/><circle class="phase-hub" cx="100" cy="100" r="4"/></svg></div><label>Phase angle <input id="phase-range" type="range" min="10" max="80" value="20"><output id="phase-out">20°</output></label><p class="lesson-check" id="field-note">Find the spot where they meet, near 47°.</p>`;
  return `<p class="lesson-check" id="field-note">Continue when ready.</p>`;
}

function bindConceptVisual(step){
  const next=$('#lesson-next'), note=$('#field-note'), v=step.visual;
  const done=()=>{next.disabled=false};

  if(v==='source-sort'){
    const why=$('#source-why'); let placed=0; let picked=null; let dragChip=null;
    const place=(chip,accept)=>{
      if(chip.dataset.locked) return;
      chip.classList.remove('picked'); picked=null;
      if(chip.dataset.kind!==accept){why.textContent='Not quite: was it made during the event, or later?';return}
      const bin=document.querySelector(`.bin-drop[data-accept="${accept}"]`);
      chip.dataset.locked='1'; chip.draggable=false; chip.disabled=true; bin.append(chip);
      why.innerHTML=`<strong>${chip.textContent}</strong> — ${chip.dataset.why}`;
      placed++; note.innerHTML=placed===4?'<strong>All sorted!</strong> You can tell clues from later stories.':'Nice! Keep sorting.';
      if(placed===4) done();
    };
    $('#source-bank').querySelectorAll('.sort-chip').forEach(chip=>{
      chip.addEventListener('dragstart',e=>{dragChip=chip; chip.classList.add('dragging'); e.dataTransfer.setData('text/plain',chip.dataset.kind); e.dataTransfer.effectAllowed='move'});
      chip.addEventListener('dragend',()=>{chip.classList.remove('dragging'); dragChip=null});
      // Tap a card, then tap a box: drag-and-drop does not fire on touch screens
      chip.addEventListener('click',()=>{if(chip.dataset.locked)return; picked?.classList.remove('picked'); picked=chip; chip.classList.add('picked'); why.textContent=`Now tap Primary or Secondary for “${chip.textContent}”.`});
    });
    document.querySelectorAll('.sort-bin').forEach(bin=>{
      const drop=bin.querySelector('.bin-drop');
      bin.addEventListener('click',()=>{if(picked) place(picked, drop.dataset.accept)});
      bin.addEventListener('dragover',e=>{e.preventDefault(); drop.classList.add('drag-over')});
      bin.addEventListener('dragleave',()=>drop.classList.remove('drag-over'));
      bin.addEventListener('drop',e=>{
        e.preventDefault(); drop.classList.remove('drag-over');
        const chip=dragChip||document.querySelector('.sort-chip.dragging');
        if(chip) place(chip, drop.dataset.accept);
      });
    });
    return;
  }

  if(v==='line-match'){
    let selected=null; const matched=new Set(); const noteEl=$('#line-note');
    const expected=document.querySelectorAll('.pair-col:first-child .pair-item').length;
    document.querySelectorAll('.pair-item').forEach(btn=>{
      btn.onclick=()=>{
        if(btn.classList.contains('matched')) return;
        if(!selected){selected=btn; btn.classList.add('selected'); return}
        if(selected===btn){selected.classList.remove('selected'); selected=null; return}
        if(selected.dataset.pair===btn.dataset.pair && selected.parentElement!==btn.parentElement){
          const a=selected.textContent.trim(), b=btn.textContent.trim();
          selected.classList.add('matched'); btn.classList.add('matched'); selected.classList.remove('selected');
          matched.add(btn.dataset.pair);
          noteEl.textContent=`Linked: ${a} ↔ ${b}`;
          selected=null;
          if(matched.size===expected){note.innerHTML='<strong>All matched!</strong> You read the fingerprints.'; done()}
        }else{
          selected.classList.remove('selected'); selected=btn; btn.classList.add('selected'); noteEl.textContent='Those don’t match, so try another pair.';
        }
      };
    });
    return;
  }

  if(v==='precision-rewrite'){
    let n=0;
    document.querySelectorAll('.blank-chip').forEach(btn=>btn.onclick=()=>{if(btn.dataset.done) return; btn.textContent=btn.dataset.fill; btn.dataset.done='1'; btn.classList.add('filled'); n++; $('#rewrite-out').textContent=n===3?'Now the team knows exactly what happened.':'Better! Keep fixing vague words.'; if(n===3){note.innerHTML='<strong>Much clearer!</strong> It says when, what changed, and why.'; done()}});
    return;
  }

  if(v==='channel-preview'){
    const palette={red:'#ec4167',green:'#42d39a',blue:'#6295ff'}; const neb=$('#mini-nebula');
    const update=()=>{const vals=[...document.querySelectorAll('[data-ch]')].map(s=>s.value); neb.style.background=`radial-gradient(circle at 30% 40%,${palette[vals[0]]||'#333'},transparent 32%),radial-gradient(circle at 70% 55%,${palette[vals[1]]||'#333'},transparent 34%),radial-gradient(circle at 50% 70%,${palette[vals[2]]||'#333'},transparent 28%),#120916`; if(vals.every(Boolean)&&new Set(vals).size===3){note.innerHTML='<strong>Color key made!</strong> Each kind of light has its own color.'; done()}};
    document.querySelectorAll('[data-ch]').forEach(s=>s.addEventListener('change',update)); update();
    return;
  }

  if(v==='tradeoff-board'){
    document.querySelectorAll('.trade-card').forEach(card=>card.onclick=()=>{
      document.querySelectorAll('.trade-card').forEach(c=>c.classList.remove('selected')); card.classList.add('selected');
      if(card.dataset.ok==='yes'){$('#trade-note').textContent='Firm rock is longer, but it saves power and wheels.'; note.innerHTML='<strong>Smart choice!</strong> The safe path keeps the rover moving.'; done()}
      else{$('#trade-note').textContent='Sand looks shorter, but slipping drains the battery.'; next.disabled=true; note.textContent='That route is risky, so try the other one.'}
    });
    return;
  }

  if(v==='phase-meet'){
    const target=47, cx=100, cy=100, r=72;
    const point=(deg)=>{
      const rad=deg*Math.PI/180;
      return {x:cx+r*Math.cos(rad), y:cy+r*Math.sin(rad)};
    };
    const setRay=(id,dotId,deg)=>{
      const p=point(deg);
      const ray=$(id), dot=$(dotId);
      ray.setAttribute('x2', p.x.toFixed(2));
      ray.setAttribute('y2', p.y.toFixed(2));
      dot.setAttribute('cx', p.x.toFixed(2));
      dot.setAttribute('cy', p.y.toFixed(2));
    };
    const paint=()=>{
      const p=Number($('#phase-range').value);
      $('#phase-out').value=`${p}°`;
      setRay('#station-ray','#station-mark',p);
      setRay('#probe-ray','#probe-mark',target);
      if(Math.abs(p-target)<=2){note.innerHTML='<strong>You found it!</strong> Both lines meet at the same spot.'; done()}
      else if(!lessonReview){next.disabled=true; note.textContent=`Keep sliding until the lines meet at ${target}°.`}
    };
    $('#phase-range').oninput=paint; paint();
    return;
  }

  done();
}

function renderActivity(w){
  $('#lesson-next').style.display='none';
  $('#lesson-stage').innerHTML=`<article class="activity-page"><div class="activity-heading"><div><span class="mission-badge">Field mission</span><h3>${activityTitle(w.id)}</h3></div><p>${activityPrompt(w.id)}</p></div><div class="activity-workspace" id="activity-workspace"></div></article>`;
  activityRenderers[w.id]();
}
function activityTitle(id){return{history:'Fix the Moon camp',reading:'Send a rover report',art:'Color a space cloud',engineering:'Drive to the relay ridge',science:'Scan a star’s light',math:'Put the probe in orbit'}[id]}
function activityPrompt(id){return{history:'Tag which clues are primary, then give each crew member the right job.',reading:'Turn the rover data into a clear message for engineers on Earth.',art:'Give each kind of light a color, set the contrast, and write a color key.',engineering:'Tap squares to drive the rover to the ridge before the battery runs out.',science:'Drag the scanner to find three dark lines, then pick the elements.',math:'Slide speed and angle until your path matches the dashed orbit.'}[id]}
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
    $('#activity-workspace').innerHTML=`<div class="history-mission"><section class="brief-card"><span class="visual-label">Emergency brief</span><p>A dust storm cut power at the Moon camp, so read the clues first.</p><div class="source-cards"><article class="source-card" data-id="t"><strong>Radio recording · 19:42</strong><p>“Power from the solar cable dropped after the gust, and box B feels warm.”</p><label>Source type <select class="theme-select" data-tag="primary"><option value="">Tag…</option><option value="primary">Primary</option><option value="secondary">Secondary</option></select></label></article><article class="source-card" data-id="p"><strong>Helmet-camera photo · 19:44</strong><p>The cable cover is lifted and dust is stuck on the plug.</p><label>Source type <select class="theme-select" data-tag="primary"><option value="">Tag…</option><option value="primary">Primary</option><option value="secondary">Secondary</option></select></label></article><article class="source-card" data-id="b"><strong>News story, written later</strong><p>“Experts say Moon weather is a mystery and crews always panic.”</p><label>Source type <select class="theme-select" data-tag="secondary"><option value="">Tag…</option><option value="primary">Primary</option><option value="secondary">Secondary</option></select></label></article></div></section><section class="brief-card"><span class="visual-label">Give each person a job</span><div class="crew-selects"><label>Jordan · fixes wiring<select class="theme-select" data-answer="repair"><option value="">Choose job</option><option value="route">Map shelter route</option><option value="report">Report to Earth</option><option value="repair">Repair solar cable</option></select></label><label>Sam · finds safe paths<select class="theme-select" data-answer="route"><option value="">Choose job</option><option value="route">Map shelter route</option><option value="report">Report to Earth</option><option value="repair">Repair solar cable</option></select></label><label>Ari · explains things clearly<select class="theme-select" data-answer="report"><option value="">Choose job</option><option value="route">Map shelter route</option><option value="report">Report to Earth</option><option value="repair">Repair solar cable</option></select></label></div><p class="reveal-panel">Hint: the recording and photo were made during the storm, but the news story came later.</p><button class="pass-button" id="check-history">Send the plan</button><p class="activity-feedback" role="status"></p></section></div>`;
    $('#check-history').onclick=()=>{
      const tags=[...document.querySelectorAll('.source-card select')].every(s=>s.value===s.dataset.tag);
      const roles=[...document.querySelectorAll('.crew-selects select')].every(s=>s.value&&s.value===s.dataset.answer);
      if(tags&&roles){feedback('Plan accepted! You used the clues and everyone has the right job.');setTimeout(passActivity,800)}
      else feedback('Not yet: check each clue’s tag, then match each job to the right skill.',true);
    };
  },
  reading(){
    $('#activity-workspace').innerHTML=`<div class="comm-console"><div class="telemetry"><span class="visual-label">ROVER DATA · SOL 18</span><dl><dt>Event</dt><dd>Dust storm</dd><dt>Battery</dt><dd>62% → 41%</dd><dt>Location</dt><dd>Ridge route B</dd><dt>Mobility</dt><dd>Normal</dd></dl><label>Who is this message for?<select class="channel-select" id="message-audience"><option value="">Choose team</option><option value="public">Museum visitors</option><option value="engineering">Power engineers</option><option value="catering">Food team</option></select></label></div><div><label for="mission-log">Write 2–4 sentences: when it happened, what changed, and what to do next.</label><textarea class="log-textarea" id="mission-log" placeholder="On Sol 18..."></textarea><div class="writing-checks"><span class="writing-check" data-check="sol">names the sol</span><span class="writing-check" data-check="dust">names the event</span><span class="writing-check" data-check="power">uses battery data</span><span class="writing-check" data-check="action">says what to do next</span><span class="writing-check" data-check="length">80+ characters</span></div><button class="pass-button" id="send-log" disabled>Send message</button><p class="activity-feedback" role="status"></p></div></div>`;
    const area=$('#mission-log'),aud=$('#message-audience'),send=$('#send-log');
    const update=()=>{const t=area.value.toLowerCase(),checks={sol:/sol\s*18/.test(t),dust:t.includes('dust'),power:t.includes('41%')||t.includes('battery'),action:/recommend|should|pause|wait|return|continue|route/.test(t),length:t.length>=80};Object.entries(checks).forEach(([k,v])=>$(`[data-check="${k}"]`).classList.toggle('met',v));send.disabled=!(Object.values(checks).every(Boolean)&&aud.value==='engineering')};
    area.addEventListener('input',update);aud.addEventListener('change',update);
    send.onclick=()=>{feedback('Message sent! The engineers know just what happened and what to do.');setTimeout(passActivity,800)};
  },
  art(){
    $('#activity-workspace').innerHTML=`<div class="color-lab"><div><div class="nebula-canvas" id="nebula-canvas" aria-label="Live false-color nebula preview"><div class="nebula-clouds"></div><div class="nebula-stars" id="nebula-stars"></div></div><div class="mapping-key"><span>Cloud A: cool dust</span><span>Cloud B: visible gas</span><span>Points: hot stars</span></div></div><div class="channel-controls"><span class="visual-label">LIGHT TO COLOR</span><p>Make infrared red, visible green, and ultraviolet blue, then drag the white line to set contrast (how bold the dust looks).</p><label class="mapping-row">Infrared<select class="theme-select" data-map="ir"><option value="">Choose display color</option><option value="red">Red</option><option value="green">Green</option><option value="blue">Blue</option></select></label><label class="mapping-row">Visible<select class="theme-select" data-map="visible"><option value="">Choose display color</option><option value="red">Red</option><option value="green">Green</option><option value="blue">Blue</option></select></label><label class="mapping-row">Ultraviolet<select class="theme-select" data-map="uv"><option value="">Choose display color</option><option value="red">Red</option><option value="green">Green</option><option value="blue">Blue</option></select></label><div><span class="control-label">Contrast · <output id="art-contrast-output">35</output></span><div class="art-gradient" id="art-gradient" role="slider" aria-label="Image contrast" aria-valuemin="20" aria-valuemax="100" aria-valuenow="35" tabindex="0"><span class="art-drag-line" id="art-drag-line"></span></div></div><small>Aim for a contrast between 55 and 70.</small><label for="art-caption">Color key: say what infrared and ultraviolet show</label><textarea class="log-textarea" id="art-caption" placeholder="Red shows infrared dust and blue shows ultraviolet light..."></textarea><button class="pass-button" id="save-image" disabled>Save my picture</button><p class="activity-feedback" role="status"></p></div></div>`;
    const stars=$('#nebula-stars'); let seed=99; const rnd=()=>((seed=seed*48271%2147483647)/2147483647);
    stars.innerHTML=Array.from({length:36},()=>`<i style="left:${(5+rnd()*90).toFixed(1)}%;top:${(8+rnd()*84).toFixed(1)}%;width:${(1.2+rnd()*3.4).toFixed(1)}px;height:${(1.2+rnd()*3.4).toFixed(1)}px;opacity:${(.4+rnd()*.6).toFixed(2)}"></i>`).join('');
    const caption=$('#art-caption'),button=$('#save-image'),canvas=$('#nebula-canvas'),gradient=$('#art-gradient'),line=$('#art-drag-line'),selects=[...document.querySelectorAll('[data-map]')],palette={red:'#ec4167',green:'#42d39a',blue:'#6295ff'};let contrastValue=35;
    const update=()=>{const values=selects.map(s=>s.value);canvas.style.setProperty('--c1',palette[values[0]]||'#39405f');canvas.style.setProperty('--c2',palette[values[1]]||'#39405f');canvas.style.setProperty('--c3',palette[values[2]]||'#39405f');canvas.style.setProperty('--cloud-contrast',(0.8+contrastValue/90).toFixed(2));canvas.style.setProperty('--cloud-bright',(0.55+contrastValue/140).toFixed(2));line.style.left=`${contrastValue}%`;gradient.setAttribute('aria-valuenow',contrastValue);$('#art-contrast-output').value=contrastValue;button.disabled=!(values.every(Boolean)&&new Set(values).size===3&&caption.value.trim().length>=45)};
    const setContrast=e=>{const rect=gradient.getBoundingClientRect();contrastValue=Math.max(20,Math.min(100,Math.round((e.clientX-rect.left)/rect.width*100)));update()};let dragging=false;gradient.addEventListener('pointerdown',e=>{dragging=true;gradient.setPointerCapture(e.pointerId);setContrast(e)});gradient.addEventListener('pointermove',e=>{if(dragging)setContrast(e)});gradient.addEventListener('pointerup',()=>dragging=false);gradient.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight'].includes(e.key)){contrastValue=Math.max(20,Math.min(100,contrastValue+(e.key==='ArrowRight'?2:-2)));update()}});
    selects.forEach(s=>s.addEventListener('change',update));caption.addEventListener('input',update);update();
    button.onclick=()=>{const correct=selects[0].value==='red'&&selects[1].value==='green'&&selects[2].value==='blue',c=contrastValue,words=caption.value.toLowerCase();if(!correct){feedback('Not quite: infrared is red, visible is green, and ultraviolet is blue.',true);return}if(c<55||c>70){feedback('Colors are right, so now drag the white line to between 55 and 70.',true);return}if(!words.includes('infrared')||!words.includes('ultraviolet')){feedback('Your key needs to say what infrared and ultraviolet show.',true);return}feedback('Picture saved! Your key explains every color.');setTimeout(passActivity,800)};
  },
  engineering(){
    const levels=[
      {name:'Survey flats',energy:16,start:30,goal:5,hazards:[13,20,27],sands:[24,18,12,6]},
      {name:'Cliff detour',energy:15,start:30,goal:5,hazards:[24,18,12,6,7,8,9],sands:[31,32,33,34]},
      {name:'Relay maze',energy:16,start:30,goal:5,hazards:[31,32,33,34,35,18,12,6,26,27,28,29,13,7,8,21,22,23,16,17,11],sands:[24,25,19,14,9]}
    ];
    let levelIndex=0,pos,energy,finished=false;
    $('#activity-workspace').innerHTML=`<div class="rover-lab"><div><div class="rover-levels" id="rover-levels"></div><div class="rover-grid" id="rover-grid"></div></div><div class="rover-panel"><span class="visual-label">ROVER STATUS</span><h4 id="rover-level-title"></h4><p id="rover-brief"></p><div class="energy-bar"><span id="energy-fill"></span></div><strong id="energy-readout"></strong><div class="rover-legend"><span class="rock-key">Rock · 1</span><span class="sand-key">Sand · 2</span><span class="hazard-key">Blocked</span></div><p>Move one square up, down, left, or right to reach the ridge in the top-right corner.</p><button class="pass-button" id="confirm-route" disabled></button><p class="activity-feedback" role="status"></p></div></div>`;
    const grid=$('#rover-grid'),fill=$('#energy-fill'),read=$('#energy-readout'),confirm=$('#confirm-route'),dots=$('#rover-levels');
    const renderLevel=()=>{
      const cfg=levels[levelIndex];pos=cfg.start;energy=cfg.energy;finished=false;
      dots.innerHTML=levels.map((l,i)=>`<span class="rover-level-dot ${i<levelIndex?'passed':i===levelIndex?'active':''}">${i+1}</span>`).join('');
      $('#rover-level-title').textContent=`Level ${levelIndex+1} · ${cfg.name}`;
      $('#rover-brief').textContent=levelIndex===0?'Learn what each kind of ground costs.':levelIndex===1?'A cliff blocks the way, so you must cross some sand.':'The safe path is narrow, so plan every move.';
      grid.innerHTML=Array.from({length:36},(_,i)=>`<button class="terrain-cell ${cfg.hazards.includes(i)?'hazard':cfg.sands.includes(i)?'sand':'rock'} ${i===cfg.start?'rover path':''} ${i===cfg.goal?'goal':''}" data-cell="${i}" ${cfg.hazards.includes(i)?'disabled':''} aria-label="Terrain cell ${i+1}${i===cfg.goal?', relay ridge goal':''}"></button>`).join('');
      fill.style.width='100%';read.textContent=`${energy} energy`;confirm.disabled=true;confirm.textContent=levelIndex===levels.length-1?'Finish the drive':'Next level';feedback('');
      grid.querySelectorAll('button:not(:disabled)').forEach(cell=>cell.onclick=()=>moveRover(cell,cfg));
    };
    const moveRover=(cell,cfg)=>{if(finished)return;const n=Number(cell.dataset.cell),sameRow=Math.floor(n/6)===Math.floor(pos/6),adj=Math.abs(n-pos)===6||(sameRow&&Math.abs(n-pos)===1);if(!adj){feedback('Pick a square right next to the rover.',true);return}const cost=cfg.sands.includes(n)?2:1;if(energy-cost<0){feedback('Not enough power for that move, so close and reopen the mission to try again.',true);return}grid.querySelector(`[data-cell="${pos}"]`).classList.remove('rover');pos=n;energy-=cost;cell.classList.add('rover','path');fill.style.width=`${energy/cfg.energy*100}%`;read.textContent=`${energy} energy`;feedback('');if(pos===cfg.goal){finished=true;confirm.disabled=false;feedback(`Level ${levelIndex+1} done with ${energy} energy left!`)}};
    confirm.onclick=()=>{if(levelIndex<levels.length-1){levelIndex++;renderLevel();return}feedback('All three levels done. Great driving!');setTimeout(passActivity,900)};
    renderLevel();
  },
  science(){
    const lines=[{v:486,name:'Hydrogen β'},{v:589,name:'Sodium'},{v:656,name:'Hydrogen α'}],found=new Set();
    $('#activity-workspace').innerHTML=`<div class="spectrum-lab"><div><div class="spectrum-view spectrum-scanner" id="spectrum-scanner" role="slider" aria-label="Spectrum wavelength" aria-valuemin="400" aria-valuemax="700" aria-valuenow="460" tabindex="0"><span class="spectrum-color" aria-hidden="true"></span>${lines.map(l=>`<i class="absorption-line" data-wavelength="${l.v}" style="left:${(l.v-400)/3}%"></i>`).join('')}<span class="scanner wide" id="scanner"></span></div><div class="spectrum-readout">Wavelength: <output id="wavelength-output">460 nm</output><small>Drag the white scanner across the colors to find each dark line.</small></div></div><div class="scan-findings">${lines.map(l=>`<div class="finding" data-line="${l.v}">Not found yet: line near ${l.v} nm</div>`).join('')}<label>Which elements are in this star?<select class="channel-select" id="element-match"><option value="">Choose composition</option><option value="oxygen">Only oxygen</option><option value="hydrogen-sodium">Hydrogen and sodium</option><option value="carbon">Only carbon</option></select></label><button class="pass-button" id="identify-star" disabled>Save my scan</button><p class="activity-feedback" role="status"></p></div></div>`;
    const view=$('#spectrum-scanner'),scanner=$('#scanner'),button=$('#identify-star'),match=$('#element-match');let wavelength=460,dragging=false;
    const update=()=>{const pct=(wavelength-400)/3;$('#wavelength-output').value=`${wavelength} nm`;scanner.style.left=`${pct}%`;view.style.setProperty('--scan',`${pct}%`);view.setAttribute('aria-valuenow',wavelength);lines.forEach(l=>{if(Math.abs(wavelength-l.v)<=6){found.add(l.v);view.querySelector(`.absorption-line[data-wavelength="${l.v}"]`)?.classList.add('revealed');const el=$(`[data-line="${l.v}"]`);el.classList.add('found');el.textContent=`Found: ${l.name} at ${l.v} nm`}});button.disabled=!(found.size===3&&match.value==='hydrogen-sodium')};
    const setFromPointer=e=>{const rect=view.getBoundingClientRect();wavelength=Math.round(400+Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width))*300);update()};
    view.addEventListener('pointerdown',e=>{dragging=true;view.setPointerCapture(e.pointerId);setFromPointer(e)});view.addEventListener('pointermove',e=>{if(dragging)setFromPointer(e)});view.addEventListener('pointerup',()=>dragging=false);view.addEventListener('pointercancel',()=>dragging=false);view.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();wavelength=Math.max(400,Math.min(700,wavelength+(e.key==='ArrowRight'?2:-2)));update()}});
    match.addEventListener('change',update);update();button.onclick=()=>{feedback('Scan saved! This star has hydrogen and sodium.');setTimeout(passActivity,800)};
  },
  math(){
    $('#activity-workspace').innerHTML=`<div class="orbit-lab"><div class="orbit-sim"><span class="target-orbit"></span><span class="probe-orbit" id="probe-orbit"></span></div><div class="orbit-controls"><span class="visual-label">ORBIT MODEL</span><label>Speed <output id="velocity-output">88%</output><input id="velocity" type="range" min="70" max="130" value="88"></label><label>Phase angle <output id="phase-output">35°</output><input id="phase" type="range" min="20" max="80" value="35"></label><p>Make the solid path line up with the dashed one.</p><button class="pass-button" id="test-orbit">Test my orbit</button><p class="activity-feedback" role="status"></p></div></div>`;
    const velocity=$('#velocity'),phase=$('#phase'),orbit=$('#probe-orbit');
    const update=()=>{const v=Number(velocity.value),p=Number(phase.value);$('#velocity-output').value=`${v}%`;$('#phase-output').value=`${p}°`;orbit.style.setProperty('--orbit-w',`${42+(v-70)*.686}%`);orbit.style.setProperty('--orbit-h',`${19+(v-70)*.6}%`);orbit.style.transform=`translate(-50%,-50%) rotate(${(p-47)*.7-12}deg)`};
    velocity.addEventListener('input',update);phase.addEventListener('input',update);update();
    $('#test-orbit').onclick=()=>{const good=Math.abs(Number(velocity.value)-105)<=4&&Math.abs(Number(phase.value)-47)<=5;if(good){feedback('Perfect orbit! Your path matches the target.');setTimeout(passActivity,800)}else feedback('Not yet: speed changes the size and angle turns it, so aim near 105% and 47°.',true)};
  }
};

function renderCompletion(w){
  if(lessonReview){
    $('#lesson-stage').innerHTML=`<div class="lesson-complete" style="${planetStyle(w)}"><div class="complete-world">${planetMarkup(w)}</div><span class="mission-badge">Review</span><h3>${w.subject}</h3><p>${w.complete}</p><button class="continue-button" id="travel-next">Close review</button></div>`;
    $('#travel-next').onclick=()=>lessonDialog.close();
    return;
  }
  const done=state.completed.length,next=suggestNext(lessonIndex);
  const tally=WORLDS.map((x,i)=>`<span class="tally-dot ${isDone(i)?'lit':''}" style="--dot:${x.color}" title="${x.subject}"></span>`).join('');
  $('#lesson-stage').innerHTML=`<div class="lesson-complete" style="${planetStyle(w)}"><div class="complete-world">${planetMarkup(w)}</div><span class="mission-badge">Orbit passed</span><h3>${w.subject} recorded.</h3><p>${w.complete}</p><div class="world-tally" aria-label="${done} of 6 worlds recorded"><div class="tally-dots" aria-hidden="true">${tally}</div><strong>${done} of 6 worlds recorded</strong></div>${next<0?'<button class="continue-button" id="travel-next">See the completed journey</button>':`<button class="continue-button" id="travel-next">Next: ${WORLDS[next].subject}</button><button class="map-button" id="back-to-map">Back to the system map</button>`}</div>`;
  $('#travel-next').onclick=()=>{
    if(next<0){lessonDialog.close();return}
    // The dialog's close event fires after travelTo has set traveling, so it will not re-render mid-flight
    lessonDialog.close();
    travelTo(next);
  };
  $('#back-to-map')?.addEventListener('click',()=>lessonDialog.close());
}

function travelTo(index){
  if(traveling) return;
  if(index===activeIndex){renderHome();return}
  const target=document.querySelector(`.orbit-planet[data-index="${index}"] .planet-body`);
  const first=target?target.getBoundingClientRect():null;
  const current=document.querySelector('.stage-planet.is-current');
  const exitRect=current?current.getBoundingClientRect():null;
  state.selected=WORLDS[index].id;
  saveState();
  traveling=true;
  $('#space-stage').classList.add('traveling');

  // Keep the departing world visible while the next one arrives
  if(current&&exitRect){
    const ghost=current.cloneNode(true);
    ghost.className='travel-ghost stage-planet is-current';
    ghost.removeAttribute('aria-label');
    ghost.style.cssText=`position:fixed;left:${exitRect.left}px;top:${exitRect.top}px;width:${exitRect.width}px;height:${exitRect.height}px;margin:0;z-index:40;pointer-events:none;transform:none;opacity:1;transition:transform 1.25s cubic-bezier(.4,0,.2,1),opacity 1.15s ease`;
    document.body.appendChild(ghost);
    requestAnimationFrame(()=>{
      ghost.style.transform='translate(34vw,-5vh) rotate(28deg) scale(.72)';
      ghost.style.opacity='0';
    });
    window.setTimeout(()=>ghost.remove(),1300);
  }

  renderHome();
  const arrived=document.querySelector('.stage-planet.is-current');
  if(first&&arrived){
    const last=arrived.getBoundingClientRect();
    const dx=first.left+first.width/2-(last.left+last.width/2);
    const dy=first.top+first.height/2-(last.top+last.height/2);
    const sx=first.width/Math.max(last.width,1);
    const sy=first.height/Math.max(last.height,1);
    arrived.style.transition='none';
    arrived.style.transform=`translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${sx}, ${sy})`;
    void arrived.offsetWidth;
    arrived.style.transition='transform 1.25s cubic-bezier(.16,.84,.28,1)';
    arrived.style.transform='translate(-50%,-50%) scale(1)';
    const clear=()=>{arrived.style.transition='';arrived.style.transform='';arrived.removeEventListener('transitionend',clear)};
    arrived.addEventListener('transitionend',clear);
  }
  window.setTimeout(()=>{$('#space-stage').classList.remove('traveling');traveling=false},1300);
}

function openLog(){
  $('#log-entries').innerHTML=state.completed.length?state.completed.map(id=>{const w=WORLDS.find(x=>x.id===id);return `<article class="log-entry" style="--entry-color:${w.color}"><div class="stamp">${w.short}</div><div><h3>${w.subject}</h3><p>${w.complete}</p></div><time>${new Intl.DateTimeFormat(undefined,{month:'short',day:'numeric'}).format(new Date(state.dates[id]))}</time></article>`}).join(''):'<p class="empty-log">Finish any world and its record will appear here.</p>';
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
// Refresh the map after any close so newly recorded worlds light up (travel renders its own)
lessonDialog.addEventListener('close',()=>{if(!traveling)renderHome()});
function resetJourney(){
  if(!confirm('Reset the journey? Progress, the journey log, and saved lesson place will be cleared.')) return;
  state=freshState();
  saveState();
  activeIndex=selectedIndex();
  lessonIndex=0;
  lessonStep=0;
  lessonReview=false;
  traveling=false;
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
window.addEventListener('resize',()=>requestAnimationFrame(layoutOrbitGeometry));
createStars();
renderHome();
