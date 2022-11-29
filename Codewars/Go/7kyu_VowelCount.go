// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

package kata

func GetCount(str string) (count int) {
  count = 0
  
  for _, l := range str {
    for _, v := range "aeiou" {
      if l == v {
        count++
      }
    }
  }
  
  return count
}
