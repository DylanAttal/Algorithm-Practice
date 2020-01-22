/* Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3 */

function highestRank(arr) {
  let countObj = {}
  let countFunc = keys => countObj[keys] = ++countObj[keys] || 1;
  arr.forEach(countFunc)
  return Object.keys(countObj).reduce((a, b) => countObj[a] > countObj[b] ? parseInt(a) : parseInt(b))
}
