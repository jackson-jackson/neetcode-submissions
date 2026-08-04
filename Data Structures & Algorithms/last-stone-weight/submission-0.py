import heapq

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        max_heap = [-stone for stone in stones]
        heapq.heapify(max_heap)

        while len(max_heap) > 1:
            heavy_a, heavy_b = heapq.heappop(max_heap), heapq.heappop(max_heap)

            if heavy_a != heavy_b:
                heapq.heappush(max_heap, heavy_a - heavy_b)
        
        if len(max_heap) == 1:
            return -max_heap[0]
        elif not max_heap:
            return 0
