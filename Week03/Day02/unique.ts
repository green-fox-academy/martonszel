'use strict'

export{}

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr: number[]) {
	let newarray: number[] = [];
	arr.forEach(e => {
		if (newarray.includes(e) === false) {
			newarray.push(e);
		}
	})
	return newarray;
}
//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`
