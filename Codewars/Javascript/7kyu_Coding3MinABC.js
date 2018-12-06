/*


*/

function findAB(numbers,c){
  let answer = []
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] * numbers[j] === c) {
          answer.push(numbers[i], numbers[j])
        }
      }
    }
  if (answer.length === 0) {
    return null
  } else {
    return answer.slice(0, 2)
  }
}
