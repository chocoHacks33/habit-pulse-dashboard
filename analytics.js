export function averageCompletion(habits){if(!habits.length)return 0;return Math.round(habits.reduce((sum,h)=>sum+(h.done/h.target*100),0)/habits.length);}
