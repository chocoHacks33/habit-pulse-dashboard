export function progressTone(percent){if(percent>=100)return 'complete';if(percent>=70)return 'on-track';if(percent>0)return 'started';return 'not-started';}
