/*
Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

/**
* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++) {
        if (!magazine.includes(ransomNote[i])) {
            return false
        } else {
            let index = magazine.indexOf(ransomNote[i])
            if (index > -1) {
                magazine = magazine.slice(0, index) + magazine.slice(index + 1)
            }
        }
    }
    return true
};
