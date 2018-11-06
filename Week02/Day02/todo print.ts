'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let text2 = 'My todo\n' + todoText ;
let text3 = text2 + " - Download games\n";
let text4 = text3 + "     - Diablo"

console.log(text4);