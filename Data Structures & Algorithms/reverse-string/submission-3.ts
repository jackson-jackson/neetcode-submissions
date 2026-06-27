class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        let left = 0
        let right = s.length -1

        while (left < right) {
            let leftVal = s[left]
            let rightVal = s[right]

            s[left++] = rightVal
            s[right--] = leftVal
        }
    }
}
