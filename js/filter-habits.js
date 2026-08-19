export function matchesCompletionFilter(habit, filter='all') {
 if(filter==='complete') return habit.done>=habit.target;
 if(filter==='incomplete') return habit.done<habit.target;
 return true;
}
