export function sortHabits(habits){return [...habits].sort((a,b)=>(b.done/b.target)-(a.done/a.target));}
