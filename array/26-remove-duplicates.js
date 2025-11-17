/**
 * LeetCode 26 — Remove Duplicates from Sorted Array
 *
 * Problem:
 * Remove duplicates in-place from a sorted array.
 * Return the number of unique elements.
 *
 * Approach:
 * Two pointers.
 * `x` keeps track of the last unique element.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function removeDuplicates(nums) {
  let x = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }

  return x + 1;
}

// Example:
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Output: 5