const habits=[{name:'Move for 20 minutes',done:5,target:7},{name:'Read before bed',done:4,target:7},{name:'Plan tomorrow',done:6,target:7}];

document.querySelector('#habit-list').innerHTML=habits.map(h=>{const percent=Math.round(h.done/h.target*100);return `<article class="habit" data-progress="${percent}"><div><strong>${h.name}</strong><small>${h.done} of ${h.target} days</small></div><span class="status">${percent}%</span></article>`}).join('');
