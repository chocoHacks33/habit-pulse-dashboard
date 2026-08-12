const habits=[{name:'Move for 20 minutes',done:5,target:7},{name:'Read before bed',done:4,target:7},{name:'Plan tomorrow',done:6,target:7}];

const completedDays=habits.reduce((total,habit)=>total+habit.done,0);
const targetDays=habits.reduce((total,habit)=>total+habit.target,0);
document.querySelector('#habit-list').insertAdjacentHTML('beforebegin',`<p class="summary" role="status">${completedDays} of ${targetDays} planned habit days completed this week.</p>`);
document.querySelector('#habit-list').innerHTML=habits.map(h=>`<article class="habit"><div><strong>${h.name}</strong><small>${h.done} of ${h.target} days</small></div><span class="status">${Math.round(h.done/h.target*100)}%</span></article>`).join('');
