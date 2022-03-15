/*
Given a list of integers, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"

Note: the digits in the resulting string should be sorted.
*/

function unusedDigits(...args) {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const fullNumber = args.join('');
  
  return digits.filter(x => !fullNumber.includes(x)).join('');
}
