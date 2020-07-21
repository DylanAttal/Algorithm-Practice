/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = {}
    strs.forEach(word => {
        const alphabetizedWord = word.split('').sort().join('')
        if (anagrams[alphabetizedWord]) {
            return anagrams[alphabetizedWord].push(word)
        }
        anagrams[alphabetizedWord] = [word]
    })
    return Object.values(anagrams)
};
