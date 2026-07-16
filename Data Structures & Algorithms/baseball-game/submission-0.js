class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let scoreCard = [];

        for (const o of operations) {
            if (o !== "+" && o !== "D" && o !== "C") {
                scoreCard.push(Number(o));
            }

            if (o === "+") {
                const last = scoreCard[scoreCard.length - 1];
                const secondLast = scoreCard[scoreCard.length - 2];
                scoreCard.push(Number(last + secondLast));
            }

            if (o === "D") {
                const score = scoreCard[scoreCard.length -1] * 2;
                scoreCard.push(Number(score));
            }

            if (o === "C") {
                scoreCard.pop();
            }
        }

        return scoreCard.reduce((acc, curr) => acc + curr, 0);
    }
}
