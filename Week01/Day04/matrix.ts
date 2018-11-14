// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let i;
let j;

function matrix(num) {

    for (i = 0; i < num; i++) {
        let arr = [];
        for (j = 0; j < num; j++) {
            if (i === j) {
                arr.push(1);
            } else {
                arr.push(0);
            }
        }
        console.log(arr.reverse());
    }
}

matrix(4);


