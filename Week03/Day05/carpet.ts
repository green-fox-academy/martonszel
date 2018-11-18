'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function fib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

