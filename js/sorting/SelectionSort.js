/*
 * Selection Sort
 *
 * 1. Enumerate the array from the first unsorted item to the end
 * 2. Identify smallest item
 * 3. Swap smallest item with the first unsorted item 
 */


function selectionSort(array){
    if (array.length <= 1) return array;

    for(let i = 0; i < array.length; i++){          // i = 0
        let s = i; // as in Smallest                // s = i = 0
        for(let j = i; j < array.length - 1; j++) {
            if (array[j+1] < array[s]) {            // a[1] < a[0]...
                s = j+1;
            }
        }
        swap({from:s, to: i, array});
    }

    return array;

    function swap({from, to, array}){
        let toValue = array[to];
        array[to] = array[from];
        array[from] = toValue;
    }
}
