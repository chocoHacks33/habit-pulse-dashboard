const habits=[{name:'Move for 20 minutes',done:5,target:7},{name:'Read before bed',done:4,target:7},{name:'Plan tomorrow',done:6,target:7}];

const getCompletionLabel=(done,target)=>done>=target?'Complete':done===0?'Not started':'In progress';

document.querySelector('#habit-list').innerHTML=habits.map(h=>`<article class="habit"><div><strong>${h.name}</strong><small>${h.done} of ${h.target} days</small></div><span class="status">${getCompletionLabel(h.done,h.target)}</span></article>`).join('');
