export function filterHabits(habits,filter='all'){return habits.filter(h=>filter==='all'||(filter==='complete'?h.done>=h.target:h.done<h.target));}
