function isPalindrome(str) {
    function reverse(str){
        if (str.length === 0) return ''
        if (str.length === 1) return str[0]
        return reverse(str.slice(1)) + str[0]
    }
    if (str === reverse(str)){
        return true
    }
    return false
}