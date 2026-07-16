class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let scoreCard = [];

        for (const o of operations) {
            if (o === "+") {
                scoreCard.push(Number(scoreCard[scoreCard.length - 1] + scoreCard[scoreCard.length - 2]));
            } else if (o === "D") {
                const score = scoreCard[scoreCard.length -1] * 2;
                scoreCard.push(Number(score));
            } else if (o === "C") {
                scoreCard.pop();
            } else {
                scoreCard.push(Number(o));
            }
        }

        return scoreCard.reduce((acc, curr) => acc + curr, 0);
    }
}
