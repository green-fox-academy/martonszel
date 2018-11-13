/*

When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects which decreases inkAmount*/


class Sharpie {

color: string; 
width: number; 
inkAmount: number; 

constructor(color: string , width: number, inkAmount: number = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
}

decrease (){
    
    return  -- this.inkAmount  ;
}

}

let sharpie1 = new Sharpie ('black', 50 )
let sharpie2 = new Sharpie ('blue', 30 )
let sharpie3 = new Sharpie ('red', 60 )

console.log(sharpie1);

sharpie2.decrease();
console.log(sharpie2);

sharpie3.decrease();
sharpie3.decrease();
console.log(sharpie3);