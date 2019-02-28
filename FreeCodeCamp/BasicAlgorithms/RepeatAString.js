/* Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number. */

function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : ''
}

repeatStringNumTimes("abc", 3);
