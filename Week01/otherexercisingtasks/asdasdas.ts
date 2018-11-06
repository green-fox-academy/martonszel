let L = parseInt(readline());
let H = parseInt(readline());
let T = readline().toLowerCase();

for (let i = 0; i < H; i++) {
    let row = readline(); // Read one row
    let str = '';
    
    for (let j = 0; j < T.length; j++ ) {
        // Define the position of current letter
        // In the current alphabet
        let index = (T[j].charCodeAt(0) - 97) * L;
        
        // If it's not in the current alphabet
        // Then select "?" mark
        (index < 0) && (index = 26 * L);
        // Add current piece of selected letter
        str += row.slice(index, index + L);
    }
    
console.log(str); // Print current line
}