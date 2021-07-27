/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */


function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
      return []
    } else {
      let positives = input.filter(number => number > 0)
      let negatives = input.filter(number => number < 0)
      let output =  []
      output.push(positives.length)
      output.push(negatives.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0));
      return output
      }
    }
