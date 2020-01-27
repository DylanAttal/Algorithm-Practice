/* Complete the method so that it formats the words into a single comma separated value.
The last word should be separated by the word 'and' instead of a comma. The method takes in
an array of strings and returns a single formatted string. Empty string values should be ignored. 
Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return "" */

function formatWords(words) {
  if (!words) {
    return ''
  }
  let filteredWords = words.filter(Boolean)
  if (!filteredWords) {
    return ''
  }
  if (filteredWords.length === 1) {
    return `${filteredWords[0]}`
  }
  if (filteredWords.length === 2) {
    return `${filteredWords[0]} and ${filteredWords[1]}`
  }
  let sentence = ''
  for (let i = 0; i < filteredWords.length; i++) {
    if (i === filteredWords.length - 2) {
      sentence += `${filteredWords[i]} `
    } else if (i === filteredWords.length - 1) {
      sentence += `and ${filteredWords[i]}`
    } else {
    sentence += `${filteredWords[i]}, `
    }
  }
  return sentence
}
