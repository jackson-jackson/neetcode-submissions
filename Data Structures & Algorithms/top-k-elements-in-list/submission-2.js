class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    return [...nums.reduce((map, num) => map.set(num, (map.get(num) || 0) + 1), new Map())]
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map(([num]) => num);
  }
}
