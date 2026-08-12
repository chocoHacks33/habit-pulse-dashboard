const habits=[{name:'Move for 20 minutes',done:5,target:7},{name:'Read before bed',done:4,target:7},{name:'Plan tomorrow',done:6,target:7}];

const percentComplete=(done,target)=>target>0?Math.min(100,Math.round(done/target*100)):0;
document.querySelector('#habit-list').innerHTML=habits.map(h=>`<article class="habit"><div><strong>${h.name}</strong><small>${h.done} of ${h.target} days</small></div><span class="status">${percentComplete(h.done,h.target)}%</span></article>`).join('');
