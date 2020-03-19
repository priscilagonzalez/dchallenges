// 1365. How Many Numbers Are Smaller Than the Current Number


var smallerNumberThanCurrent = function(nums) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    result[i] = 0;
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] != nums[j] && nums[j] < nums[i]) {
        result[i] += 1;
      }
    }
  }
  return result;
}

console.log(smallerNumberThanCurrent([8,1,2,2,3]));
console.log(smallerNumberThanCurrent([6,5,4,8]));
console.log(smallerNumberThanCurrent([7,7,7,7]));

