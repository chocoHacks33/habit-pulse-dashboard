const habits=[{name:'Move for 20 minutes',done:5,target:7},{name:'Read before bed',done:4,target:7},{name:'Plan tomorrow',done:6,target:7}];

const list=document.querySelector('#habit-list');

function render(){
  list.innerHTML=habits.map((h,index)=>`<article class="habit"><div><strong>${h.name}</strong><small>${h.done} of ${h.target} days</small></div><button class="edit-habit" type="button" data-index="${index}" aria-label="Edit ${h.name}">Edit</button><span class="status">${Math.round(h.done/h.target*100)}%</span></article>`).join('');
}

list.addEventListener('click', event=>{
  const button=event.target.closest('.edit-habit');
  if(!button) return;
  const habit=habits[Number(button.dataset.index)];
  const nextName=prompt('Rename habit',habit.name)?.trim();
  if(!nextName || nextName===habit.name) return;
  habit.name=nextName;
  render();
});

render();
