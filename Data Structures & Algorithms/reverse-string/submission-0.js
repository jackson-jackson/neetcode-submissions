class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let left = 0
        let right = s.length - 1

        while (left < right) {
            const leftVal = s[left]
            const rightVal = s[right]

            s[left] = rightVal
            s[right] = leftVal
            left++
            right--
        }

        return s
    }
}
