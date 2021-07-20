/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const arr = s.split('');
    const vowels = ['A', 'E', 'I', 'O', "U", 'a', 'e', 'i', 'o', 'u'];
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        if (vowels.indexOf(arr[left]) === -1) {
            left++;
            continue;
        }
        if (vowels.indexOf(arr[right]) === -1) {
            right--;
            continue;
        }
        
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        left++;
        right--;
    }
    
    return arr.join('');
};
