
/**
 * LeetCode 121 — Best Time to Buy and Sell Stock
 *
 * Problem:
 * You are given an array 'prices', where prices[i] is the stock price on day i.
 * You must find the maximum profit you can achieve by buying on one day and
 * selling on another day in the future. If no profit is possible, return 0.
 *
 * Approach:
 * Track the minimum price seen so far (min).
 * For each price, compute the profit if sold today: price - min.
 * Update maxProfit whenever a bigger profit is found.
 * This ensures we always buy before selling and use only a single pass.
 *
 * Time Complexity: O(n) — One pass through the array
 * Space Complexity: O(1) — Constant extra space
 */

function maxProfit(prices) {
  let min = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // update the minimum price so far
    if (prices[i] < min) {
      min = prices[i];
    }

    // calculate today's profit
    let profit = prices[i] - min;

    // update maximum profit
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

// Example Usage:
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
