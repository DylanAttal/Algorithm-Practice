/* Your task is to find all the elements of an array that are not consecutive.

Create a function named allNonConsecutive

E.g., if we have an array [1,2,3,4,6,7,8,10] then 6 and 10 are non-consecutive.

You should return the results as an array of objects with two values i: <the index
of the non-consecutive number> and n: <the non-consecutive number>.

E.g., for the above array the result should be:

[
  {i: 4, n:6},
  {i: 7, n:10}
]
If the whole array is consecutive, then return an empty array.

The array will always have at least 2 elements and all the elements will be numbers.
The numbers will also all be unique and in ascending order. The numbers could be positive and/or negetive. */

function allNonConsecutive (arr) {
  let answer = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      answer.push({'i': i, 'n': arr[i]})
    }
  }
  return answer
}
