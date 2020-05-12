function avgPair(arr, num) {
    if (arr.length === 0) {
        return false
    }
    let left =0
    let right = arr.length -1
    while (left < right) {
        let avg = arr[left] + arr[right] /2
        if (avg === num) {
            return true
        }
        if (avg > num) {
            right--
        } else {
            left++
        }
    }
    return false
}


////////////////////////// same soln
function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }