function countUniqueValues(arr) {
    let i = 0
    let count = 0 
    while(i < arr.length) {
        if (arr[i] !== arr[i+1]){
            count++
        }
        i++
    }
    return count
}

countUniqueValues([1,1,2,2,3,3,5])


////////////////////////////
// no need of variable for maintaing the count
function countUniqueValuesRefactored(arr) {
    let i = 0
    let j = 1
    if (arr.length === 0) {
        return 0
    }
    while(j < arr.length) {
        if (arr[i] === arr[j]){
            j++
        } else {
            i++
            arr[i] =arr[j]
        }
    }
    return i+1
}

countUniqueValues([1,1,2,2,3,4,5,11,13])


