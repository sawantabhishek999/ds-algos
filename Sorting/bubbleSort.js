// compare over two consecutive elements in a loop, bubble up the sorted value to the top


function bubbleSort(arr) {
    for(let i = arr.length; i> 0 ; i--){
        for(let  j = 0; j < i-1; j++) {
            if (arr[j] > arr[j+1]) {
                //swap elements
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]] 
            }
        }
    }
    return arr
}

bubbleSort([10,15,12,17,2,16])


// optimised - nned to optimise as the interation continues even after the arr is sorted
// use a variable noswaps, set it to true when there is no swap, if noswap remains true then the sorting is completed


function bubbleSort(arr) {
    let noSwaps = true
    for(let i = arr.length; i> 0 ; i--){
        for(let  j = 0; j < i-1; j++) {
            if (arr[j] > arr[j+1]) {
                //swap elements
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]] 
                noSwaps = true
            }
        }
        if (noSwaps) break;
    }
    return arr
}
bubbleSort([10,15,12,17,18,19])

//Big O- time complexity => O(n-squared) => nested loop
//best case: O(n) ; when almost sorted