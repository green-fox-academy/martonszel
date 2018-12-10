// Write a function that takes a filename as string,then returns the number of lines the file contains.
// It should return zero if it can't open the file, and should not raise any error.

export { };
const fs = require('fs');

function readFromFile(fileName: string) {
    try {
        return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
        return null;
    }
}

function countLines(fileName: string) {
    const fileContent: string = readFromFile(fileName);
    if (fileContent !== null) {
        return fileContent.split('\n').length;
    } else {
        return 0;
    }
}

console.log(countLines("my-file.txt"));