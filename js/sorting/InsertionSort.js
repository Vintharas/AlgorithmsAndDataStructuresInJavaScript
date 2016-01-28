/*
 * Insertion Sort
 *
 * - for each item in the array
 *    - for each previous item in the array
 *       - if item is smaller than previous item swap it
 */

function insertionSort(array){
    if (array.length <= 1) return array;

    for(let i = 1; i < array.length; i++) {       // 1 while i<2
        for (let j = i; j > 0; j--) {             // 1 while j>0...
            if (array[j] < array[j-1]){           //     a[1] < a[0]
                swap({from:j, to: j-1, array});   //     swap(1,0,array)
            }
        }
    }
    
    return array;

    function swap({from, to, array}){
        let valueFrom = array[from];
        array[from] = array[to];
        array[to] = valueFrom;
    }
}

