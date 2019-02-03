/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWordLength(str) {
  let lengths = str.split(' ').map(word => word.length )
  return Math.max(...lengths)
}
