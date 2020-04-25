/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?
*/

/*
var sortColors = function(nums) {

  var storage = {};

  for (var i = 0; i < 0; i++) {
      if (storage[nums[i]]) {
          storage[nums[i]] ++;
      } else {
          storage [nums[i]] = 1;
      }
  }

  var red = array(2).fill(0);
  var white = array(2).fill(1);
  var blue = array(2).fill(2);

  red.concat(white).concat(blue);

};
*/

var sortColors = function(nums) {
  var i = 0;
  var j = 0;
  while(i < nums.length) {
      console.log(nums);
      var temp = nums.shift();
      if(temp === 2) {
          nums.push(temp);
      } else if(temp === 0) {
          j += 1;
          nums.splice(nums.length-i, 0, temp);
      } else {
          nums.splice(nums.length-i+j, 0, temp);
      }
      i += 1;
  }
  return nums;
};

console.log(sortColors([2,0,2,1,1,0]));
// console.log(sortColors([1,0]));
// console.log(sortColors([0,1,2]));
// console.log(sortColors([0,0,1]));


