class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const sFreq = {};

    for (const char of s) {
      if (char in sFreq) {
        sFreq[char] += 1;
      } else {
        sFreq[char] = 1;
      }
    }

    const tFreq = {};

    for (const char of t) {
      if (char in tFreq) {
        tFreq[char] += 1;
      } else {
        tFreq[char] = 1;
      }
    }

    for (const char in sFreq) {
      if (sFreq[char] !== tFreq[char]) {
        return false;
      } 
    }

    return true
  }
}
