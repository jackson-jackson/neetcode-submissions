class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}
        // For each number, calculate what number we need (target minus current)
        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i]
            // check if need is in seen, otherwise store nums[i]
            if (seen[need] !== undefined) return [seen[need], i] 
            seen[nums[i]] = i
        }
    }
}
