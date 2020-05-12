function productOfArray(arr) {
    if (!arr) return 0
    if (arr.length === 0) return 0
    if (arr.length === 1) return arr[0]
    return arr[0] * productOfArray(arr.slice(1))
}