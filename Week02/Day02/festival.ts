
'use strict';
export { };

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

let canEnter: string[] = [];
function securityCheck(queue: any[]): any[] {
  for (let i: number = 0; i < queue.length; i++) {
    if (queue[i].alcohol === 0 && queue[i].guns === 0) {
      canEnter.push(queue[i].name);
    } else if (queue[i].guns !== 0) {
      watchlist.push(queue[i].name);
      securityAlcoholLoot += queue[i].alcohol;
    } else if (queue[i].alcohol !== 0 && queue[i].guns === 0) {
      securityAlcoholLoot += queue[i].alcohol;
      canEnter.push(queue[i].name);
    }
  }
  return canEnter;
}
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

console.log("Can enter: " + securityCheck(queue));
console.log('Alcoholloot: ' + securityAlcoholLoot);
console.log('Whatclist: '+ watchlist);

export = securityCheck;
