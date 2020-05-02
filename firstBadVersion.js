// https://leetcode.com/problems/first-bad-version/

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let i = 1;
      let j = n;

      while ( i <= j) {
          const midpoint = Math.floor((i + j) / 2);
          const isBad = isBadVersion(midpoint);
          if (!isBad) {
              i = midpoint + 1;
              continue;
          }

          const isBadPrev = isBadVersion(midpoint - 1);
          if (!isBadPrev) {
              return midpoint;
          }
          j = midpoint - 1;
      }
  }
};