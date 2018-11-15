// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
export{};

function addNumnber(n: number) {
  if (n >= 10) {
    return n;
  } else {
    console.log(n);
    return addNumnber(n+1);
  }
}

console.log(addNumnber(1));