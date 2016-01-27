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

describe("Even Fibonacci Numbers", () => {

    // BRUTE FORCE: iterate over all items and add them
    //
    describe("getFibonacciIterator", () => {
        
        describe("given a threshold lower than 1", () => {
            it("should not iterate over any number", () => {
                // Arrange
                let fibonacci = getFibonacciIterator(0);
                // Act
                let numbers = Array.from(fibonacci);
                // Assert
                expect(numbers.join(',')).toBe('');
            });
        });

        describe("given a threshold of 1", () => {
            it("should iterate over only the number 1", () => {
                // Arrange
                let fibonacci = getFibonacciIterator(1);
                // Act
                let numbers = Array.from(fibonacci);
                // Assert
                expect(numbers.join(',')).toBe('1');
            });
        });

        describe("given a threshold of 2", () => {
            it("should iterate over the numbers 1 and 2", () => {
                // Arrange
                let fibonacci = getFibonacciIterator(2);
                // Act
                let numbers = Array.from(fibonacci);
                // Assert
                expect(numbers.join(',')).toBe('1,2');
            });
        });

        describe("given a threshold of 3", () => {
            it("should iterate over the numbers 1 and 2 and 3 (1+2)", () => {
                // Arrange
                let fibonacci = getFibonacciIterator(3);
                // Act
                let numbers = Array.from(fibonacci);
                // Assert
                expect(numbers.join(',')).toBe('1,2,3');
            });
        });

        describe("given a threshold of 90", () => {
            it("should iterate over the numbers 1,2,3,etc)", () => {
                // Arrange
                let fibonacci = getFibonacciIterator(90);
                // Act
                let numbers = Array.from(fibonacci);
                // Assert
                expect(numbers.join(',')).toBe('1,2,3,5,8,13,21,34,55,89');
 
            });
        });

    });

    describe("FibonacciCalculator", () => {
        describe("SumEvenNumbersUnder", () => {
            describe("Given a number like 4000000", () => {
                it("Should add all even fibonacci numbers smaller than 4000000", () => {
                    // Arrange
                    let calculator = new FibonacciCalculator();
                    // Act
                    let sum = calculator.sumEvenNumbersUnder(4000000);
                    // Assert
                    expect(sum).toBe(4613732);
                });

            });
        });
    });

});
