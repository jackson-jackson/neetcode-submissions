class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (const str of strs) {
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let p1 = 0;

        while (p1 < str.length) {
            let p2 = p1;

            while (str[p2] !== "#") {
                p2++;
            }

            const length = parseInt(str.slice(p1, p2), 10);
            const word = str.slice(p2 + 1, p2 + 1 + length);

            res.push(word);
            p1 = p2 + 1 + length;
        }

        return res;
    }
}
