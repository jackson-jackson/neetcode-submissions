class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const seen = new Set()

      for (let num of nums) {
        if (Object.hasOwn(seen, num)) {
          return true
        } else {
          seen[num] = true
        }
      }

      return false
    }
}
