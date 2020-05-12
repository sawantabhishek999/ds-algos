function sunSubArray(arr, num) {
    if (arr.length <= num) {
        return null
    }
    let max = 0
    let sum = 0
    for(let i = 0; i < num; i++) {
        max += arr[i]
    }
    sum = max
    for(let i = num; i < arr.length; i++) {
        sum = sum - arr[i - num] + arr[i]
        max = Math.max(max, sum)
    }
    return max
}

sunSubArray([2,6,9,2,1,8,5,6,3], 3)