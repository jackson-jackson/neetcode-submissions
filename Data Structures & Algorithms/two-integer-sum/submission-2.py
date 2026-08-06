class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      seen = {}

      # for each num in nums check if target - num is in seen
      for i, num in enumerate(nums):
        #  if it isn't add num and its index to seen
        if target - num not in seen:
          seen[num] = i
        # if it is return the index of the seen value and the index of the num
        else:
          return [seen[target - num], i]

        