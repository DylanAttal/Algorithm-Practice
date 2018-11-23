/* Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

function findOdd(array) {
  return array.find(searchingElement => {
    const foundMatches = array.filter(element => {
      return element === searchingElement
    })
    return foundMatches.length % 2 === 1
  })
}
