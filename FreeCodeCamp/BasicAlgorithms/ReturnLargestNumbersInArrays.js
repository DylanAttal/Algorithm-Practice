/* Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each
member with array syntax arr[i]. */

// My solutions below

// Solution with for loop

function largestOfFour(arr) {
  let answer = []
  for (let i = 0; i < arr.length; i++) {
    answer.push(Math.max(...arr[i]))
  }
  return answer
}

// Solution with forEach

function largestOfFour(arr) {
  let answer = []
  arr.forEach(function(array) {
    answer.push(Math.max(...array))
  })
  return answer
}
