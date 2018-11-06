// New array
var list1: number[] = [1, 2, 3];
console.log('list1 array = ' + list1);

// results in the same array as the one above.  This is a style preference.
var list2: Array<number> = [1, 2, 3];
console.log('list2 array = ' + list2);

//Creating an array of type “any”.
var anyList: any[] = [1, true, "three"];
console.log('anyList[] = ' + anyList);
anyList[1] = 100;
console.log('anyList[] = ' + anyList);

 // Set the length of an array structure to 10.
 let list3:string[] = new Array(5);
 console.log('list3 = ' + list3);
