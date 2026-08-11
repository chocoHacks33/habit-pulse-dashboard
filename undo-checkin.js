export function undoCheckIn(habit){return {...habit,done:Math.max(0,habit.done-1)};}
