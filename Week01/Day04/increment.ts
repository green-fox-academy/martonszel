// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console
export{};

let numList = [1, 2, 3, 4, 5].map(function(e) {
    if (e===3)
    return ++e;});

console.log(numList[2]);