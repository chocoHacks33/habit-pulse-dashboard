const habits=[{name:'Move for 20 minutes',done:5,target:7},{name:'Read before bed',done:4,target:7},{name:'Plan tomorrow',done:6,target:7}];

const orderedHabits=[...habits].sort((a,b)=>a.name.localeCompare(b.name));
document.querySelector('#habit-list').innerHTML=orderedHabits.map(h=>`<article class="habit"><div><strong>${h.name}</strong><small>${h.done} of ${h.target} days</small></div><span class="status">${Math.round(h.done/h.target*100)}%</span></article>`).join('');
