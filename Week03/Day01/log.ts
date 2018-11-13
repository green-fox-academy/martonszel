// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.


export { };
const fs = require('fs');

function readFromFile(fileName: string) {
    try {
        return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
        return null;
    }
}
function uniqueIP(list: string){
    const fileContent = readFromFile(list);
    return fileContent.split('\n');

}

console.log(uniqueIP('logs.txt'));

