/*
 * Quick Sort
 *
 * [5,3,1,4,2]
 * // pick 4 as pivot
 * [5,3,1,*4*,2]
 * // move elements so everything to the left is smaller than 4, everything to the right is larger than 4
 * [3,1,2,*4*,5]
 * // now we continue with the [3,1,2] subarray and pick 2 as pivot
 * [3,1,*2*]
 * [1,*2*,3]
 * // continue with the [5] subarray (it's sorted!)
 * // in fact all the array is sorted!!
 * [1,2,3,4,5]
 *
 */

describe("Quick Sort", () => {

    describe("Given an empty array", () => {
        it("Should sort it all right", () => {
            // Arrange
            let emptyArray = [];
            // Act
            let sortedArray = quickSort(emptyArray);
            // Assert
            expect(sortedArray.join(',')).toBe('');
        });
    });

    describe("Given an array with an item", () => {
        it("Should return it since it is already sorted", () => {
            // Arrange
            let array = [1];
            // Act
            let sortedArray = quickSort(array);
            // Assert
            expect(sortedArray.join(',')).toBe('1');
        });
    });

    describe("Given an array with two unordered items", () => {
        it("Should sort them", () => {
            // Arrange
            let array = [2,1];
            // Act
            let sortedArray = quickSort(array);
            // Assert
            expect(sortedArray.join(',')).toBe('1,2');
        });
    });

    describe("Given an array with many unordered items", () => {
        it ("Should sort them", () => {
            // Arrange
            let array = [2,1,8,4,55,22,0,29,11];
            // Act
            let sortedArray = quickSort(array);
            // Assert
            expect(sortedArray.join(',')).toBe('0,1,2,4,8,11,22,29,55');
        });
    });
});
