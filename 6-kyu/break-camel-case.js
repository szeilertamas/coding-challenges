function solution(string) {
  if (string.length === 0) return "";

  let breakCamelCase = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i].toUpperCase()) {
      breakCamelCase += string[i];
    } else {
      breakCamelCase += " " + string[i];
    }
  }

  return breakCamelCase;
}

//   Complete the solution so that the function will break up camel casing, using a space between words.
//   Example

//   "camelCasing"  =>  "camel Casing"
//   "identifier"   =>  "identifier"
//   ""             =>  ""
