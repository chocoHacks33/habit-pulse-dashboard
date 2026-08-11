export function exportSummary(habits){return habits.map(({name,done,target})=>`${name}: ${done}/${target}`).join('\n');}
