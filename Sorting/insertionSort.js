/* Isertion sort
    build up the sort by gradually creating a larger left half which is always sorted

    - start by picking the second elemnt in the array
    - now compare the second element with the one before it and swapif necessary
    - continue to the next element and if it is in the incorrect order , iterate through the sorted position(i.e. left side)
    to place the element in the correct place.
    - repeat until the array is sorted
*/

function insertionSort(arr) {
    for (var i = 1; i < arr.length ; i++) {
        var currentVal = arr[i];
        for(var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }

    return arr
}

insertionSort([2, 1, 9, 76, 4])

// worst case => O(n-squared)
// best case => O(n)

// suitable for live data or streaming data