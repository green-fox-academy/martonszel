'use strict';

let shopItems = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(shopItems: any[]): void {
    for (let i = 0; i < shopItems.length; i++) {
        if (typeof shopItems[i] === "number") {
            shopItems[i] = "croissant";
        }
        if (typeof shopItems[i] === "boolean") {
            shopItems[i] = "ice cream";
        }
    }
}
sweets(shopItems);
console.log(shopItems);
    // sweets(shopItems);

    /*
 let index = shopItems.indexOf(2);
 if (~index) {
     shopItems[index] = "Croissant";
 }
 let index2 = shopItems.indexOf(false);
 if (~index2) {
     shopItems[index2] = "Ice cream";
 }
 */
