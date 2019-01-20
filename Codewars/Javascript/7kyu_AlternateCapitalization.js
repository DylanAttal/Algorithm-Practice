/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */

function capitalize(s){
  let evenString = []
  let oddString = []
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenString.push(s[i].toUpperCase())
    } else {
      evenString.push(s[i])
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (i % 2 != 0) {
      oddString.push(s[i].toUpperCase())
    } else {
      oddString.push(s[i])
    }
  }
  return [evenString.join(''), oddString.join('')]
};
