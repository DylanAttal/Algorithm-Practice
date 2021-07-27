/* Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too
high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When
the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return 
Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
AlphabetWar("z");        //=> Right side wins!
AlphabetWar("zdqmwpbs"); //=> Let's fight again!
AlphabetWar("zzzzs");    //=> Right side wins!
AlphabetWar("wwwwwwz");  //=> Left side wins! */

function alphabetWar(fight) {
   let leftSideTotal = 0
   let rightSideTotal = 0
   fight.split('').forEach(letter => {
     switch (letter) {
       case "w":
         leftSideTotal += 4
         break
       case "p":
         leftSideTotal += 3
         break
       case "b":
         leftSideTotal += 2
         break
       case "s":
         leftSideTotal += 1
         break
       case "m":
         rightSideTotal += 4
         break
       case "q":
         rightSideTotal += 3
         break
       case "d":
         rightSideTotal += 2
         break
       case "z":
         rightSideTotal += 1
         break
     }
   })
   if (leftSideTotal > rightSideTotal) {
     return "Left side wins!"
   } else if (rightSideTotal > leftSideTotal) {
     return "Right side wins!"
   } else {
     return "Let's fight again!"
   }
}
