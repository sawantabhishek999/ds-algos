// similar to bubbleSort, but instead of first placing large values into sorted position,
// it places small values in the sorted position

function selectionSort (arr) {
    for( var i = 0; i < arr.length; i++) {
        let min = i
        for (var j= i+1 ; j < arr.length; j++) {
            console.log(i, j)
            if (arr[j] < arr[min]) { // set min equal to index of lowest number
                min  = j
            }
        }
        // reduce number of swaps
        if (i !== lowest) {
            // es2015 swap shorthand
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    return arr
}

selectionSort([1,5,3,2,7,9])

// selection sort is only better than bubble sort as the swapping is done only once in a loop, 
// in bubble sort we swap during every comparison
// writes to memory is reduced