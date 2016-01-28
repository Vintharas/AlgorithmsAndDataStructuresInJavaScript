/*
 *
 * BubbleSort
 *
 * - while items to sort
 *   - for each item
 *      - compare with neighbor
 *      - if bigger, swap
 *
 */


function bubbleSort(array){
    // degenerate case
    if (array.length <= 1) return array;

    let itemsAreSwapped = false;
    do {
        itemsAreSwapped = false;
        for(let i = 0; i < array.length - 1; i++){
            if (array[i] > array[i+1]){
                let swappedItem = array[i];
                array[i] = array[i+1];
                array[i+1] = swappedItem;
                itemsAreSwapped = true;
            }
        }
    } while(itemsAreSwapped);

    return array;
}

