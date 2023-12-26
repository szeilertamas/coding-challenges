function isPangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseSentence = string.toLowerCase();
  
    for (let char of alphabet) {
      if (lowercaseSentence.indexOf(char) === -1) {
        return false;
      }
    }
  
    return true;
  }

//   DESCRIPTION:
//   A pangram is a sentence that contains every single
//   letter of the alphabet at least once. For example,
//   the sentence "The quick brown fox jumps over the lazy dog"
//   is a pangram, because it uses the letters A-Z at least once
//   (case is irrelevant).
  
//   Given a string, detect whether or not it is a pangram.
//   Return True if it is, False if not.
//   Ignore numbers and punctuation.