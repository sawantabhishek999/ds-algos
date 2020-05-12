function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    if (num1 === num2){
        return true
    }
    let arr1 = num1.split('')
    let arr2 = num2.split('')

    let freqCounter1 = {}
    let freqCounter2 = {}

    for(var val in arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
    for(var val in arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }

    for(var key in freqCounter1) {
        if(!(key in freqCounter2)) {
            return false
        }
        if (freqCounter1[key] !== freqCounter2([key])){
            return false
        }
    }
    return true
  }

  sameFre
  