/* Find the sum of the odd numbers within an array, after cubing the initial integers.
The function should return undefined/None/nil/NULL if any of the values aren't numbers. */

function cubeOdd(arr) {
  return !arr.some(isNaN) ? arr.map(num => Math.pow(num, 3)).filter(num => num % 2 != 0).reduce((acc, val) => acc + val, 0) : undefined 
}
