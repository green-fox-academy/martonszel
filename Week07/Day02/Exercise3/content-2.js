/*
      1) replace the list items' content with items from this list:
      ['apple', 'banana', 'cat', 'dog']
      2) change the <ul> element's background color to 'limegreen'
        - use css class to change the color instead of the style property
*/

let newList = ['apple', 'banana', 'cat', 'dog'];
let origiList = document.querySelectorAll('li');
origiList.forEach((e,i) => { (e.innerHTML = newList[i])})

