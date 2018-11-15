// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

export {}; 

function changeXY(string: string){
  if(string.length < 2) {
    return string;
  } else {
    return string.charAt(0) + "*" + changeXY(string.substring(1));
  }}

console.log(changeXY("macxxxyyy"));
