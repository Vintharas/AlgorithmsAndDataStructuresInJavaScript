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

describe("BubbleSort", () => {

    describe("Given an empty array", () => {
        it("Should sort it all right", () => {
            // Arrange
            let emptyArray = [];
            // Act
            let sortedArray = bubbleSort(emptyArray);
            // Assert
            expect(sortedArray.join(',')).toBe('');
        });
    });

    describe("Given an array with an item", () => {
        it("Should return it since it is already sorted", () => {
            // Arrange
            let array = [1];
            // Act
            let sortedArray = bubbleSort(array);
            // Assert
            expect(sortedArray.join(',')).toBe('1');
        });
    });

    describe("Given an array with two unordered items", () => {
        it("Should sort them", () => {
            // Arrange
            let array = [2,1];
            // Act
            let sortedArray = bubbleSort(array);
            // Assert
            expect(sortedArray.join(',')).toBe('1,2');
        });
    });

    describe("Given an array with many unordered items", () => {
        it ("Should sort them", () => {
            // Arrange
            let array = [2,1,8,4,55,22,0,29,11];
            // Act
            let sortedArray = bubbleSort(array);
            // Assert
            expect(sortedArray.join(',')).toBe('0,1,2,4,8,11,22,29,55');
        });
    });
});
