export function summarizeWeek(habits) {
 const total=habits.reduce((sum,h)=>sum+Math.max(0,h.target),0);
 const completed=habits.reduce((sum,h)=>sum+Math.min(Math.max(0,h.done),h.target),0);
 return {completed,total,percent:total?Math.round(completed/total*100):0};
}
