/*
Description:
Move all exclamation marks to the end of the sentence

Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
*/

function remove (string) {
  const countOfMarks = string.match(/!/g)?.length
  const stripped = string.replace(/!/g, '')
  return stripped + '!'.repeat(countOfMarks)
}
