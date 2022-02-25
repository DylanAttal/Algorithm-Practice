/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. 

E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
  let answer = '';
  
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/)) {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  
  return answer;
}
