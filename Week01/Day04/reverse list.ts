// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`
export {};



//let numList = [3, 4, 5, 6, 7].reverse();
//console.log(numList);

let numList = [3, 4, 5, 6, 7]
let newarray= [];
for (let i = numList.length-1 ; i >= 0; i--) {
    newarray.push(numList[i]);
}
console.log(numList[0]);
console.log(newarray);
