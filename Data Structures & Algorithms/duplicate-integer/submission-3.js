class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length <= 0) return false
        const newNums = new Set(nums);
        return nums.length !== newNums.size;
    }
}
