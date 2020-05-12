function maxSubArraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length < num) return null
    let maxSum = 0
      let tempSum = 0
      for(let i = 0; i < num; i++){
          tempSum += arr[i]
      }
      maxSum = tempSum
      //console.log(maxSum)
      // tempSum = 0
      //console.log(maxSum)
      for (let i = 1; i < arr.length-1; i++) {
         // console.log()
         //tempSum = 0
         //console.log(i,tempSum, arr[i-1], arr[num-1+i])
          tempSum = tempSum - arr[i-1] + arr[num-1+i]
          //console.log(tempSum)
          if (tempSum > maxSum){
              maxSum = tempSum
              //console.log('sum %o', maxSum)
          }
      }
      return maxSum
  }
  
  maxSubArraySum([-3,4,0,-2,6,-1], 2)