class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let highest = 0;

        for (const num of nums) {
            if (num === 1) {
                count++;
            } else {
                count = 0;
            }

            highest = Math.max(highest, count);
        }

        return highest;
    }
}
