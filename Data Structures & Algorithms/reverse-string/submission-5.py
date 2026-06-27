class Solution:
    def reverseString(self, s: List[str]) -> None:
        left = 0
        right = len(s) - 1

        while left < right:
            leftVal = s[left]
            rightVal = s[right]

            s[left] = rightVal
            s[right] = leftVal
            left += 1
            right -= 1            
        