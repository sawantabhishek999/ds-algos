
// intermediate algos

// faster sorts - family of algos which can improve the complexity from O(n-squared) to O(nlogn)
// tradeoff between efficiency and simplicity 


// Merge Sort - splitting , merging and sorting
// based on the fact that 0 or 1 element arrays are already sorted

// in order to implement merge sort, it is important to implement a func responsible for merging two 
// sorted arrays

function merge(arr1, arr2) {
    let results = []
    let  i =0
    let j = 0

    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr[i]){
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i])
        i++
    }

    while(ij< arr2.length) {
        results.push(arr2[j])
        j++
    }
}


function mergeSort (arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

// O(nlogn)
// - splitting - log n decomposition , eg: 32 elements , 5 split ; 2(5) = 32
// sorting - n comparisions per decomposition
// space complexity - O(n), need wfh