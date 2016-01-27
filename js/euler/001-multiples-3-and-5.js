/* 
 *
 * If we list all the natural numbers below 10 that are multiples 
 * of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 *
 */

function MultipleOf3And5Calculator() {

    return {
        sumAllMultiplesBelow
    };

    function sumAllMultiplesBelow(top){
        var sum = 0;
        for (var i = 0; i < top; i++) { // O(n)
            if (i % 3 === 0) { sum+=i; }
            else if (i % 5 === 0) { sum+=i; }
        }
        return sum;
    }

    // TODO: more efficient?
    // You don't need to traverse all items between 0 and top
    // You can just traverse the multiples of 3 and 5
}
