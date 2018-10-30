// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
export{};

function printParams (p1,p2,p3,p4){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
}
printParams("p1","p2","p3","p4");
