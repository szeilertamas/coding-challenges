function incrementString(strng) {
    let stringNumber = strng.match(/\d+$/);
  
    if (stringNumber) {
      let numberString = stringNumber[0];
      let numberPlusOne = (Number(numberString) + 1).toString();
  
      while (numberPlusOne.length < numberString.length) {
        numberPlusOne = "0" + numberPlusOne;
      }
  
      return strng.slice(0, -numberString.length) + numberPlusOne;
    } else {
      return strng + "1";
    }
  }

//   DESCRIPTION:

//   Your job is to write a function which increments a string,
//   to create a new string.
  
//   If the string already ends with a number,
//   the number should be incremented by 1.

//   If the string does not end with a number.
//   the number 1 should be appended to the new string.

//   Examples:

//   foo -> foo1
//   foobar23 -> foobar24
//   foo0042 -> foo0043
//   foo9 -> foo10
//   foo099 -> foo100