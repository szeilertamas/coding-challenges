const CODE_A = 'A'.charCodeAt(0);
const CODE_a = 'a'.charCodeAt(0);

function rot13(message) {
  return message
    .split("")
    .map((char, index) => {
      if (/[A-Z]/.test(char)) {
        return String.fromCharCode(
          ((message.charCodeAt(index) - CODE_A + 13) % 26) + CODE_A
        );
      } else if (/[a-z]/.test(char)) {
        return String.fromCharCode(
          ((message.charCodeAt(index) - CODE_a + 13) % 26) + CODE_a
        );
      } else {
        return char;
      }
    })
    .join("");
}

//   DESCRIPTION:
//   ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
//   ROT13 is an example of the Caesar cipher.
  
//   Create a function that takes a string and returns the string ciphered with Rot13.
//   If there are numbers or special characters included in the string, they should be returned as they are.
//   Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".