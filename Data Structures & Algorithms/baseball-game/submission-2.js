class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let scoreCard = [];

        for (const o of operations) {
            if (o === "+") {
                scoreCard.push(Number(scoreCard.at(-1) + scoreCard.at(-2)));
            } else if (o === "D") {
                scoreCard.push(Number(scoreCard.at(-1) * 2));
            } else if (o === "C") {
                scoreCard.pop();
            } else {
                scoreCard.push(Number(o));
            }
        }

        return scoreCard.reduce((acc, curr) => acc + curr, 0);
    }
}
