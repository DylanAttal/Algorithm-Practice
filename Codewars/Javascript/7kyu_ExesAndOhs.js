/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean
and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
  if (!str.match(/[x]/ig) && !str.match(/[o]/ig)) {
    return true
  } else if (!str.match(/[x]/ig) || !str.match(/[o]/ig)) {
    return false
  }
  return str.match(/[x]/ig).length === str.match(/[o]/ig).length
}
