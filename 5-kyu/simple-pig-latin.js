function pigIt(str) {
    return str
      .split(" ")
      .map((word) =>
        word.replace(
          word,
          /\w/g.test(word)
            ? [...word].slice(1).join("") + word[0] + "ay"
            : word
        )
      )
      .join(" ");
  }

//   Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); => igPay atinlay siay oolcay
// pigIt('Hello world !');     => elloHay orldway !