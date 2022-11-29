// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

package kata

import (
  "math"
  "strings"
)

func FindShort(s string) int {
  length := math.MaxInt
  
  for _, word := range strings.Split(s, " ") {
    if len(word) < length {
      length = len(word)
    }
  }
  
  return length
}
