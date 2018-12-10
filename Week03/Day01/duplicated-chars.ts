'use script';
export { };
const fs = require('fs');

function readFromFile(fileName: string) {
    try {
        return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
        return null;
    }
}

function decryptDouble(filename: string) {
  let fileContent: string = readFromFile(filename);
  let fileContentArray: string[] = fileContent.split('');
  for (let index = 0; index < fileContentArray.length; index++) {
    if (index % 2 === 0) {
      fileContentArray[index] = '';
    }
  }
  let decryptedString = fileContentArray.join('');
  return decryptedString;
}

console.log(decryptDouble('duplicated-chars.txt'));
