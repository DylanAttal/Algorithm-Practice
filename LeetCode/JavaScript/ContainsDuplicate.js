// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Create dictionary with keys of element in nums and value
    // of that element's count in nums 
    let countOfElements = {};
    nums.forEach(num => {
        if (countOfElements[num]) {
            countOfElements[num]++
        } else {
            countOfElements[num] = 1
        }
    });
    // If any key has a value greater than one, return false,
    // else return true
    const values = Object.values(countOfElements);
    
    return values.some(x => x > 1);
};
