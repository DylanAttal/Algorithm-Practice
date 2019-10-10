/* Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([1, 2, 10]) Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell). */

function sumOfDifferences(arr) {
  let sortedArr = arr.sort((a, b) => b - a)
  let output = 0
  for (let i = 0; i < sortedArr.length - 1; i++) {
    output += (sortedArr[i] - sortedArr[i + 1])
  }
  return output
}
