/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

const removeConsecutiveDuplicates = s => {
  s = s.split(' ');
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s.splice(i + 1, 1);
      i--;
    }
  }
  
  return s.join(' ');
}
