/**
 * LeetCode 27 — Remove Element
 *
 * Problem:
 * Given an array nums and a value val, remove all occurrences of val in-place.
 * The relative order of elements may change. Return the number of elements
 * remaining after removal.
 *
 * Approach:
 * Use two pointers.  
 * Pointer `i` scans the array.
 * Pointer `x` keeps track of the position to write non-val elements.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) — in-place modification
 */

function removeElements(nums, val) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }

  return x;
}

// Example Usage:
console.log(removeElements([1, 3, 4, 4, 4, 2], 4)); // Output: 3
