class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const opening = ["(", "{", "["]
        const closing = [")", "}", "]"]

        let stack = []

        for (let char of s) {
            if (opening.includes(char)) {
                 stack.push(char)
            } else if (closing.includes(char)) {
                 let index = closing.indexOf(char)
                 if (stack.length === 0 || stack.at(-1) !== opening[index]) {
                    return false
                 } else {
                    stack.pop()
                 }
            }
        }

        return stack.length === 0
    }
}
