
// Wnrite a recursive function that takes one parameter: n and counts down from n.

function count(n: number) {
  if (n <= 0) {
    return n;
  } else {
    console.log(n);
    return count(n-1);
  }
}

console.log(count(5));
