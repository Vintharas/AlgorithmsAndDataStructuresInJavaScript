/*
 * Merge Sort
 *
 *
 * 1. divide in half
 * 2. when array divided in subarrays of one element
 * 3. reconstruct (merge) in sort order
 *
 */

function mergeSort(array){
    if (array.length <= 1) return array;

    // divide in half
    // reconstruct in order

    let middleIndex = parseInt(array.length/2);
    let firstHalf = array.slice(0, middleIndex);
    let secondHalf = array.slice(middleIndex, array.length);

    let sortedFirstHalf = mergeSort(firstHalf);
    let sortedSecondHalf = mergeSort(secondHalf);

    return sortSubArrays(sortedFirstHalf, sortedSecondHalf);
}

function sortSubArrays(firstHalf, secondHalf){
   let array = [...firstHalf, ...secondHalf];
   return insertionSort(array); // reusing insertionSort to order partially sorted arrays
}
