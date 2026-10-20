const habits=[{name:'Move for 20 minutes',done:5,target:7},{name:'Read before bed',done:4,target:7},{name:'Plan tomorrow',done:6,target:7}];

const today=new Date();
const monday=new Date(today);
monday.setDate(today.getDate()-(today.getDay()+6)%7);
const sunday=new Date(monday);
sunday.setDate(monday.getDate()+6);
const formatDate=date=>new Intl.DateTimeFormat(undefined,{month:'short',day:'numeric'}).format(date);
document.querySelector('#week-range').textContent=`${formatDate(monday)} – ${formatDate(sunday)}`;

document.querySelector('#habit-list').innerHTML=habits.map(h=>`<article class="habit"><div><strong>${h.name}</strong><small>${h.done} of ${h.target} days</small></div><span class="status">${Math.round(h.done/h.target*100)}%</span></article>`).join('');
