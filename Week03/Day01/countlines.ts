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

function printLines(file: string) {
    const fileContent = readFromFile(file);
    if (fileContent === null) {
        return 0;
    }
    else {
        return fileContent.split('\r\n').length;
    }
}
console.log(printLines('my-file.txt'));