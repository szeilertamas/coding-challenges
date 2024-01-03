function solution(str) {
    let solutionArr = [];
    let ele = "";
  
    for (let i = 0; i < str.length; i++) {
      ele += str[i];
      if (ele.length === 2) {
        solutionArr.push(ele);
        ele = "";
      }
    }
  
    if (ele.length === 1) {
      ele += "_";
      solutionArr.push(ele);
    }
  
    return solutionArr;
  }

// DESCRIPTION:

// Complete the solution so that it splits
// the string into pairs of two characters.
// If the string contains an odd number of characters
// then it should replace the missing second character
// of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

