const seed = [{name:'Move for 20 minutes',days:[]},{name:'Read 10 pages',days:[]},{name:'Plan tomorrow',days:[]}];
const key='habit-pulse-v1';
let habits=JSON.parse(localStorage.getItem(key)||'null')||seed;
const todayKey=()=>new Date().toISOString().slice(0,10);
const save=()=>localStorage.setItem(key,JSON.stringify(habits));
const isDone=h=>h.days.includes(todayKey());
function render(){
  const filter=document.querySelector('#filter').value;
  const visible=habits.filter(h=>filter==='all'||(filter==='done'?isDone(h):!isDone(h)));
  const total=habits.length*7, checked=habits.reduce((n,h)=>n+h.days.length,0), today=habits.filter(isDone).length;
  document.querySelector('#completion').textContent=`${total?Math.round(checked/total*100):0}%`;
  document.querySelector('#completionNote').textContent=checked?`${checked} check-ins this week`:'No check-ins yet';
  document.querySelector('#today').textContent=`${today} / ${habits.length}`;
  document.querySelector('#streak').textContent=`${Math.max(0,...habits.map(h=>h.days.length))} days`;
  const list=document.querySelector('#habitList'); list.innerHTML='';
  if(!visible.length){list.innerHTML='<div class="empty"><strong>No habits match this view.</strong><br>Try another filter or add a new habit.</div>';return}
  visible.forEach(h=>{const i=habits.indexOf(h);const row=document.createElement('article');row.className=`habit ${isDone(h)?'done':''}`;row.innerHTML=`<button class="check" type="button" aria-label="${isDone(h)?'Uncheck':'Check'} ${h.name}">${isDone(h)?'✓':'○'}</button><div class="habit-copy"><div class="habit-name"></div><div class="habit-meta">${h.days.length} check-in${h.days.length===1?'':'s'} this week</div></div><button class="delete" type="button">Remove</button>`;row.querySelector('.habit-name').textContent=h.name;row.querySelector('.check').onclick=()=>{h.days=isDone(h)?h.days.filter(d=>d!==todayKey()):[...h.days,todayKey()];save();render()};row.querySelector('.delete').onclick=()=>{habits.splice(i,1);save();render()};list.append(row)})
}
document.querySelector('#addForm').onsubmit=e=>{e.preventDefault();const input=document.querySelector('#habitName');habits.push({name:input.value.trim(),days:[]});input.value='';save();render()};
document.querySelector('#filter').onchange=render;
document.querySelector('#reset').onclick=()=>{if(confirm('Clear this week\'s check-ins?')){habits.forEach(h=>h.days=[]);save();render()}};
render();
