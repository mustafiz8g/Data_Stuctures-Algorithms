/**
 * LeetCode 344 — Reverse String
 *
 * Problem:
 * Reverse an array of characters in-place using O(1) extra memory.
 *
 * Approach:
 * Two-pointer technique.
 * Swap the first and last characters until the middle is reached.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function reverseString(arr) {
  let len = arr.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = arr[i];
    arr[i] = arr[len - i - 1];
    arr[len - i - 1] = temp;
  }
}

// Example:
let chars = ["h", "e", "l", "l", "o"];
reverseString(chars);
console.log(chars); // Output: [ 'o', 'l', 'l', 'e', 'h' ]
