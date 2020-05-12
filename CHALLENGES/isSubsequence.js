function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let arr1 = str1.split('')
    let arr2 = str2.split('')

    let i = 0
    let outStr  = ''
    for (let j=0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]){
            outStr += arr1[i]
            i++
        }
        if (outStr.length === arr1.length) {
            return true
        }
    }
    return false
  }


  //////////////////
  ///refactored: str can work with indexes, no need of converting to array,
  /// also instead of creating a new str, outStr, the counter 1 can be used to check with str1 length
  function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true; 
      j++;
    }
    return false;
  }


  //// recursive
  function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }