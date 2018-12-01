/* To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

Dots over i's and any other letters don't count as rings. */

function olympicRing(randomLetters){
  let total = 0
  // a b c d e f g h i j k l m n o p q r s t u v w x y z 
  // 1 1 0 1 1 0 1 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 0 0
  // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
  // 1 2 0 1 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0
  randomLetters.split('').forEach(letter => {
    switch (letter) {
      case 'a':
        total += 1
        break
      case 'b':
        total += 1
        break
      case 'd':
        total += 1
        break
      case 'e':
        total += 1
        break
      case 'g':
        total += 1
        break
      case 'o':
        total += 1
        break
      case 'p':
        total += 1
        break
      case 'q':
        total += 1
        break
      case 'A':
        total += 1
        break
      case 'B':
        total += 2
        break
      case 'D':
        total += 1
        break
      case 'O':
        total += 1
        break
      case 'P':
        total += 1
        break
      case 'Q':
        total += 1
        break
      case 'R':
        total += 1
        break
      default:
        total += 0
    }
    return total
  }) 
  total = Math.floor(total / 2)
  return total > 3 ? 'Gold!' : total === 3 ? 'Silver!' : total === 2 ? 'Bronze!' : 'Not even a medal!'
}
