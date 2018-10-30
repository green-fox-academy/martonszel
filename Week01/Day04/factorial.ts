// -  Create a function called `factorio`
//    that returns it's input's factorial


function factorio(num) {
    for(var answer=1;num>0;num--){
      answer*=num;
    }
    console.log (answer);
  }
  factorio(5);
