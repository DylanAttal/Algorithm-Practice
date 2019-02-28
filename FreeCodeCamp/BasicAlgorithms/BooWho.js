/* Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false. */

// Solution using typeof
function booWho(bool) {
  return typeof(bool) === "boolean"
}

// Solution using if statement
function booWho(bool) {
  if (bool === true || bool === false) {
    return true
  } else {
    return false
  }
}
