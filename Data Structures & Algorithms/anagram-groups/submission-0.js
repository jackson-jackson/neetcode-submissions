class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {}
        for (const str of strs) {
            let key = str.split("").sort().join("")
            if (key in groups) {
                groups[key].push(str)
            } else {
                groups[key] = [str]
            }
        }
        return Object.values(groups)
    }
}
