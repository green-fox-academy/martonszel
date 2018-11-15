// Given a string, compute recursively a new string where all the 'x' chars have been removed.
export {}; 

function changeXY(string: string){
  if (string.indexOf('x') === -1) {
    return string;
  } else {
    return changeXY(string.replace('x',''));
  }}

console.log(changeXY("macxxxyyy"));