// Create a method that find the 5 most common lottery numbers in lottery.csv
' use strict';

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  }
  catch (e) {
    console.log('File cannot be found');
    return null;
  }
}


function checkNumber(fileName: string) {
  let fileContent = readFromFile(fileName);
  if (fileContent !== null) {
    let lines = fileContent.split('\r\n');
    let lotterynumbers: string[][] = [];
    let mostFiveCommon = {}
    for (let i = 0; i < lines.length; i++) {
      lotterynumbers.push(lines[i].split(';').splice(-5, 5))
    }
    for (let i = 0; i < lotterynumbers.length; i++) {
      for (let j = 0; j < lotterynumbers[i].length; j++) {
        if (mostFiveCommon[lotterynumbers[i][j]]) {
          mostFiveCommon[lotterynumbers[i][j]]++;
        } else {
          mostFiveCommon[lotterynumbers[i][j]] = 1;
        }
      }
    }
    
    return Object.keys(mostFiveCommon).sort((a, b) => mostFiveCommon[b] - mostFiveCommon[a]).slice(0, 5)
    
  }
  
}

console.log(checkNumber('lottery.txt'));

