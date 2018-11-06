'use strict';

let shopItems = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"
let index = shopItems.indexOf(2);
if (~index) {
    shopItems[index] = "Croissant";
}
let index2 = shopItems.indexOf(false);
if (~index2) {
    shopItems[index2] = "Ice cream";
}

    console.log(shopItems);