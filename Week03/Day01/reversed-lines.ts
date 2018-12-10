'use strict'
export{};

const fs = require('fs');

function readFromFile(fileName: string) {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  }
  catch (e) {
    console.log('File cannot be found');
    return null;
  }
}

function reverseLines(file) {
  let fileContent = readFromFile(file); 
  let lines = fileContent.split('\r\n');
  
  if (fs.existsSync(file)) {
    for (let i = 0; i < lines.length; i++) {
      lines[i] = lines[i].split('').reverse().join('');
      
    }
    return lines.join('\r\n');
    
  }
  
}

console.log(reverseLines('reversed-lines.txt'));