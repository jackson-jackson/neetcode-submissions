func reverseString(s []byte) {
    left := 0
    right := len(s) -1

    for left < right {
        leftVal := s[left]
        rightVal := s[right]

        s[left] = rightVal
        s[right] = leftVal
        left++
        right--
    }    
}
