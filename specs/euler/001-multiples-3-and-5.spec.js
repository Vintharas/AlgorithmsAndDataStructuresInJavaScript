/* 
 *
 * If we list all the natural numbers below 10 that are multiples 
 * of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 *
 */

describe("Multiples of 3 and 5", () => {

    // TODO: How the heck do you do parameterized tests in jasmine? XD
    describe("Given the number 4", () => {
        it("should get the sum of all multiples of 3 and 5 under 4", () => {
            // Arrange
            var calculator = MultipleOf3And5Calculator();
            // Act
            var sum = calculator.sumAllMultiplesBelow(4);
            // Assert
            expect(sum).toBe(3);
        });
    });

    describe("Given the number 6", () => {
        it("should get the sum of all multiples of 3 and 5 under 6", () => {
            // Arrange
            var calculator = MultipleOf3And5Calculator();
            // Act
            var sum = calculator.sumAllMultiplesBelow(6);
            // Assert
            expect(sum).toBe(8);
        });
    });

    describe("Given the number 10", () => {
        it("should get the sum of all the multiples of 3 and 5 under 10", () => {
            // Arrange
            var calculator = MultipleOf3And5Calculator();
            // Act
            var sum = calculator.sumAllMultiplesBelow(10);
            // Assert
            expect(sum).toBe(23); // 3 + 6 + 9 + 5
        });
    });

    describe("Given the number 11", () => {
        it("should get the sum of all the multiples of 3 and 5 under 11", () => {
            // Arrange
            var calculator = MultipleOf3And5Calculator();
            // Act
            var sum = calculator.sumAllMultiplesBelow(11);
            // Assert
            expect(sum).toBe(33);
        });
    });

    describe("Given the number 13", () => {
        it("should get the sum of all the multiples of 3 and 5 under 13", () => {
            // Arrange
            var calculator = MultipleOf3And5Calculator();
            // Act
            var sum = calculator.sumAllMultiplesBelow(13);
            // Assert
            expect(sum).toBe(45); // 3 + 6 + 9 + 5 + 10 + 12 => 45
        });
    });

    describe("Given the number 1000", () => {
        it("should get the sum of all the multiples of 3 and 5 under 1000", () => {
            // Arrange
            var calculator = MultipleOf3And5Calculator();
            // Act
            var sum = calculator.sumAllMultiplesBelow(1000);
            // Assert
            expect(sum).toBe(233168); 
        });
    });
    

});

