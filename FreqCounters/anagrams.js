function validAnagrams(str1, str2){
    if (str1.length !== str2.length){
       return false
    }
    const strArr1 = str1.split('')
    const strArr2 = str2.split('')

    let freqCounter1 = {}
    let freqCounter2 = {}
    for(let val of strArr1){
        freqCounter1[val] = (freqCounter1[val] || 0) +1
    }
    for (let val of strArr2){
        freqCounter2[val] = (freqCounter2[val] || 0) +1
    }

    for (let key in freqCounter1) {
        if(!key in freqCounter2){
            return false
        }
        if (freqCounter1[key] !== freqCounter2[key]){
            return false
        }
    }

    return true
}


function validAnagramsOptimized(str1, str2) {
    if (first.length !== second.length) {
        return false;
      }
    
      const lookup = {};
    
      for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
      }
      console.log(lookup)
    
      for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
          return false;
        } else {
          lookup[letter] -= 1;
        }
      }
    
      return true;
}

// validAnagrams('', '')
validAnagrams('iceman', 'cinemae')