/* Write a function that splits an array (first argument) into groups the length of
size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  let twoDimensionalArray = []
  while(arr.length) {
    twoDimensionalArray.push(arr.splice(0, size))
  }
  return twoDimensionalArray
}
