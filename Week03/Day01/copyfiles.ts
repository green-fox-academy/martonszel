// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

export { };
const fs = require('fs');

function copyFile(fileName1 , Filaname2){
    if (fs.existsSync(fileName1)){
    fs.copyFileSync(fileName1, Filaname2);
    return true }
    else { console.log(false)}
}
copyFile('my-file.txt', 'copy.txt');

