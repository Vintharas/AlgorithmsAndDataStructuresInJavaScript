/*
 * Quick Sort
 *
 * [5,3,1,4,2]
 * // pick 4 as pivot
 * [5,3,1,*4*,2]
 * // move elements so everything to the left is smaller than 4, everything to the right is larger than 4
 * [3,1,2,*4*,5]
 * // now we continue with the [3,1,2] subarray and pick 2 as pivot
 * [3,1,*2*]
 * [1,*2*,3]
 * // continue with the [5] subarray (it's sorted!)
 * // in fact all the array is sorted!!
 * [1,2,3,4,5]
 *
 */

function quickSort(array){                     // [5, 3, 1, 4, 2] // [5,4,3,2]
    // base case
    if (array.length <= 1) return array; 

    // pick a pivot
    let pivotIndex = parseInt(array.length/2);  // 1 // 3
   
    let smallerItems = array.filter((item,idx) => item <= array[pivotIndex] && idx !== pivotIndex); // [] // [2]
    let biggerItems = array.filter((item,idx) => item > array[pivotIndex] && idx !== pivotIndex); // [5,3,4,2] // [5,4]

    let sortedSmallerItems = quickSort(smallerItems); // sort [] // sort [2]
    let sortedBiggerItems = quickSort(biggerItems); // sort [5,4,3,2] // sort [5, 4]

    return [...sortedSmallerItems, array[pivotIndex], ...sortedBiggerItems];
}


// TODO: program it in-place!
