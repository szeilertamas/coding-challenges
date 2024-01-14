function expandedForm(num) {
  
    const number = num.toString();
    let numberList = [];
  
    for (let i = 0; i < number.length; i++) {
      if (number[i] > 0)
        numberList.push(number[i] * Math.pow(10, number.length - 1 - i));
    }
  
    return numberList.join(" + ");
  }

//   Write Number in Expanded Form

//   You will be given a number and you will need to return it as a string in Expanded Form.

//   For example:
//   expandedForm(12); // Should return '10 + 2'
//   expandedForm(42); // Should return '40 + 2'
//   expandedForm(70304); // Should return '70000 + 300 + 4'
  
//   NOTE: All numbers will be whole numbers greater than 0.