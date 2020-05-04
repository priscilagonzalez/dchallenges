/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const counts = {};

  for (const char of magazine) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (const char of ransomNote) {
    if (!counts[char]) {
      return false;
    }

    counts[char]--;
  }

  return true;
};

console.log(canConstruct("a", "b")); // -> false
console.log(canConstruct("aa", "ab")); // -> false
console.log(canConstruct("aa", "aab")); // -> true