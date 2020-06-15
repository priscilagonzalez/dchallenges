/* Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false */

function hasPalindromePermutation(string) {

  const unpairedCharacters = new Set();

  for (let char of string) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  return unpairedCharacters.size <= 1;
}

console.log(hasPalindromePermutation("civic"));
console.log(hasPalindromePermutation("civil"));


//Complexity: O(n) time, since we're making one iteration through the n characters in the string
