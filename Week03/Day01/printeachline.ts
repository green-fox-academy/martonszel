import { fileURLToPath } from "url";

// Write a program that opens a file called 'my-file.txt', then prints each of lines from the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

export { };
const fs = require('fs');

function readFromFile(fileName: string) {
    try {
        return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
        console.log ("Unable to read file: my-file.txt");
        return null;
    }
}

function printLines(file: string) {
    const fileContent = readFromFile(file);
    if (fs.existsSync(file)) {
    } return fileContent.split('\r\n');
}
console.log(printLines('my-file.txt'));


