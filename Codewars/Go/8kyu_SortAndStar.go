// You will be given a vector of strings. You must sort it alphabetically (case-sensitive,
// and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

package kata

import (
  "sort"
  "strings"
)

func TwoSort(arr []string) string {
  sort.Strings(arr)
  chars := strings.Split(arr[0], "")
  return strings.Join(chars, "***")
}
