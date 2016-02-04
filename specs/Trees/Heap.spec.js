/*
 * Binary Heap :) - Max-heap
 *
 * A Tree where each node can have up 2 children and
 * where for each node:
 *     - The node value is larger or equal to that of its children (max-heap, for min-heap is smaller or equal).
 *
 *
 * - Heap
 *    - Create new heap
 *    - Create new heap with node
 *
 */

describe("Heap", () => {

    describe("Given that I have no heap", () => {
       it("should be able to create an empty one", () => {
           // Arrange, Act
           let heap = Heap();
           // Assert
           expect(heap.root).toBeUndefined();
       }); 

       it("should be able to create a heap with a root", () => {
           // Arrange, Act
           let heap = Heap(100);
           // Assert
           expect(heap.root).toBeDefined();
           expect(heap.root.value).toBe(100);
       }); 
    });

    describe("Given that I have an empty heap", () => {
        it("Should be able to add a root node", () => {
            // Arrange
            let heap = Heap();
            // Act
            heap.add(10);
            // Assert
            expect(heap.root).toBeDefined();
            expect(heap.root.value).toBe(10);
        });
    });

    describe("Given that I have an heap with a root node", () => {
        var heap;
        
        beforeEach(() => heap = Heap(10));
        
        describe("When I add a smaller value", () => {
            it("Should add a new left child node to the root", () => {
                // Arrange, Act
                heap.add(1);
                // Assert
                expect(heap.root.left).toBeDefined();
                expect(heap.root.left.value).toBe(1);
            });
        });

        describe("And a left child node", () => {

            beforeEach(() => heap.add(1));

            describe("When I add a smaller value", () => {
                it("Should add a new right child node to the root", () => {
                // Arrange, Act
                heap.add(2);
                // Assert
                expect(heap.root.right).toBeDefined();
                expect(heap.root.right.value).toBe(2);
                });

            });

            describe("When I add a bigger value", () => {
                it("Should become the root and the current value should go down the tree", () => {
                    // Arrange, Act
                    heap.add(1000);
                    // Assert
                    expect(heap.root.value).toBe(1000);
                    expect(heap.root.right.value).toBe(10);
                });
            });
        });

        describe("When I add a bigger value", () => {
            it("Should become the root node and the current value should go down the tree", () => {
                // Arrange, Act
                heap.add(1000);
                // Assert
                expect(heap.root.value).toBe(1000);
                expect(heap.root.left.value).toBe(10);
            });
        });
    
    });

});



