/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives,
and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. */

function invert(array) {
   let output = []
   for (let i = 0; i < array.length; i++) {
     if (array[i] === 0) {
       output.push(array[i])
     } else {
       output.push((array[i]) * (-1))
     }
   }
   return output
}
