// https://leetcode.com/problems/number-complement/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {

  var counter = 0;
  var temp = num;
  while (temp != 0 ) {
      temp >>= 1;
      counter++;
  }

  var mask = (1 << counter) - 1;
  return (~num) & mask;

};

console.log(findComplement(5));
console.log(findComplement(1));