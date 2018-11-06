var myBool: boolean = true;
    var myNumber: number = 5;
    var myString: string = 'Bob';

    var myAnyString: any = 'Joe';
    var myAnyNumber: any = 3;
    var myAnyBool: any = false;

    console.log(myBool);
    console.log(myNumber);
    console.log(myString);
    console.log(myAnyString);
    console.log(myAnyNumber);
    console.log(myAnyBool);

    enum Color { Red, Green, Blue };
    
    let myColor: number = Color.Green;
    console.log('myColor = ' + myColor);

    var myColor2: string = Color[0];
    console.log('myColor2 = ' + myColor2);