function same (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let freqCounter1 = {}
    let freqCounter2 = {}
    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
     for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }
    console.log(freqCounter1)
    console.log(freqCounter2)

    for(let key in freqCounter1){
        if (!(key ** 2 in freqCounter2)){
            return false
        }
        if(freqCounter1[key] !== freqCounter2[key ** 2]) {
            return false
        }
    }
    return true
}

same([1,2,3,4,5], [1,4,9,16,25])
same([1,2,3,4,5], [1,4,9,16,11])
