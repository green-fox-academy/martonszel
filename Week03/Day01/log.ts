// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
export {};
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function uniqueIp(fileName: string) {

  let fileContent: string = readFromFile(fileName);
  let lines: string[] = fileContent.split('\r\n');
  let result: any[] = [];
  let ipAdresses: string[] = [];

  for (let i = 0; i < lines.length; i++) {

      result.push(lines[i].split("   ")); // ahol 3 space van ott szedi szét
      ipAdresses.push(result[i][1]);      // első elemét ami az ip belerakja a listába
        }

  let uniqueIpResult = ([...new Set(ipAdresses)]);      // Use the spread operator to transform a set into an Array.+ console.log([...new Set(array.name)]) 
  return uniqueIpResult;
  
}

console.log(uniqueIp("log.txt"));


function getPostRatio(file): void {
  if (fs.existsSync(file)) {
    let content = readFromFile(file).split('\r\n');
    let GETcount: number = 0;
    let POSTcount: number = 0;
    content.forEach(function (element) {
      if (element.indexOf('GET') !== -1) {
        GETcount ++;
      }
      if (element.indexOf('POST') !== -1) {
        POSTcount ++;
      }
    })
    console.log(GETcount / POSTcount);
  }
}
getPostRatio('log.txt');
