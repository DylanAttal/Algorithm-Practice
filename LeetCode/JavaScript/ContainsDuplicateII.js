/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in
the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105

*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // Create dictionary with each element's last observed index
    let dictionary = {};
    
    // Iterate through nums.
    for (let i = 0; i < nums.length; i++) {
        // If the element has no observed index in the dictionary,
        // then make one.
        if (dictionary[nums[i]] === undefined) {
            dictionary[nums[i]] = i;
        // Else determine if the the absolute value of the currrent index
        // and the last observed index is less than or equal to k.
        } else {
            if (Math.abs(dictionary[nums[i]] - i) <= k) {
                // If so, then return true.
                return true;
            }
            // Regardless, update the last observed index of the element.
            dictionary[nums[i]] = i;
        }
    }
    
    // After all the calculations, return false since none of the elements
    // and their index positions fulfilled the requirements.
    return false;
};
