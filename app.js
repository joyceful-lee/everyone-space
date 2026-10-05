const WORLDS = [
  {
    id:'history', subject:'History & Teamwork', orbit:'Orbit 6 · Outer frontier', short:'HT', color:'#b79cff', deep:'#37235f', soft:'rgba(183,156,255,.14)', ring:'#dccfff', ringed:true,
    surface:'radial-gradient(circle at 68% 24%,rgba(239,216,255,.72) 0 7%,transparent 8%),radial-gradient(ellipse at 28% 72%,rgba(69,39,102,.62) 0 24%,transparent 25%),radial-gradient(ellipse at 72% 54%,rgba(210,170,244,.22) 0 19%,transparent 20%),linear-gradient(145deg,#8c6cc5 0%,#5a3f86 52%,#30214f 100%)',
    title:'Read the record. Build the crew.', summary:'Use primary sources from earlier missions, then match different strengths to a lunar emergency.', complete:'You used evidence and teamwork to turn space history into a plan for the future.',
    lessons:[
      {label:'Mission records',title:'The past is mission data',text:'Space history is more than a list of famous firsts. Flight logs, photographs, recordings, instrument readings, and hardware are primary sources—evidence made during an event. Engineers study them to understand what actually happened, including mistakes that a polished summary might leave out.',fact:'A primary source comes from the time being studied. A later explanation is a secondary source.',visual:'source-sort'},
      {label:'Learning forward',title:'Every mission inherits knowledge',text:'Apollo crews left reflectors on the Moon that scientists still use to measure its distance from Earth. Mars rover teams compare new terrain with paths attempted by earlier rovers. A mission becomes part of a long chain: document, study, improve, and try again.',fact:'Good records let a team that was not present learn from people who were.',visual:'inherit-panels'},
      {label:'Shared crews',title:'Many skills make one mission',text:'The International Space Station has been assembled and operated by partners across many countries. Its crews depend on engineers, researchers, flight controllers, translators, doctors, and supply teams. Space achievements belong to networks of people, not one heroic individual.',fact:'Different viewpoints are a safety feature: they help teams notice different risks.',visual:'crew-network'},
      {label:'Decide from evidence',title:'Facts first, then the job chart',text:'During a problem, a strong crew separates facts from guesses, chooses the most urgent goal, and gives each job to the person whose skill fits it. Clear roles prevent duplicated work while regular check-ins keep the plan flexible.',fact:'Mission decisions should name the evidence, the goal, and the person responsible.',visual:'triage-board'}
    ]
  },
  {
    id:'reading', subject:'Reading & Writing', orbit:'Orbit 5 · Signal belt', short:'RW', color:'#ffd166', deep:'#654918', soft:'rgba(255,209,102,.14)', ringed:false,
    surface:'radial-gradient(ellipse at 32% 28%,rgba(255,248,194,.5) 0 10%,transparent 11%),repeating-linear-gradient(0deg,rgba(82,46,12,.2) 0 5px,transparent 6px 19px),linear-gradient(140deg,#ffd978,#c47a2d 58%,#633519)',
    title:'Write across millions of kilometers.', summary:'Read telemetry like evidence and compose a mission log another team can act on without guessing.', complete:'Your words carried evidence, sequence, and a clear next action across the signal belt.',
    lessons:[
      {label:'Purpose',title:'Space writing has a job',text:'A rover log is not written to sound dramatic. It preserves facts so scientists and engineers can make the next decision. The writer chooses details for a specific audience: a power engineer needs battery numbers; a geologist needs descriptions of rocks and location.',fact:'Before writing, ask: who will use this message, and what must they decide?',visual:'audience-switch'},
      {label:'Precision',title:'Specific beats exciting',text:'“The rover had a bad day” cannot guide a repair. “At 14:05 on Sol 18, battery charge fell from 62% to 41% during the dust storm” names time, measurement, and cause. Precise nouns and numbers reduce ambiguity when a message takes minutes to cross space.',fact:'A sol is a solar day on another world. A Martian sol lasts about 24 hours 39 minutes.',visual:'precision-rewrite'},
      {label:'Sequence',title:'Order makes a log usable',text:'Mission logs usually move from context to observation to response: where and when the event occurred, what changed, and what the team did or recommends. That pattern lets a reader reconstruct the event without asking the writer to start over.',fact:'Context → observation → response is a reliable structure for technical communication.',visual:'sequence-build'},
      {label:'Signal delay',title:'Write for a reader who cannot interrupt',text:'A message from Mars can take several minutes to reach Earth. The reader cannot ask an instant follow-up question, so the first message should include the important evidence and a clear recommendation. Concise does not mean incomplete.',fact:'Useful writing anticipates the reader’s next question.',visual:'delay-checklist'}
    ]
  },
  {
    id:'art', subject:'Art & Design', orbit:'Orbit 4 · Color cloud', short:'AD', color:'#ff8cb8', deep:'#6c2447', soft:'rgba(255,140,184,.14)', ringed:true, ring:'#ffcf75',
    surface:'conic-gradient(from 25deg,#ff6d8f,#ffcd67,#62dcc3,#6875ea,#c46ee8,#ff6d8f)',
    title:'Turn invisible light into a visible story.', summary:'Learn how astronomers and designers build scientifically honest false-color images from telescope data.', complete:'You designed an image that reveals data the human eye could never see by itself.',
    lessons:[
      {label:'Light as data',title:'A telescope records more than color',text:'Many telescopes measure infrared, ultraviolet, X-ray, or radio energy—wavelengths human eyes cannot see. The detector stores numbers for each pixel. To study and share those measurements, teams map them into colors we can see.',fact:'A false-color image is not “fake.” Its colors represent measured data outside ordinary vision.',visual:'wave-strip'},
      {label:'Channel mapping',title:'Color becomes a visual key',text:'Designers assign a visible color to each data channel. A common ordered mapping gives longer wavelengths red, middle wavelengths green, and shorter wavelengths blue. The legend must explain the mapping so the image stays scientifically useful.',fact:'The color choice should reveal structure and keep the data understandable.',visual:'channel-preview'},
      {label:'Contrast',title:'Contrast reveals faint structure',text:'If every pixel is shown with equal emphasis, faint clouds may disappear beside a bright star. Adjusting contrast can reveal dim filaments, but too much can hide differences or add misleading boundaries. Designers balance visibility with honesty.',fact:'A good scientific image reveals patterns without pretending the detector measured more than it did.',visual:'contrast-nebula'},
      {label:'Caption',title:'The caption completes the image',text:'A strong caption identifies the object, names the telescope or data source, and explains what each color means. Without that key, viewers may assume the colors are what an astronaut would see through a window.',fact:'Design communicates both wonder and method.',visual:'caption-builder'}
    ]
  },
  {
    id:'engineering', subject:'Engineering & Technology', orbit:'Orbit 3 · Rover lane', short:'ET', color:'#7ef0c4', deep:'#1c5f58', soft:'rgba(126,240,196,.13)', ringed:false,
    surface:'repeating-radial-gradient(circle at 38% 38%,transparent 0 13px,rgba(218,255,239,.2) 14px 16px),linear-gradient(140deg,#83e3bb,#2f927c 52%,#164c50)',
    title:'Design a route that survives the terrain.', summary:'Balance energy, hazards, communication, and science value while guiding a rover across a distant world.', complete:'Your rover reached the relay ridge with energy to spare because every route choice respected the system.',
    lessons:[
      {label:'Systems',title:'A rover is a system of systems',text:'Power, wheels, cameras, computers, heaters, and radios depend on one another. A strong wheel design cannot save a rover with an empty battery. Engineers draw connections between parts to predict how one change affects the whole mission.',fact:'Systems thinking asks what each part needs, provides, and could cause to fail.',visual:'system-flow'},
      {label:'Constraints',title:'Every route has a cost',text:'Soft sand makes wheels slip, steep slopes demand more power, and sharp rocks can damage tires. A longer path across firm ground may use less energy than a short path through dangerous terrain. Engineers compare tradeoffs rather than chasing one perfect number.',fact:'A constraint is a limit the design must respect; a tradeoff improves one goal while costing another.',visual:'tradeoff-board'},
      {label:'Autonomy',title:'The rover must think locally',text:'Because radio signals take time to travel, a rover cannot wait for Earth before every wheel turn. Onboard software recognizes hazards and stops, while people on Earth plan larger routes from images and maps.',fact:'Autonomy handles immediate danger; mission control chooses the long-term goal.',visual:'autonomy-split'},
      {label:'Test and revise',title:'Failure in a test is useful data',text:'Engineers test rover wheels in soil chambers and drive prototypes over rocks. When a design slips or breaks, the result exposes a weak assumption while changes are still possible. The cycle is define, build, test, learn, and improve.',fact:'Engineering success is rarely the first design. It is a tested design with understood limits.',visual:'revise-cycle'}
    ]
  },
  {
    id:'science', subject:'Science', orbit:'Orbit 2 · Spectrum ring', short:'SC', color:'#ff9d72', deep:'#713727', soft:'rgba(255,157,114,.14)', ringed:false,
    surface:'radial-gradient(circle at 70% 25%,#ffd09b 0 7%,transparent 8%),radial-gradient(circle at 35% 68%,#663521 0 12%,transparent 13%),linear-gradient(140deg,#ee8b52,#793448)',
    title:'Read the fingerprints hidden in starlight.', summary:'Use a spectrometer to locate absorption lines and identify elements in a star’s atmosphere.', complete:'You read dark gaps in a rainbow as chemical evidence from a star far beyond reach.',
    lessons:[
      {label:'Spectra',title:'Spread light into a spectrum',text:'A prism or diffraction grating separates light by wavelength. Visible light runs from shorter violet wavelengths to longer red wavelengths. Instead of seeing one white point, astronomers see a band that can hold clues about temperature and composition.',fact:'Wavelength is the distance between repeating points in a wave, often measured in nanometers for visible light.',visual:'spectrum-probe'},
      {label:'Absorption',title:'Atoms leave wavelength fingerprints',text:'Electrons in an atom can occupy only specific energy levels. When light passes through cooler gas, an electron absorbs a photon only if that photon carries exactly the energy needed to jump between two levels. Because photon energy and wavelength are linked by E = hc/λ, each allowed jump removes one precise wavelength and makes a dark absorption line. Hydrogen, sodium, and every other element have different level spacings, so each produces a repeatable multi-line pattern measured in laboratories.',fact:'One line is a clue; several lines at the correct wavelengths form a fingerprint strong enough to identify an element.',visual:'line-match'},
      {label:'Evidence at distance',title:'Light brings the sample to us',text:'We cannot scoop gas from a distant star, but its light crosses space carrying information. Spectroscopy can reveal chemical composition, temperature, motion toward or away from us, and even gases in an exoplanet atmosphere.',fact:'Science often uses indirect evidence: measure an effect, test a model, and compare predictions.',visual:'light-path'},
      {label:'Uncertainty',title:'Measurements have a tolerance',text:'A spectral line may be slightly wider or shifted because an object is moving, an instrument has limited resolution, or several lines overlap. Scientists record uncertainty instead of pretending a measurement is exact.',fact:'A result can be useful without being perfectly exact—as long as its uncertainty is known.',visual:'tolerance-band'}
    ]
  },
  {
    id:'math', subject:'Math', orbit:'Orbit 1 · Inner path', short:'MA', color:'#68ddff', deep:'#1b5375', soft:'rgba(104,221,255,.14)', ringed:true, ring:'#9aeaff',
    surface:'repeating-linear-gradient(18deg,transparent 0 13px,rgba(255,255,255,.18) 14px 17px),linear-gradient(140deg,#3fd1e7,#2454a0)',
    title:'Shape an orbit with numbers.', summary:'Balance speed and timing to place a probe into the target orbit instead of falling inward or escaping outward.', complete:'You used a mathematical model to turn velocity and phase into a stable rendezvous orbit.',
    lessons:[
      {label:'Gravity & motion',title:'Orbital speed comes from radius',text:'Gravity supplies the inward acceleration that bends a circular path. Setting gravitational acceleration equal to circular acceleration gives μ/r² = v²/r, so circular speed is v = √(μ/r). Here μ is the planet’s gravitational parameter and r is distance from its center. A larger orbital radius therefore needs a lower circular speed.',fact:'Around Earth, μ ≈ 398,600 km³/s². At r = 6,800 km, circular speed is about 7.66 km/s.',visual:'fall-orbit'},
      {label:'Speed changes shape',title:'A burn changes orbital energy',text:'A burn changes velocity by Δv = vafter − vbefore. The vis-viva equation, v² = μ(2/r − 1/a), connects speed v at radius r to the orbit’s semi-major axis a. A prograde burn increases speed and raises the opposite side of the ellipse; a retrograde burn lowers it.',fact:'Mission planners calculate the required Δv first, then choose the burn direction and duration that produce it.',visual:'burn-ellipse'},
      {label:'Timing',title:'The target keeps moving',text:'A spacecraft must arrive where a planet or station will be, not where it was at launch. Mission planners use angular position, called phase angle, to choose the departure time. Geometry turns two moving paths into one meeting point.',fact:'Rendezvous means matching place, time, direction, and speed.',visual:'phase-meet'},
      {label:'Models',title:'A model is a useful simplification',text:'Real missions account for many gravitational pulls and tiny forces. A classroom model may focus on the strongest gravity and two variables. It cannot predict everything, but it can reveal how a change in speed or timing changes the outcome.',fact:'Mathematics connects a measurable input to a predicted result that can be tested.',visual:'model-table'}
    ]
  }
];

const KEY='space-everyone-journey-v6';
let state=loadState();
let activeIndex=Math.min(state.completed.length,WORLDS.length-1);
let lessonIndex=activeIndex;
let lessonStep=0;
let lessonReview=false;
let traveling=false;
const $=s=>document.querySelector(s);
const lessonDialog=$('#lesson-dialog');

function loadState(){try{const saved=JSON.parse(localStorage.getItem(KEY));if(saved&&Array.isArray(saved.completed))return saved}catch{}return{completed:[],dates:{},resume:{}}}
function saveState(){localStorage.setItem(KEY,JSON.stringify(state))}
function createStars(){let seed=7331;const random=()=>((seed=Math.imul(seed,1664525)+1013904223>>>0)/4294967296);$('#star-layer').innerHTML=Array.from({length:120},(_,i)=>`<i class="star ${i%17===0?'large':''}" style="left:${(random()*100).toFixed(2)}%;top:${(random()*100).toFixed(2)}%;--speed:${(2.2+random()*4).toFixed(2)}s;--delay:${(-random()*5).toFixed(2)}s;--opacity:${(.35+random()*.6).toFixed(2)}"></i>`).join('')}
function setTheme(w){document.documentElement.style.setProperty('--theme',w.color);document.documentElement.style.setProperty('--theme-deep',w.deep);document.documentElement.style.setProperty('--theme-soft',w.soft)}
function planetStyle(w){return `--planet-surface:${w.surface};--planet-glow:${w.color}66;--ring:${w.ring||w.color}`}
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
  activeIndex=Math.min(done,WORLDS.length-1);
  const world=WORLDS[activeIndex];
  setTheme(world);
  const stage=$('#space-stage');
  // Keep the focused planet near the bottom; grow the outer system without lifting the focus world toward the sun
  stage.style.setProperty('--zoom', (1+activeIndex*0.27).toFixed(3));
  stage.style.setProperty('--progress', String(activeIndex));
  document.querySelectorAll('.orbit-plane').forEach((orbit,i)=>{
    const discarded=i<done;
    orbit.classList.toggle('departed', discarded);
    orbit.hidden=discarded;
    orbit.style.display=discarded?'none':'block';
    orbit.setAttribute('aria-hidden','true');
    orbit.classList.toggle('outermost-visible', i===5);
    orbit.classList.add('geometry-set');
    orbit.style.removeProperty('top');
    orbit.style.removeProperty('height');
    orbit.innerHTML='';
  });
  $('#orbit-kicker').textContent=`${world.orbit} · World ${activeIndex+1} of 6`;
  const field=$('#planet-field');
  field.innerHTML=`<button class="stage-planet is-current can-enter" data-index="${activeIndex}" aria-label="Enter ${world.subject}" style="${planetStyle(world)}">${planetMarkup(world)}<span class="planet-caption"><strong>${world.subject}</strong><small>Select to enter</small></span></button>`;
  field.querySelector('.is-current')?.addEventListener('click',()=>openLesson(activeIndex,false));
  requestAnimationFrame(layoutOrbitGeometry);

  // Locked future worlds stay on their own orbit rings
  for(let i=activeIndex+1;i<WORLDS.length;i++){
    const depth=i-activeIndex;
    const planeIdx=5-depth;
    const plane=document.querySelector(`.orbit-plane[data-plane="${planeIdx}"]`);
    if(!plane) continue;
    const w=WORLDS[i];
    const side=depth%2===1?'side-left':'side-right';
    const btn=document.createElement('button');
    btn.className=`orbit-planet ${side} depth-${Math.min(depth,5)}`;
    btn.disabled=true;
    btn.dataset.index=String(i);
    btn.setAttribute('aria-label',`${w.subject}, locked inner orbit`);
    btn.style.cssText=planetStyle(w);
    btn.innerHTML=`${planetMarkup(w)}<span class="orbit-planet-label">${w.subject}</span>`;
    plane.appendChild(btn);
  }

  $('#stage-instruction').hidden=true;
  const launch=$('#launch-button');
  launch.innerHTML='<span>Enter this world</span><small>About 4 minutes</small>';
  launch.onclick=()=>openLesson(activeIndex,false);
  $('#route-list').innerHTML=WORLDS.map((w,i)=>`<li class="route-item ${i<done?'complete':i===activeIndex?'current':'locked'}" data-index="${i}"><span class="route-index">0${i+1}</span><strong>${w.subject}</strong><small>${i<done?'Passed':i===activeIndex?'Current':'Locked'}</small></li>`).join('');
  $('#route-list').querySelectorAll('.route-item.complete').forEach(item=>{
    item.classList.add('can-open');
    item.addEventListener('click',()=>openLesson(Number(item.dataset.index),true));
  });
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
    el.addEventListener('click',()=>openLesson(Number(el.dataset.index),true));
  });
}

function openLesson(index=activeIndex, review=false){
  const done=state.completed.length;
  const completed=state.completed.includes(WORLDS[index].id);
  const isCurrent=index===Math.min(done,WORLDS.length-1) && done<WORLDS.length;
  if(!review && !isCurrent) return;
  if(review && !completed && done<WORLDS.length) return;
  lessonIndex=index;
  lessonReview=!!review || completed;
  const w=WORLDS[lessonIndex];
  setTheme(w);
  lessonStep=lessonReview?0:(state.resume?.[w.id]||0);
  $('#lesson-title').textContent=w.subject;
  $('#lesson-orbit').textContent=lessonReview?`${w.orbit} · Review`:`${w.orbit}`;
  $('#lesson-footer-note').textContent=lessonReview?'Review mode · move freely through the lesson':'Explore each idea before attempting the mission.';
  lessonDialog.showModal();
  renderLesson();
}

function renderLesson(){
  const w=WORLDS[lessonIndex],lessonCount=w.lessons.length,total=lessonCount+2;
  $('#lesson-progress-fill').style.width=`${(lessonStep+1)/total*100}%`;
  $('#lesson-steps').innerHTML=[...w.lessons.map(s=>s.label),'Field mission','Orbit passed'].map((name,i)=>`<button type="button" class="step-pill ${i===lessonStep?'active':i<lessonStep||lessonReview?'done':''}" data-step="${i}">${i+1}. ${name}</button>`).join('');
  if(lessonReview){
    $('#lesson-steps').querySelectorAll('.step-pill').forEach(pill=>pill.addEventListener('click',()=>{lessonStep=Number(pill.dataset.step);renderLesson()}));
  }
  $('#lesson-back').style.visibility=lessonStep===0?'hidden':'visible';
  const onActivity=lessonStep===lessonCount;
  const onComplete=lessonStep===total-1;
  $('#lesson-next').style.display=onActivity||onComplete?'none':'block';
  $('#lesson-next').disabled=!lessonReview;
  if(lessonStep<lessonCount) renderConcept(w,w.lessons[lessonStep]);
  else if(lessonStep===lessonCount){
    if(lessonReview){
      $('#lesson-stage').innerHTML=`<article class="activity-page"><div class="activity-heading"><div><span class="mission-badge">Field mission</span><h3>${activityTitle(w.id)}</h3></div><p>Optional practice. You can skip this during review.</p></div><div class="activity-workspace" id="activity-workspace"></div><div class="step-nav" style="margin-top:16px"><button class="continue-button" id="skip-activity">Continue</button></div></article>`;
      activityRenderers[w.id]();
      $('#skip-activity').onclick=()=>{lessonStep++;renderLesson()};
    } else renderActivity(w);
  } else renderCompletion(w);
  if(!lessonReview){state.resume[w.id]=lessonStep;saveState()}
  $('#lesson-stage').scrollTop=0;
}

function renderConcept(w,step){
  $('#lesson-next').disabled=!lessonReview;
  $('#lesson-stage').innerHTML=`<article class="lesson-page"><div class="lesson-copy"><span class="mission-badge">Concept ${lessonStep+1} of ${w.lessons.length}</span><h3>${step.title}</h3><p>${step.text}</p><p class="big-fact">${step.fact}</p></div><div class="lesson-visual"><span class="visual-label">Field note</span>${visualHTML(step)}</div></article>`;
  if(step.visual!=='autonomy-split') document.querySelectorAll('.lesson-check').forEach(el=>{el.textContent='';el.className='sr-only';el.setAttribute('aria-live','polite')});
  bindConceptVisual(step);
  if(lessonReview) $('#lesson-next').disabled=false;
}

function visualHTML(step){
  const v=step.visual;
  if(v==='source-sort') return `<p class="note-prompt">Drag each item into Primary or Secondary. A short explanation appears after a correct drop.</p><div class="sort-bins"><div class="sort-bin" data-bin="primary"><h4>Primary source</h4><div class="bin-drop" data-accept="primary"></div></div><div class="sort-bin" data-bin="secondary"><h4>Secondary source</h4><div class="bin-drop" data-accept="secondary"></div></div></div><div class="sort-bank" id="source-bank"><button type="button" class="sort-chip" draggable="true" data-kind="primary" data-why="Spoken and written during the event itself.">Flight transcript</button><button type="button" class="sort-chip" draggable="true" data-kind="primary" data-why="Physical hardware that experienced the flight.">Heat-shield fragment</button><button type="button" class="sort-chip" draggable="true" data-kind="primary" data-why="An image made at the time of the mission.">Crew photograph</button><button type="button" class="sort-chip" draggable="true" data-kind="secondary" data-why="Written later to explain events the author did not record live.">Textbook chapter</button></div><p class="reveal-panel" id="source-why">Drop a card on a bin to learn why it belongs there.</p><p class="lesson-check" id="field-note">Classify all four sources to continue.</p>`;
  if(v==='inherit-panels') return `<p class="note-prompt">Open each chapter in the knowledge chain. Each panel adds how later teams reuse earlier work.</p><div class="accordion" id="inherit-acc"><details><summary>1 · Observe</summary><p>Apollo crews placed laser reflectors on the Moon and logged their locations. The hardware and the notes both became part of the historical record.</p></details><details><summary>2 · Interpret</summary><p>Later scientists bounce laser light off those same reflectors to measure the Earth–Moon distance and how it changes over time.</p></details><details><summary>3 · Apply</summary><p>New missions study older rover tracks and failed approaches so they can choose safer slopes and firmer ground.</p></details></div><p class="lesson-check" id="field-note">Open every panel to see the full observe → interpret → apply loop.</p>`;
  if(v==='crew-network') return `<p class="note-prompt">Connect each ISS role to the job it protects. Correct pairs stay linked and open a short note.</p><div class="pair-board"><div class="pair-col" id="pair-left">${[['ctrl','Flight controllers'],['med','Crew medical officers'],['lang','Translators & schedule leads'],['fix','Supply & repair teams']].map(([id,label])=>`<button class="pair-item" data-pair="${id}">${label}</button>`).join('')}</div><div class="pair-col" id="pair-right">${[['lang','Keep partner agencies coordinated across languages'],['ctrl','Watch systems and call anomalies in real time'],['fix','Keep spare parts and cargo moving to the station'],['med','Track astronaut health before problems grow']].map(([id,label])=>`<button class="pair-item" data-pair="${id}">${label}</button>`).join('')}</div></div><p class="reveal-panel" id="pair-note">Select one role, then its matching responsibility.</p><p class="lesson-check" id="field-note">Link all four pairs to continue.</p>`;
  if(v==='triage-board') return `<p class="note-prompt">A dust alert just arrived. Drag each statement into Evidence, Guess, or Needed action.</p><div class="triage-grid"><div class="triage-col" data-bucket="evidence"><h4>Evidence</h4><div class="bin-drop" data-accept="evidence"></div></div><div class="triage-col" data-bucket="guess"><h4>Guess</h4><div class="bin-drop" data-accept="guess"></div></div><div class="triage-col" data-bucket="action"><h4>Needed action</h4><div class="bin-drop" data-accept="action"></div></div></div><div class="sort-bank" id="triage-bank"><button type="button" class="sort-chip" draggable="true" data-bucket="evidence">Battery fell from 62% to 41% in 40 minutes</button><button type="button" class="sort-chip" draggable="true" data-bucket="guess">The storm will definitely end tomorrow</button><button type="button" class="sort-chip" draggable="true" data-bucket="action">Assign the electrician to inspect the solar cable</button><button type="button" class="sort-chip" draggable="true" data-bucket="evidence">Camera still shows the ridge route is clear</button><button type="button" class="sort-chip" draggable="true" data-bucket="guess">Someone probably left a hatch open</button><button type="button" class="sort-chip" draggable="true" data-bucket="action">Have the navigator map a backup shelter path</button></div><p class="lesson-check" id="field-note">Sort every card into the correct column.</p>`;
  if(v==='audience-switch') return `<p class="note-prompt">Choose an audience. The sample message rewrites itself to show which details that reader needs.</p><div class="chip-row">${[['engineering','Power engineers'],['geology','Geologists'],['public','Museum visitors']].map(([id,label],i)=>`<button class="choice-chip ${i?'':'selected'}" data-aud="${id}">${label}</button>`).join('')}</div><div class="sample-message" id="aud-sample"></div><p class="lesson-check" id="field-note">Compare all three audiences, then continue.</p>`;
  if(v==='precision-rewrite') return `<p class="note-prompt">Tap each vague phrase to swap in a precise replacement from the telemetry.</p><div class="rewrite-card" id="rewrite-card"><p>On <button class="blank-chip" data-fill="Sol 18">a day</button>, the rover had <button class="blank-chip" data-fill="battery charge fell from 62% to 41%">a bad time</button> during <button class="blank-chip" data-fill="the dust storm">weather</button>.</p></div><p class="reveal-panel" id="rewrite-out">Vague draft ready for upgrades.</p><p class="lesson-check" id="field-note">Replace all three vague spots.</p>`;
  if(v==='sequence-build') return `<p class="note-prompt">Place the sentences into Context → Observation → Response.</p><div class="seq-slots"><div class="seq-slot" data-need="1"><span>1 · Context</span></div><div class="seq-slot" data-need="2"><span>2 · Observation</span></div><div class="seq-slot" data-need="3"><span>3 · Response</span></div></div><div class="sort-bank" id="seq-bank"><button class="sort-chip" data-need="2">Battery charge fell from 62% to 41%.</button><button class="sort-chip" data-need="1">On Sol 18 at 14:05 on ridge route B…</button><button class="sort-chip" data-need="3">Recommend pausing the climb until power recovers.</button></div><p class="lesson-check" id="field-note">Fill the three slots in order.</p>`;
  if(v==='delay-checklist') return `<p class="note-prompt">Signal delay is 8 minutes one way. Check every item a first message must carry because no instant follow-up is possible.</p><div class="check-list">${[['time','Exact sol / time of the event'],['measure','A measured change, not only a feeling'],['cause','Likely cause supported by data'],['ask','A clear recommendation or request'],['extra','A poem about the sunset']].map(([id,label])=>`<label class="check-row"><input type="checkbox" data-need="${id==='extra'?'no':'yes'}" data-id="${id}"><span>${label}</span></label>`).join('')}</div><p class="lesson-check" id="field-note">Select the required items and leave out the decoration.</p>`;
  if(v==='wave-strip') return `<p class="note-prompt">Drag the white needle across the spectrum. Each band explains what that wavelength often reveals.</p><div class="wave-strip direct-wave" id="wave-strip" role="slider" aria-label="Light wavelength" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" tabindex="0"><span class="wave-needle" id="wave-needle"></span></div><output id="wave-out">Infrared · cooler dust</output><p class="lesson-check" id="field-note">Visit infrared, visible, and ultraviolet regions.</p>`;
  if(v==='channel-preview') return `<p class="note-prompt">Assign each data channel a display color. The tiny preview updates as a living key.</p><div class="mini-nebula" id="mini-nebula"></div><label class="mapping-row">Infrared<select data-ch="ir"><option value="">Color…</option><option value="red">Red</option><option value="green">Green</option><option value="blue">Blue</option></select></label><label class="mapping-row">Visible<select data-ch="vis"><option value="">Color…</option><option value="red">Red</option><option value="green">Green</option><option value="blue">Blue</option></select></label><label class="mapping-row">Ultraviolet<select data-ch="uv"><option value="">Color…</option><option value="red">Red</option><option value="green">Green</option><option value="blue">Blue</option></select></label><p class="lesson-check" id="field-note">Give every channel a unique color to continue.</p>`;
  if(v==='contrast-nebula') return `<p class="note-prompt">Raise contrast to pull faint dust out of the background while keeping bright stars readable.</p><div class="soft-nebula" id="soft-nebula"></div><label>Contrast <input id="soft-contrast" type="range" min="10" max="90" value="25"><output id="soft-out">25</output></label><p class="reveal-panel" id="soft-note">At low contrast the dust stays hidden.</p><p class="lesson-check" id="field-note">Move contrast through low, middle, and high settings.</p>`;
  if(v==='caption-builder') return `<p class="note-prompt">Build a scientific caption from the three required parts.</p><div class="caption-parts">${[['obj','Object: Eagle Nebula dust lanes'],['src','Source: infrared + ultraviolet channels'],['key','Key: red = cooler dust, blue = hot stars']].map(([id,label])=>`<button class="choice-chip" data-cap="${id}">${label}</button>`).join('')}</div><div class="sample-message" id="caption-live">Caption preview appears here.</div><p class="lesson-check" id="field-note">Add all three parts to the caption.</p>`;
  if(v==='system-flow') return `<p class="note-prompt">Tap parts in energy order: collect → store → decide → move.</p><div class="flow-track" id="flow-track">${[['1','Solar array','Collects energy'],['2','Battery','Stores energy'],['3','Computer','Decides use'],['4','Motors','Creates motion']].map(([n,t,d])=>`<button class="flow-node" data-step="${n}"><strong>${t}</strong><small>${d}</small></button>`).join('')}</div><p class="lesson-check" id="field-note">Light the path in the correct systems order.</p>`;
  if(v==='tradeoff-board') return `<p class="note-prompt">Compare two routes. Choose the engineering tradeoff that keeps the rover safer with enough energy.</p><div class="trade-cards"><button class="trade-card" data-ok="no"><strong>Short cut through soft sand</strong><small>Distance 4 · Energy cost high · Slip risk high</small></button><button class="trade-card" data-ok="yes"><strong>Longer firm-rock arc</strong><small>Distance 6 · Energy cost moderate · Slip risk low</small></button></div><p class="reveal-panel" id="trade-note">Which constraint matters more than raw distance?</p><p class="lesson-check" id="field-note">Select the route that respects energy and hazard constraints.</p>`;
  if(v==='autonomy-split') return `<p class="note-prompt">Radio delay means Earth cannot steer every second. For each situation, choose who should act: the rover’s onboard software right now, or people on Earth after the signal arrives.</p><div class="split-list">${[['rover','A sharp rock suddenly appears 40 cm ahead while driving'],['earth','Pick tomorrow’s science target from orbital maps'],['rover','Wheel motors spike on a steep sandy slope'],['earth','Plan the week-long traverse toward the ridge']].map(([who,text],i)=>`<div class="split-row" data-who="${who}" data-i="${i}"><span>${text}</span><div class="chip-row"><button class="choice-chip" data-pick="rover">Rover software now</button><button class="choice-chip" data-pick="earth">Earth team later</button></div></div>`).join('')}</div><p class="lesson-check" id="field-note">Match every situation to the right decision-maker.</p>`;
  if(v==='revise-cycle') return `<p class="note-prompt">Walk the engineering cycle. Open each stage to see what evidence it produces.</p><div class="accordion" id="revise-acc"><details><summary>Define</summary><p>Requirement: climb a 15° sandy slope without digging in.</p></details><details><summary>Build</summary><p>Prototype wheel with deeper cleats and a wider face.</p></details><details><summary>Test</summary><p>Soil-chamber run shows 30% less slip than the old wheel.</p></details><details><summary>Learn & improve</summary><p>Keep the cleats; lighten the rim so mass stays inside budget.</p></details></div><p class="lesson-check" id="field-note">Open every stage of the cycle.</p>`;
  if(v==='spectrum-probe') return `<p class="note-prompt">Drag the white needle along the rainbow. Read the wavelength and what that region typically tells astronomers.</p><div class="spectrum-view short direct-wave" id="spectrum-probe" role="slider" aria-label="Visible spectrum wavelength" aria-valuemin="400" aria-valuemax="700" aria-valuenow="450" tabindex="0"><span class="wave-needle" id="spec-scan"></span></div><output id="spec-out">450 nm · blue-violet</output><p class="lesson-check" id="field-note">Visit the blue, green-yellow, and red ends of the band.</p>`;
  if(v==='line-match') return `<p class="note-prompt">Match each dark line’s wavelength to the element known for that fingerprint.</p><div class="pair-board"><div class="pair-col">${[['486','Line near 486 nm'],['589','Line near 589 nm'],['656','Line near 656 nm']].map(([id,label])=>`<button class="pair-item" data-pair="${id}">${label}</button>`).join('')}</div><div class="pair-col">${[['589','Sodium'],['656','Hydrogen α'],['486','Hydrogen β']].map(([id,label])=>`<button class="pair-item" data-pair="${id}">${label}</button>`).join('')}</div></div><p class="reveal-panel" id="line-note">Pair wavelength to element.</p><p class="lesson-check" id="field-note">Match all three fingerprints.</p>`;
  if(v==='light-path') return `<p class="note-prompt">Follow the light. Open each stop on the journey from star to scientist.</p><div class="accordion" id="light-acc"><details><summary>1 · Star atmosphere</summary><p>Atoms absorb narrow slices of the continuous light, carving dark lines into the spectrum.</p></details><details><summary>2 · Crossing space</summary><p>The patterned light travels for years, carrying composition clues without bringing the gas itself.</p></details><details><summary>3 · Telescope & spectrograph</summary><p>Earth instruments spread the light and record where the dark lines sit.</p></details><details><summary>4 · Comparison</summary><p>Scientists compare the pattern with lab spectra to identify elements.</p></details></div><p class="lesson-check" id="field-note">Open the full light path.</p>`;
  if(v==='tolerance-band') return `<p class="note-prompt">Center the measured line, then widen the uncertainty band until it covers the known lab value at 656 nm.</p><div class="tolerance-view"><span class="lab-mark" style="left:85.3%"></span><span class="measure-mark" id="measure-mark"></span><span class="error-band" id="error-band"></span></div><label>Measured center <input id="meas-center" type="range" min="640" max="670" value="652"><output id="meas-out">652 nm</output></label><label>Uncertainty ± <input id="meas-err" type="range" min="1" max="12" value="2"><output id="err-out">2 nm</output></label><p class="lesson-check" id="field-note">Cover 656 nm with an honest uncertainty range.</p>`;
  if(v==='fall-orbit') return `<p class="note-prompt">Choose an orbital radius. The calculator substitutes it into v = √(μ/r) using Earth’s μ = 398,600 km³/s².</p><div class="equation-card"><strong>v = √(μ/r)</strong><span id="orbit-equation">v = √(398,600 / 6,800)</span><output id="orbit-speed-output">7.66 km/s</output></div><div class="radius-model"><span class="radius-earth"></span><span class="radius-ring" id="radius-ring"><i></i></span></div><div class="chip-row">${[[6800,'Low orbit'],[12000,'Medium orbit'],[42164,'Geosynchronous']].map(([r,label])=>`<button class="choice-chip radius-choice" data-radius="${r}">${label}<small>${Number(r).toLocaleString()} km</small></button>`).join('')}</div><p class="lesson-check" id="field-note">Compare all three radii.</p>`;
  if(v==='burn-ellipse') return `<p class="note-prompt">Compare a retrograde and prograde burn at the same point. The sign of Δv predicts whether the far side falls or rises.</p><div class="equation-card compact"><strong>Δv = vafter − vbefore</strong><span id="burn-equation">Δv = 7.7 − 7.7 = 0.0 km/s</span></div><div class="ellipse-stage"><span class="ellipse-path" id="ellipse-path"><span class="burn-dot"></span></span></div><div class="burn-choices"><button class="choice-chip" data-burn="-.6">Retrograde −0.6 km/s</button><button class="choice-chip" data-burn="0">Coast 0.0 km/s</button><button class="choice-chip" data-burn=".6">Prograde +0.6 km/s</button></div><p class="lesson-check" id="field-note">Compare a negative and positive Δv.</p>`;
  if(v==='phase-meet') return `<p class="note-prompt">The station keeps moving. Drag the phase angle until your launch ray and the station ray land on the same point.</p><div class="phase-stage"><svg class="phase-svg" viewBox="0 0 200 200" aria-hidden="true"><circle class="phase-orbit-ring" cx="100" cy="100" r="72"/><line class="phase-ray station" id="station-ray" x1="100" y1="100" x2="172" y2="100"/><line class="phase-ray probe" id="probe-ray" x1="100" y1="100" x2="149" y2="152"/><circle class="phase-dot station" id="station-mark" cx="172" cy="100" r="6"/><circle class="phase-dot probe" id="probe-mark" cx="149" cy="152" r="6"/><circle class="phase-hub" cx="100" cy="100" r="4"/></svg></div><label>Phase angle <input id="phase-range" type="range" min="10" max="80" value="20"><output id="phase-out">20°</output></label><p class="lesson-check" id="field-note">Find the meeting window near 47°.</p>`;
  if(v==='model-table') return `<p class="note-prompt">Fill the model table: which piece is input, rule, prediction, or test?</p><div class="model-grid">${[['input','Velocity and phase angle values'],['rule','Equations linking those values to ellipse size'],['prediction','“Probe should match the dashed orbit”'],['test','Run the simulation and compare paths']].map(([id,text])=>`<label class="model-row"><span>${text}</span><select data-model="${id}"><option value="">Classify…</option><option value="input">Input</option><option value="rule">Model rule</option><option value="prediction">Prediction</option><option value="test">Test</option></select></label>`).join('')}</div><p class="lesson-check" id="field-note">Classify every row correctly.</p>`;
  return `<p class="lesson-check" id="field-note">Continue when ready.</p>`;
}

function bindConceptVisual(step){
  const next=$('#lesson-next'), note=$('#field-note'), v=step.visual;
  const done=()=>{next.disabled=false};

  if(v==='source-sort'){
    const why=$('#source-why'); let placed=0; let dragKind=null;
    const place=(chip,accept)=>{
      if(chip.dataset.locked) return;
      if(chip.dataset.kind!==accept){note.textContent='Not quite. Ask: was this made during the event, or later to explain it?';return}
      const bin=document.querySelector(`.bin-drop[data-accept="${accept}"]`);
      chip.dataset.locked='1'; chip.draggable=false; chip.disabled=true; bin.append(chip);
      why.innerHTML=`<strong>${chip.textContent}</strong> — ${chip.dataset.why}`;
      placed++; note.innerHTML=placed===4?'<strong>Source set ready.</strong> You can tell evidence from later explanation.':'Keep sorting. Each correct drop opens a short explanation.';
      if(placed===4) done();
    };
    $('#source-bank').querySelectorAll('.sort-chip').forEach(chip=>{
      chip.addEventListener('dragstart',e=>{dragKind=chip; chip.classList.add('dragging'); e.dataTransfer.setData('text/plain',chip.dataset.kind); e.dataTransfer.effectAllowed='move'});
      chip.addEventListener('dragend',()=>chip.classList.remove('dragging'));
    });
    document.querySelectorAll('.bin-drop').forEach(drop=>{
      drop.addEventListener('dragover',e=>{e.preventDefault(); drop.classList.add('drag-over')});
      drop.addEventListener('dragleave',()=>drop.classList.remove('drag-over'));
      drop.addEventListener('drop',e=>{
        e.preventDefault(); drop.classList.remove('drag-over');
        const chip=dragKind||document.querySelector('.sort-chip.dragging');
        if(chip) place(chip, drop.dataset.accept);
        dragKind=null;
      });
    });
    return;
  }

  if(v==='inherit-panels'||v==='revise-cycle'||v==='light-path'){
    const root=document.querySelector('.accordion'); const items=[...root.querySelectorAll('details')]; const seen=new Set();
    items.forEach((d,i)=>d.addEventListener('toggle',()=>{if(d.open){seen.add(i); note.innerHTML=`<strong>${seen.size} of ${items.length} opened.</strong> Read the new detail before moving on.`; if(seen.size===items.length){note.innerHTML='<strong>Sequence complete.</strong> You can follow the full chain now.'; done();}}}));
    return;
  }

  if(v==='crew-network'||v==='line-match'){
    let selected=null; const matched=new Set(); const noteEl=$('#pair-note')||$('#line-note');
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
          if(matched.size===expected){note.innerHTML='<strong>Connections complete.</strong> Each idea now sits with its matching detail.'; done()}
        }else{
          selected.classList.remove('selected'); selected=btn; btn.classList.add('selected'); noteEl.textContent='Those do not match. Try another pairing.';
        }
      };
    });
    return;
  }

  if(v==='triage-board'){
    let placed=0; const total=6; let dragChip=null;
    const place=(chip,accept)=>{
      if(chip.dataset.locked) return;
      if(chip.dataset.bucket!==accept){note.textContent='Re-read the statement. Is it measured, assumed, or a next step?';return}
      const bin=document.querySelector(`.bin-drop[data-accept="${accept}"]`);
      chip.dataset.locked='1'; chip.draggable=false; chip.disabled=true; bin.append(chip);
      placed++; note.textContent=`Placed in ${accept}. ${placed} of ${total} sorted.`;
      if(placed===total){note.innerHTML='<strong>Triage complete.</strong> Facts, guesses, and actions are separated.'; done()}
    };
    $('#triage-bank').querySelectorAll('.sort-chip').forEach(chip=>{
      chip.addEventListener('dragstart',e=>{dragChip=chip; chip.classList.add('dragging'); e.dataTransfer.setData('text/plain',chip.dataset.bucket); e.dataTransfer.effectAllowed='move'});
      chip.addEventListener('dragend',()=>chip.classList.remove('dragging'));
    });
    document.querySelectorAll('.triage-grid .bin-drop').forEach(drop=>{
      drop.addEventListener('dragover',e=>{e.preventDefault(); drop.classList.add('drag-over')});
      drop.addEventListener('dragleave',()=>drop.classList.remove('drag-over'));
      drop.addEventListener('drop',e=>{
        e.preventDefault(); drop.classList.remove('drag-over');
        const chip=dragChip||document.querySelector('#triage-bank .sort-chip.dragging');
        if(chip) place(chip, drop.dataset.accept);
        dragChip=null;
      });
    });
    return;
  }

  if(v==='audience-switch'){
    const sample=$('#aud-sample'); const seen=new Set(['engineering']);
    const copy={engineering:'Sol 18, 14:05: battery 62%→41% during dust storm on ridge B. Recommend delaying the climb and checking array output.',geology:'Sol 18 on ridge route B: dust storm reduced visibility; wheel telemetry still normal. Rock targets ahead remain unmarked until air clears.',public:'On Mars day 18, our rover waited out a dust storm so it could keep exploring safely. Power dipped, then the team paused the climb.'};
    sample.textContent=copy.engineering;
    document.querySelectorAll('[data-aud]').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('[data-aud]').forEach(x=>x.classList.remove('selected')); btn.classList.add('selected'); sample.textContent=copy[btn.dataset.aud]; seen.add(btn.dataset.aud); note.innerHTML=`<strong>${seen.size} of 3 audiences compared.</strong> Notice which numbers each reader needs.`; if(seen.size===3) done()});
    return;
  }

  if(v==='precision-rewrite'){
    let n=0;
    document.querySelectorAll('.blank-chip').forEach(btn=>btn.onclick=()=>{if(btn.dataset.done) return; btn.textContent=btn.dataset.fill; btn.dataset.done='1'; btn.classList.add('filled'); n++; $('#rewrite-out').textContent=n===3?'Precise version ready for transmission.':'Keep replacing vague words with measured detail.'; if(n===3){note.innerHTML='<strong>Precision upgraded.</strong> Time, measurement, and cause are now explicit.'; done()}});
    return;
  }

  if(v==='sequence-build'){
    let filled=0;
    $('#seq-bank').querySelectorAll('.sort-chip').forEach(chip=>{
      chip.onclick=()=>{
        const slot=document.querySelector(`.seq-slot[data-need="${chip.dataset.need}"]`);
        if(!slot||slot.dataset.full){note.textContent='That sentence belongs in a different slot.';return}
        slot.append(chip); slot.dataset.full='1'; chip.disabled=true; filled++;
        if(filled===3){note.innerHTML='<strong>Structure locked.</strong> Context, observation, response.'; done()}
      };
    });
    return;
  }

  if(v==='delay-checklist'){
    const box=()=>{const rows=[...document.querySelectorAll('.check-row input')]; const good=rows.filter(r=>r.dataset.need==='yes').every(r=>r.checked); const bad=rows.find(r=>r.dataset.need==='no').checked; if(good&&!bad){note.innerHTML='<strong>First-message kit ready.</strong> Evidence and a request, no fluff.'; done()} else {next.disabled=true; note.textContent='Include time, measurement, cause, and recommendation. Skip the decoration.';}};
    document.querySelectorAll('.check-row input').forEach(r=>r.addEventListener('change',box));
    return;
  }

  if(v==='wave-strip'){
    const seen=new Set(); const out=$('#wave-out'); const needle=$('#wave-needle'),strip=$('#wave-strip'); let value=20,dragging=false;
    const label=v=>{if(v<34)return['Infrared · cooler dust','ir']; if(v<67)return['Visible · ordinary color structure','vis']; return['Ultraviolet · hot, energetic stars','uv']};
    const paint=()=>{needle.style.left=`${value}%`;strip.setAttribute('aria-valuenow',value);const [text,key]=label(value);out.value=text;seen.add(key);note.textContent=`Visited: ${[...seen].join(', ')}`;if(seen.size===3){note.innerHTML='<strong>Wavelength tour complete.</strong>';done()}};
    const point=e=>{const rect=strip.getBoundingClientRect();value=Math.round(Math.max(0,Math.min(100,(e.clientX-rect.left)/rect.width*100)));paint()};
    strip.addEventListener('pointerdown',e=>{dragging=true;strip.setPointerCapture(e.pointerId);point(e)});strip.addEventListener('pointermove',e=>{if(dragging)point(e)});strip.addEventListener('pointerup',()=>dragging=false);strip.addEventListener('pointercancel',()=>dragging=false);strip.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();value=Math.max(0,Math.min(100,value+(e.key==='ArrowRight'?2:-2)));paint()}});paint();
    return;
  }

  if(v==='channel-preview'){
    const palette={red:'#ec4167',green:'#42d39a',blue:'#6295ff'}; const neb=$('#mini-nebula');
    const update=()=>{const vals=[...document.querySelectorAll('[data-ch]')].map(s=>s.value); neb.style.background=`radial-gradient(circle at 30% 40%,${palette[vals[0]]||'#333'},transparent 32%),radial-gradient(circle at 70% 55%,${palette[vals[1]]||'#333'},transparent 34%),radial-gradient(circle at 50% 70%,${palette[vals[2]]||'#333'},transparent 28%),#120916`; if(vals.every(Boolean)&&new Set(vals).size===3){note.innerHTML='<strong>Key established.</strong> Each channel has one display color.'; done()}};
    document.querySelectorAll('[data-ch]').forEach(s=>s.addEventListener('change',update)); update();
    return;
  }

  if(v==='contrast-nebula'){
    const host=$('#soft-nebula'); let seed=42; const rnd=()=>((seed=seed*16807%2147483647)/2147483647);
    host.innerHTML=`<div class="soft-clouds"></div>${Array.from({length:28},()=>`<i class="soft-star" style="left:${(8+rnd()*84).toFixed(1)}%;top:${(10+rnd()*75).toFixed(1)}%;width:${(1+rnd()*2.8).toFixed(1)}px;height:${(1+rnd()*2.8).toFixed(1)}px;opacity:${(.35+rnd()*.65).toFixed(2)}"></i>`).join('')}`;
    const seen=new Set();
    const paint=()=>{const c=Number($('#soft-contrast').value); $('#soft-out').value=c; host.style.setProperty('--c', (0.7+c/100).toFixed(2)); host.style.setProperty('--b', (0.55+c/160).toFixed(2)); $('#soft-note').textContent=c<35?'Dust is faint against the background.':c<70?'Filaments appear while hot stars stay distinct.':'Very high contrast clips some soft structure.'; seen.add(c<35?'low':c<70?'mid':'high'); if(seen.size===3){note.innerHTML='<strong>Contrast explored.</strong> You compared how visibility changes across settings.'; done()}};
    $('#soft-contrast').oninput=paint; paint();
    return;
  }

  if(v==='caption-builder'){
    const picked=[]; const live=$('#caption-live');
    document.querySelectorAll('[data-cap]').forEach(btn=>btn.onclick=()=>{if(btn.classList.contains('selected'))return; btn.classList.add('selected'); picked.push(btn.textContent); live.textContent=picked.join(' · '); if(picked.length===3){note.innerHTML='<strong>Caption complete.</strong> Object, source, and color key are present.'; done()}});
    return;
  }

  if(v==='system-flow'){
    let expect=1;
    document.querySelectorAll('.flow-node').forEach(btn=>btn.onclick=()=>{
      if(Number(btn.dataset.step)!==expect){note.textContent=`Next needed: step ${expect} in the energy path.`;return}
      btn.classList.add('lit'); expect++; note.textContent=expect<=4?`Good. Continue to step ${expect}.`:'';
      if(expect>4){note.innerHTML='<strong>System path complete.</strong> Collect → store → decide → move.'; done()}
    });
    return;
  }

  if(v==='tradeoff-board'){
    document.querySelectorAll('.trade-card').forEach(card=>card.onclick=()=>{
      document.querySelectorAll('.trade-card').forEach(c=>c.classList.remove('selected')); card.classList.add('selected');
      if(card.dataset.ok==='yes'){$('#trade-note').textContent='Firm ground costs distance but protects energy and wheels.'; note.innerHTML='<strong>Tradeoff chosen.</strong> Constraints beat the shortest line on the map.'; done()}
      else{$('#trade-note').textContent='Soft sand looks shorter, but slip can drain the battery.'; next.disabled=true; note.textContent='That route fights the constraints. Compare energy and hazard risk again.'}
    });
    return;
  }

  if(v==='autonomy-split'){
    const rows=[...document.querySelectorAll('.split-row')]; let ok=0;
    rows.forEach(row=>{
      row.querySelectorAll('[data-pick]').forEach(btn=>btn.onclick=()=>{
        row.querySelectorAll('[data-pick]').forEach(b=>b.classList.remove('selected')); btn.classList.add('selected');
        if(btn.dataset.pick===row.dataset.who){row.dataset.correct='1'; note.textContent='Right call. Instant hazards belong to the rover; long-range goals wait for Earth.'} else {row.dataset.correct='0'; note.textContent='If Earth must reply before anything happens, choose Earth. If waiting would crash the rover, choose the rover.'; next.disabled=true}
        ok=rows.filter(r=>r.dataset.correct==='1').length; if(ok===rows.length){note.innerHTML='<strong>Autonomy map clear.</strong> Local software for seconds; Earth for days.'; done()}
      });
    });
    return;
  }

  if(v==='spectrum-probe'){
    const seen=new Set(),strip=$('#spectrum-probe'),needle=$('#spec-scan');let value=450,dragging=false;
    const paint=()=>{needle.style.left=`${(value-400)/3}%`;strip.setAttribute('aria-valuenow',value);$('#spec-out').value=`${value} nm · ${value<480?'blue-violet':value<580?'green-yellow':'red'}`;seen.add(value<480?'b':value<580?'g':'r');if(seen.size===3){note.innerHTML='<strong>Spectrum surveyed.</strong>';done()}};
    const point=e=>{const rect=strip.getBoundingClientRect();value=Math.round(400+Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width))*300);paint()};
    strip.addEventListener('pointerdown',e=>{dragging=true;strip.setPointerCapture(e.pointerId);point(e)});strip.addEventListener('pointermove',e=>{if(dragging)point(e)});strip.addEventListener('pointerup',()=>dragging=false);strip.addEventListener('pointercancel',()=>dragging=false);strip.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();value=Math.max(400,Math.min(700,value+(e.key==='ArrowRight'?2:-2)));paint()}});paint();
    return;
  }

  if(v==='tolerance-band'){
    const paint=()=>{const c=Number($('#meas-center').value), err=Number($('#meas-err').value); $('#meas-out').value=`${c} nm`; $('#err-out').value=`${err} nm`; const left=((c-err-640)/30)*100, width=(err*2/30)*100; $('#measure-mark').style.left=`${((c-640)/30)*100}%`; $('#error-band').style.left=`${left}%`; $('#error-band').style.width=`${Math.max(width,2)}%`; if(c-err<=656 && c+err>=656 && err>=4){note.innerHTML='<strong>Honest uncertainty.</strong> The band covers the lab line without pretending to be exact.'; done()} else {next.disabled=true; note.textContent='Adjust center and uncertainty until 656 nm lies inside the band.'}};
    $('#meas-center').oninput=paint; $('#meas-err').oninput=paint; paint();
    return;
  }

  if(v==='fall-orbit'){
    const seen=new Set();
    document.querySelectorAll('[data-radius]').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('[data-radius]').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');const r=Number(btn.dataset.radius),speed=Math.sqrt(398600/r);$('#orbit-equation').textContent=`v = √(398,600 / ${r.toLocaleString()})`;$('#orbit-speed-output').value=`${speed.toFixed(2)} km/s`;$('#radius-ring').style.setProperty('--radius-size',`${62+Math.log10(r/6800+1)*58}px`);seen.add(r);if(seen.size===3){note.textContent='';done()}});
    return;
  }

  if(v==='burn-ellipse'){
    const seen=new Set();
    document.querySelectorAll('[data-burn]').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('[data-burn]').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');const dv=Number(btn.dataset.burn),after=7.7+dv;$('#burn-equation').textContent=`Δv = ${after.toFixed(1)} − 7.7 = ${dv>0?'+':''}${dv.toFixed(1)} km/s`;$('#ellipse-path').style.setProperty('--eh',`${34+dv*18}%`);$('#ellipse-path').style.setProperty('--ew',`${66+dv*24}%`);seen.add(Math.sign(dv));if(seen.has(-1)&&seen.has(1)){note.textContent='';done()}});
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
      if(Math.abs(p-target)<=2){note.innerHTML='<strong>Meeting window found.</strong> Both rays share the same point on the orbit.'; done()}
      else if(!lessonReview){next.disabled=true; note.textContent=`Keep adjusting until both rays meet at ${target}°.`}
    };
    $('#phase-range').oninput=paint; paint();
    return;
  }

  if(v==='model-table'){
    const rows=[...document.querySelectorAll('[data-model]')];
    const check=()=>{if(rows.every(r=>r.value===r.dataset.model)){note.innerHTML='<strong>Model parts identified.</strong>'; done()} else {next.disabled=true}};
    rows.forEach(r=>r.addEventListener('change',check));
    return;
  }

  done();
}

function renderActivity(w){
  $('#lesson-next').style.display='none';
  $('#lesson-stage').innerHTML=`<article class="activity-page"><div class="activity-heading"><div><span class="mission-badge">Field mission</span><h3>${activityTitle(w.id)}</h3></div><p>${activityPrompt(w.id)}</p></div><div class="activity-workspace" id="activity-workspace"></div></article>`;
  activityRenderers[w.id]();
}
function activityTitle(id){return{history:'Lead with the mission record',reading:'Transmit a useful rover log',art:'Compose a false-color nebula',engineering:'Route the rover to the relay ridge',science:'Scan a stellar spectrum',math:'Insert the probe into orbit'}[id]}
function activityPrompt(id){return{history:'Read three source cards from a lunar emergency, tag which ones are primary evidence, then assign crew jobs that fit that evidence.',reading:'Turn raw telemetry into a precise message for the engineering team on Earth.',art:'Map three invisible-light channels into a readable image, tune contrast, and write the scientific key.',engineering:'Choose adjacent terrain cells. Avoid hazards and reach the ridge before the battery runs out.',science:'Move the wavelength scanner to collect three absorption lines, then identify the matching elements.',math:'Adjust velocity and phase angle until the simulated path matches the dashed target orbit.'}[id]}
function feedback(message,error=false){const el=$('.activity-feedback');el.textContent=message;el.classList.toggle('error',error)}
function passActivity(){lessonStep=WORLDS[lessonIndex].lessons.length+1;renderLesson()}

const activityRenderers={
  history(){
    $('#activity-workspace').innerHTML=`<div class="history-mission"><section class="brief-card"><span class="visual-label">Emergency brief</span><p>A dust surge cut power at the lunar camp. Use the record below before you assign jobs.</p><div class="source-cards"><article class="source-card" data-id="t"><strong>Audio transcript · 19:42</strong><p>“Solar cable voltage dropped after the gust. Junction box B is warm to the touch.”</p><label>Source type <select class="theme-select" data-tag="primary"><option value="">Tag…</option><option value="primary">Primary</option><option value="secondary">Secondary</option></select></label></article><article class="source-card" data-id="p"><strong>Helmet-cam still · 19:44</strong><p>Image shows cable cover lifted and grit on the connector pins.</p><label>Source type <select class="theme-select" data-tag="primary"><option value="">Tag…</option><option value="primary">Primary</option><option value="secondary">Secondary</option></select></label></article><article class="source-card" data-id="b"><strong>Later news summary</strong><p>“Experts say lunar weather is mysterious and crews always panic.”</p><label>Source type <select class="theme-select" data-tag="secondary"><option value="">Tag…</option><option value="primary">Primary</option><option value="secondary">Secondary</option></select></label></article></div></section><section class="brief-card"><span class="visual-label">Crew assignment from evidence</span><div class="crew-selects"><label>Jordan · electrical systems<select class="theme-select" data-answer="repair"><option value="">Choose job</option><option value="route">Map shelter route</option><option value="report">Report to Earth</option><option value="repair">Repair solar cable</option></select></label><label>Sam · terrain navigation<select class="theme-select" data-answer="route"><option value="">Choose job</option><option value="route">Map shelter route</option><option value="report">Report to Earth</option><option value="repair">Repair solar cable</option></select></label><label>Ari · clear communicator<select class="theme-select" data-answer="report"><option value="">Choose job</option><option value="route">Map shelter route</option><option value="report">Report to Earth</option><option value="repair">Repair solar cable</option></select></label></div><p class="reveal-panel">Hint: the transcript and photo are primary evidence about the cable. The news summary is secondary and vague.</p><button class="pass-button" id="check-history">Submit evidence-based plan</button><p class="activity-feedback" role="status"></p></section></div>`;
    $('#check-history').onclick=()=>{
      const tags=[...document.querySelectorAll('.source-card select')].every(s=>s.value===s.dataset.tag);
      const roles=[...document.querySelectorAll('.crew-selects select')].every(s=>s.value&&s.value===s.dataset.answer);
      if(tags&&roles){feedback('Primary sources identified and every job matches demonstrated skill. Mission plan accepted.');setTimeout(passActivity,800)}
      else feedback('Use the record first: tag primary vs secondary correctly, then assign jobs that fit the evidence and each skill.',true);
    };
  },
  reading(){
    $('#activity-workspace').innerHTML=`<div class="comm-console"><div class="telemetry"><span class="visual-label">ROVER TELEMETRY · SOL 18</span><dl><dt>Event</dt><dd>Dust storm</dd><dt>Battery</dt><dd>62% → 41%</dd><dt>Location</dt><dd>Ridge route B</dd><dt>Mobility</dt><dd>Normal</dd></dl><label>Message audience<select class="channel-select" id="message-audience"><option value="">Choose team</option><option value="public">Museum visitors</option><option value="engineering">Power engineers</option><option value="catering">Food team</option></select></label></div><div><label for="mission-log">Write a 2–4 sentence mission log with context, evidence, and a recommendation.</label><textarea class="log-textarea" id="mission-log" placeholder="On Sol 18..."></textarea><div class="writing-checks"><span class="writing-check" data-check="sol">names the sol</span><span class="writing-check" data-check="dust">names the event</span><span class="writing-check" data-check="power">uses battery data</span><span class="writing-check" data-check="action">recommends an action</span><span class="writing-check" data-check="length">80+ characters</span></div><button class="pass-button" id="send-log" disabled>Transmit log</button><p class="activity-feedback" role="status"></p></div></div>`;
    const area=$('#mission-log'),aud=$('#message-audience'),send=$('#send-log');
    const update=()=>{const t=area.value.toLowerCase(),checks={sol:/sol\s*18/.test(t),dust:t.includes('dust'),power:t.includes('41%')||t.includes('battery'),action:/recommend|should|pause|wait|return|continue|route/.test(t),length:t.length>=80};Object.entries(checks).forEach(([k,v])=>$(`[data-check="${k}"]`).classList.toggle('met',v));send.disabled=!(Object.values(checks).every(Boolean)&&aud.value==='engineering')};
    area.addEventListener('input',update);aud.addEventListener('change',update);
    send.onclick=()=>{feedback('Transmission complete. The engineering team knows when it happened, what changed, and what to consider next.');setTimeout(passActivity,800)};
  },
  art(){
    $('#activity-workspace').innerHTML=`<div class="color-lab"><div><div class="nebula-canvas" id="nebula-canvas" aria-label="Live false-color nebula preview"><div class="nebula-clouds"></div><div class="nebula-stars" id="nebula-stars"></div></div><div class="mapping-key"><span>Cloud A: cool dust</span><span>Cloud B: visible gas</span><span>Points: hot stars</span></div></div><div class="channel-controls"><span class="visual-label">ORDERED WAVELENGTH MAP</span><p>Assign longer wavelengths to red, middle to green, and shorter to blue. Then drag the white line directly across the contrast gradient until faint dust stands out beside the bright stars.</p><label class="mapping-row">Infrared<select class="theme-select" data-map="ir"><option value="">Choose display color</option><option value="red">Red</option><option value="green">Green</option><option value="blue">Blue</option></select></label><label class="mapping-row">Visible<select class="theme-select" data-map="visible"><option value="">Choose display color</option><option value="red">Red</option><option value="green">Green</option><option value="blue">Blue</option></select></label><label class="mapping-row">Ultraviolet<select class="theme-select" data-map="uv"><option value="">Choose display color</option><option value="red">Red</option><option value="green">Green</option><option value="blue">Blue</option></select></label><div><span class="control-label">Contrast · <output id="art-contrast-output">35</output></span><div class="art-gradient" id="art-gradient" role="slider" aria-label="Image contrast" aria-valuemin="20" aria-valuemax="100" aria-valuenow="35" tabindex="0"><span class="art-drag-line" id="art-drag-line"></span></div></div><small>Target range: 55–70, where both dust and stellar points remain visible.</small><label for="art-caption">Scientific key</label><textarea class="log-textarea" id="art-caption" placeholder="Red represents infrared dust; blue represents ultraviolet light..."></textarea><button class="pass-button" id="save-image" disabled>Add image to atlas</button><p class="activity-feedback" role="status"></p></div></div>`;
    const stars=$('#nebula-stars'); let seed=99; const rnd=()=>((seed=seed*48271%2147483647)/2147483647);
    stars.innerHTML=Array.from({length:36},()=>`<i style="left:${(5+rnd()*90).toFixed(1)}%;top:${(8+rnd()*84).toFixed(1)}%;width:${(1.2+rnd()*3.4).toFixed(1)}px;height:${(1.2+rnd()*3.4).toFixed(1)}px;opacity:${(.4+rnd()*.6).toFixed(2)}"></i>`).join('');
    const caption=$('#art-caption'),button=$('#save-image'),canvas=$('#nebula-canvas'),gradient=$('#art-gradient'),line=$('#art-drag-line'),selects=[...document.querySelectorAll('[data-map]')],palette={red:'#ec4167',green:'#42d39a',blue:'#6295ff'};let contrastValue=35;
    const update=()=>{const values=selects.map(s=>s.value);canvas.style.setProperty('--c1',palette[values[0]]||'#39405f');canvas.style.setProperty('--c2',palette[values[1]]||'#39405f');canvas.style.setProperty('--c3',palette[values[2]]||'#39405f');canvas.style.setProperty('--cloud-contrast',(0.8+contrastValue/90).toFixed(2));canvas.style.setProperty('--cloud-bright',(0.55+contrastValue/140).toFixed(2));line.style.left=`${contrastValue}%`;gradient.setAttribute('aria-valuenow',contrastValue);$('#art-contrast-output').value=contrastValue;button.disabled=!(values.every(Boolean)&&new Set(values).size===3&&caption.value.trim().length>=45)};
    const setContrast=e=>{const rect=gradient.getBoundingClientRect();contrastValue=Math.max(20,Math.min(100,Math.round((e.clientX-rect.left)/rect.width*100)));update()};let dragging=false;gradient.addEventListener('pointerdown',e=>{dragging=true;gradient.setPointerCapture(e.pointerId);setContrast(e)});gradient.addEventListener('pointermove',e=>{if(dragging)setContrast(e)});gradient.addEventListener('pointerup',()=>dragging=false);gradient.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight'].includes(e.key)){contrastValue=Math.max(20,Math.min(100,contrastValue+(e.key==='ArrowRight'?2:-2)));update()}});
    selects.forEach(s=>s.addEventListener('change',update));caption.addEventListener('input',update);update();
    button.onclick=()=>{const correct=selects[0].value==='red'&&selects[1].value==='green'&&selects[2].value==='blue',c=contrastValue,words=caption.value.toLowerCase();if(!correct){feedback('The mapping is not ordered yet: longer infrared → red, visible → green, shorter ultraviolet → blue.',true);return}if(c<55||c>70){feedback('The mapping is correct, but drag the white line into the 55–70 range so dust brightens without washing out the scene.',true);return}if(!words.includes('infrared')||!words.includes('ultraviolet')){feedback('Finish the key by naming what both infrared and ultraviolet colors represent.',true);return}feedback('Atlas image saved. The ordered mapping and caption explain exactly how invisible measurements became visible color.');setTimeout(passActivity,800)};
  },
  engineering(){
    const levels=[
      {name:'Survey flats',energy:16,start:30,goal:5,hazards:[13,20,27],sands:[24,18,12,6]},
      {name:'Broken escarpment',energy:15,start:30,goal:5,hazards:[24,18,12,6,7,8,9],sands:[31,32,33,34]},
      {name:'Relay maze',energy:16,start:30,goal:5,hazards:[31,32,33,34,35,18,12,6,26,27,28,29,13,7,8,21,22,23,16,17,11],sands:[24,25,19,14,9]}
    ];
    let levelIndex=0,pos,energy,finished=false;
    $('#activity-workspace').innerHTML=`<div class="rover-lab"><div><div class="rover-levels" id="rover-levels"></div><div class="rover-grid" id="rover-grid"></div></div><div class="rover-panel"><span class="visual-label">ROVER SYSTEM STATUS</span><h4 id="rover-level-title"></h4><p id="rover-brief"></p><div class="energy-bar"><span id="energy-fill"></span></div><strong id="energy-readout"></strong><div class="rover-legend"><span class="rock-key">Rock · 1</span><span class="sand-key">Sand · 2</span><span class="hazard-key">Blocked</span></div><p>Move one cell vertically or horizontally. Reach the upper-right relay without draining the battery.</p><button class="pass-button" id="confirm-route" disabled></button><p class="activity-feedback" role="status"></p></div></div>`;
    const grid=$('#rover-grid'),fill=$('#energy-fill'),read=$('#energy-readout'),confirm=$('#confirm-route'),dots=$('#rover-levels');
    const renderLevel=()=>{
      const cfg=levels[levelIndex];pos=cfg.start;energy=cfg.energy;finished=false;
      dots.innerHTML=levels.map((l,i)=>`<span class="rover-level-dot ${i<levelIndex?'passed':i===levelIndex?'active':''}">${i+1}</span>`).join('');
      $('#rover-level-title').textContent=`Level ${levelIndex+1} · ${cfg.name}`;
      $('#rover-brief').textContent=levelIndex===0?'Learn the terrain costs and preserve a small reserve.':levelIndex===1?'A blocked cliff forces a longer route across costly sand.':'The safe corridor is narrow; every wrong turn spends energy you need later.';
      grid.innerHTML=Array.from({length:36},(_,i)=>`<button class="terrain-cell ${cfg.hazards.includes(i)?'hazard':cfg.sands.includes(i)?'sand':'rock'} ${i===cfg.start?'rover path':''} ${i===cfg.goal?'goal':''}" data-cell="${i}" ${cfg.hazards.includes(i)?'disabled':''} aria-label="Terrain cell ${i+1}${i===cfg.goal?', relay ridge goal':''}"></button>`).join('');
      fill.style.width='100%';read.textContent=`${energy} energy`;confirm.disabled=true;confirm.textContent=levelIndex===levels.length-1?'Transmit all routes':'Load next terrain';feedback('');
      grid.querySelectorAll('button:not(:disabled)').forEach(cell=>cell.onclick=()=>moveRover(cell,cfg));
    };
    const moveRover=(cell,cfg)=>{if(finished)return;const n=Number(cell.dataset.cell),sameRow=Math.floor(n/6)===Math.floor(pos/6),adj=Math.abs(n-pos)===6||(sameRow&&Math.abs(n-pos)===1);if(!adj){feedback('The rover can only move to a neighboring cell.',true);return}const cost=cfg.sands.includes(n)?2:1;if(energy-cost<0){feedback('The battery cannot support that move. Reopen the mission to restart this terrain.',true);return}grid.querySelector(`[data-cell="${pos}"]`).classList.remove('rover');pos=n;energy-=cost;cell.classList.add('rover','path');fill.style.width=`${energy/cfg.energy*100}%`;read.textContent=`${energy} energy`;feedback('');if(pos===cfg.goal){finished=true;confirm.disabled=false;feedback(`Level ${levelIndex+1} cleared with ${energy} energy remaining.`)}};
    confirm.onclick=()=>{if(levelIndex<levels.length-1){levelIndex++;renderLevel();return}feedback('Three routes verified. The rover adapted to open ground, a blocked escarpment, and a tight relay maze.');setTimeout(passActivity,900)};
    renderLevel();
  },
  science(){
    const lines=[{v:486,name:'Hydrogen β'},{v:589,name:'Sodium'},{v:656,name:'Hydrogen α'}],found=new Set();
    $('#activity-workspace').innerHTML=`<div class="spectrum-lab"><div><div class="spectrum-view spectrum-scanner" id="spectrum-scanner" role="slider" aria-label="Spectrum wavelength" aria-valuemin="400" aria-valuemax="700" aria-valuenow="460" tabindex="0"><span class="spectrum-color" aria-hidden="true"></span>${lines.map(l=>`<i class="absorption-line" data-wavelength="${l.v}" style="left:${(l.v-400)/3}%"></i>`).join('')}<span class="scanner wide" id="scanner"></span></div><div class="spectrum-readout">Wavelength: <output id="wavelength-output">460 nm</output><small>Drag the wide white scanner across the color band to reveal each absorption line.</small></div></div><div class="scan-findings">${lines.map(l=>`<div class="finding" data-line="${l.v}">Undetected line near ${l.v} nm</div>`).join('')}<label>Which elements match?<select class="channel-select" id="element-match"><option value="">Choose composition</option><option value="oxygen">Only oxygen</option><option value="hydrogen-sodium">Hydrogen and sodium</option><option value="carbon">Only carbon</option></select></label><button class="pass-button" id="identify-star" disabled>Record spectrum</button><p class="activity-feedback" role="status"></p></div></div>`;
    const view=$('#spectrum-scanner'),scanner=$('#scanner'),button=$('#identify-star'),match=$('#element-match');let wavelength=460,dragging=false;
    const update=()=>{const pct=(wavelength-400)/3;$('#wavelength-output').value=`${wavelength} nm`;scanner.style.left=`${pct}%`;view.style.setProperty('--scan',`${pct}%`);view.setAttribute('aria-valuenow',wavelength);lines.forEach(l=>{if(Math.abs(wavelength-l.v)<=6){found.add(l.v);view.querySelector(`.absorption-line[data-wavelength="${l.v}"]`)?.classList.add('revealed');const el=$(`[data-line="${l.v}"]`);el.classList.add('found');el.textContent=`Found: ${l.name} at ${l.v} nm`}});button.disabled=!(found.size===3&&match.value==='hydrogen-sodium')};
    const setFromPointer=e=>{const rect=view.getBoundingClientRect();wavelength=Math.round(400+Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width))*300);update()};
    view.addEventListener('pointerdown',e=>{dragging=true;view.setPointerCapture(e.pointerId);setFromPointer(e)});view.addEventListener('pointermove',e=>{if(dragging)setFromPointer(e)});view.addEventListener('pointerup',()=>dragging=false);view.addEventListener('pointercancel',()=>dragging=false);view.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();wavelength=Math.max(400,Math.min(700,wavelength+(e.key==='ArrowRight'?2:-2)));update()}});
    match.addEventListener('change',update);update();button.onclick=()=>{feedback('Spectrum recorded. The pattern supports hydrogen and sodium in the star’s atmosphere.');setTimeout(passActivity,800)};
  },
  math(){
    $('#activity-workspace').innerHTML=`<div class="orbit-lab"><div class="orbit-sim"><span class="target-orbit"></span><span class="probe-orbit" id="probe-orbit"></span></div><div class="orbit-controls"><span class="visual-label">ORBIT INSERTION MODEL</span><label>Velocity <output id="velocity-output">88%</output><input id="velocity" type="range" min="70" max="130" value="88"></label><label>Phase angle <output id="phase-output">35°</output><input id="phase" type="range" min="20" max="80" value="35"></label><p>Match the solid cyan path to the dashed target. A stable window will appear when both values are close.</p><button class="pass-button" id="test-orbit">Run one-orbit simulation</button><p class="activity-feedback" role="status"></p></div></div>`;
    const velocity=$('#velocity'),phase=$('#phase'),orbit=$('#probe-orbit');
    const update=()=>{const v=Number(velocity.value),p=Number(phase.value);$('#velocity-output').value=`${v}%`;$('#phase-output').value=`${p}°`;orbit.style.setProperty('--orbit-w',`${42+(v-70)*.686}%`);orbit.style.setProperty('--orbit-h',`${19+(v-70)*.6}%`);orbit.style.transform=`translate(-50%,-50%) rotate(${(p-47)*.7-12}deg)`};
    velocity.addEventListener('input',update);phase.addEventListener('input',update);update();
    $('#test-orbit').onclick=()=>{const good=Math.abs(Number(velocity.value)-105)<=4&&Math.abs(Number(phase.value)-47)<=5;if(good){feedback('Stable insertion. The solid orbit now aligns with the dashed target in size and orientation.');setTimeout(passActivity,800)}else feedback('The paths do not match yet. Velocity controls the ellipse size; phase angle rotates the meeting point. Aim near 105% and 47°.',true)};
  }
};

function renderCompletion(w){
  const last=!lessonReview && lessonIndex===WORLDS.length-1;
  $('#lesson-stage').innerHTML=`<div class="lesson-complete" style="${planetStyle(w)}"><div class="complete-world">${planetMarkup(w)}</div><span class="mission-badge">${lessonReview?'Review':'Orbit passed'}</span><h3>${w.subject}${lessonReview?'':' recorded.'}</h3><p>${w.complete}</p><button class="continue-button" id="travel-next">${lessonReview?'Close review':last?'See the completed journey':'Continue the journey'}</button></div>`;
  $('#travel-next').onclick=()=>{if(lessonReview){lessonDialog.close();return} finishWorld()};
}

function finishWorld(){
  if(traveling||lessonReview) return;
  const w=WORLDS[lessonIndex];
  if(!state.completed.includes(w.id)){
    state.completed.push(w.id);
    state.dates[w.id]=new Date().toISOString();
    delete state.resume[w.id];
    saveState();
  }
  lessonDialog.close();
  if(state.completed.length===WORLDS.length){
    renderHome();
    return;
  }

  traveling=true;
  $('#space-stage').classList.add('traveling');
  const nextOrbitPlanet=document.querySelector('.orbit-planet.depth-1');
  const first=nextOrbitPlanet?nextOrbitPlanet.getBoundingClientRect():null;
  const current=document.querySelector('.stage-planet.is-current');
  const exitRect=current?current.getBoundingClientRect():null;

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
  $('#log-entries').innerHTML=state.completed.length?state.completed.map(id=>{const w=WORLDS.find(x=>x.id===id);return `<article class="log-entry" style="--entry-color:${w.color}"><div class="stamp">${w.short}</div><div><h3>${w.subject}</h3><p>${w.complete}</p></div><time>${new Intl.DateTimeFormat(undefined,{month:'short',day:'numeric'}).format(new Date(state.dates[id]))}</time></article>`}).join(''):'<p class="empty-log">Your first mission record will appear here after you pass the outer orbit.</p>';
  $('#log-dialog').showModal();
}
function openCertificate(){
  if(state.completed.length<6) return;
  $('#certificate-date').textContent=new Intl.DateTimeFormat(undefined,{year:'numeric',month:'long',day:'numeric'}).format(new Date());
  $('#certificate-dialog').showModal();
}

$('#lesson-next').onclick=()=>{const total=WORLDS[lessonIndex].lessons.length+2; if(lessonStep<total-1){lessonStep++;renderLesson()}};
$('#lesson-back').onclick=()=>{if(lessonStep>0){lessonStep--;renderLesson()}};
$('#close-lesson').onclick=()=>lessonDialog.close();
function resetJourney(){
  if(!confirm('Reset the journey? Progress, the journey log, and saved lesson place will be cleared.')) return;
  state={completed:[],dates:{},resume:{}};
  saveState();
  activeIndex=0;
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
