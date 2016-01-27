/*
 * ## 002. Even Fibonacci numbers
 *
 * Each new term in the Fibonacci sequence is generated 
 * by adding the previous two terms. By starting with 1 and 2, 
 * the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 
 * By considering the terms in the Fibonacci sequence 
 * whose values do not exceed four million, find the sum 
 * of the even-valued terms.
 *
 */

function* getFibonacciIterator(n){
    if ( n < 1) return;
    if ( n >= 1) yield 1;
    if ( n >= 2) yield 2;
    
    let previousPreviousNumber = 1,
        previousNumber = 2,
        currentNumber = previousPreviousNumber + previousNumber;

    while (currentNumber <= n){
        yield currentNumber;
        previousPreviousNumber = previousNumber;
        previousNumber = currentNumber;
        currentNumber = previousPreviousNumber + previousNumber;
    }
}

class FibonacciCalculator{
    sumEvenNumbersUnder(n){
        let fibonacci = getFibonacciIterator(n);
        let numbers = Array.from(fibonacci);
        return numbers
            .filter(n => n % 2 === 0)
            .reduce((aggr, n) => aggr+n, /* aggr */ 0);
    }
}


