/*
 * Insertion Sort
 *
 * - for each item in the array
 *    - for each previous item in the array
 *       - if item is smaller than previous item swap it
 */

describe("Insertion Sort", () => {

    describe("Given an empty array", () => {
        it("Should sort it all right", () => {
            // Arrange
            let emptyArray = [];
            // Act
            let sortedArray = insertionSort(emptyArray);
            // Assert
            expect(sortedArray.join(',')).toBe('');
        });
    });

    describe("Given an array with an item", () => {
        it("Should return it since it is already sorted", () => {
            // Arrange
            let array = [1];
            // Act
            let sortedArray = insertionSort(array);
            // Assert
            expect(sortedArray.join(',')).toBe('1');
        });
    });

    describe("Given an array with two unordered items", () => {
        it("Should sort them", () => {
            // Arrange
            let array = [2,1];
            // Act
            let sortedArray = insertionSort(array);
            // Assert
            expect(sortedArray.join(',')).toBe('1,2');
        });
    });

    describe("Given an array with many unordered items", () => {
        it ("Should sort them", () => {
            // Arrange
            let array = [2,1,8,4,55,22,0,29,11];
            // Act
            let sortedArray = insertionSort(array);
            // Assert
            expect(sortedArray.join(',')).toBe('0,1,2,4,8,11,22,29,55');
        });
    });
});
