// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
export{};

function sum (a: number): number {
    let sumi = 0;
    for ( let i=1 ; i<a+1 ; i++){
        sumi += i;
        
}
return sumi
} 

console.log(sum(5));


