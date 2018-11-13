/* Create a PostIt  class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!" */

class PostIt {
    backgroundcolor: string;
    text: string;
    textColor: string; 

    constructor(backgroundcolor: string, text: string, textColor: string) {
        this.backgroundcolor = backgroundcolor ;
        this.text = text ; 
        this.textColor = textColor ; 
}
}

let firstPostit= new PostIt ("orange","Idea 1","blue" );
let secondPostit= new PostIt ("pink","Awesome","black" );
let thirdPostit= new PostIt("yellow","Superb!","green" );

console.log(firstPostit);
console.log(secondPostit);
console.log(thirdPostit);

console.log(firstPostit.text);
console.log(secondPostit.backgroundcolor);
console.log(thirdPostit.textColor);
