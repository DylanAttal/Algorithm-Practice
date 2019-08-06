/* Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words
"Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0 */

function sumOfABeach (beach) {
  let sandCount = (beach.match(/sand/ig) || []).length
  let waterCount = (beach.match(/water/ig) || []).length
  let fishCount = (beach.match(/fish/ig) || []).length
  let sunCount = (beach.match(/sun/ig) || []).length
  return sandCount + waterCount + fishCount + sunCount
}
