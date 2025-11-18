/**
 * LeetCode 88 — Merge Sorted Array
 *
 * Problem:
 * You are given two sorted arrays:
 * - nums1 of size m + n, where the first m elements are valid,
 *   and the remaining n spaces are empty (filled with zeros).
 * - nums2 of size n.
 *
 * Merge nums2 into nums1 so that nums1 becomes one sorted array.
 * The merge must happen in-place (modify nums1 directly).
 *
 * Approach:
 * Copy the first m valid elements of nums1 into nums1Copy.
 * Use two pointers:
 *   - p1 → tracks position in nums1Copy
 *   - p2 → tracks position in nums2
 *
 * At each position i in nums1, choose the smaller element from
 * nums1Copy[p1] or nums2[p2] and place it back into nums1.
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(m) — because nums1Copy stores m elements
 */

function merge(nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m); // copy valid elements
  let p1 = 0; // pointer for nums1Copy
  let p2 = 0; // pointer for nums2

  for (let i = 0; i < m + n; i++) {
    // if nums2 is exhausted OR nums1Copy has the smaller value
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
}

// Example Usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
