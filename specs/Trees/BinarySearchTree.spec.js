
/*
 * Binary Search Tree
 *
 * A Tree where each node can have up 2 children and
 * where for each node:
 *     - the left child node's value must be equal or smaller 
 *     - the right child node's value must be equal or greater.
 *
 *
 * - Create a tree
 *   - Empty
 *   - With one node
 *
 *
 */

describe("Binary Search Tree", () => {

    describe("Given that I have no tree", () => {

        it("I Should be able to create a empty tree with no root node", () => {
            // Arrange, Act
            let tree = Tree();
            // Assert
            expect(tree.root).not.toBeDefined();
        });

        it("I Should be able to create a tree with a root node", () => {
            // Arrange, Act
            let tree = Tree(12);
            // Assert
            expect(tree.root).toBeDefined();
            expect(tree.root.value).toBe(12);
        });

    });

    describe("Given that I have an empty tree", () => {
        let tree;
        
        beforeEach(() => tree = Tree());

        describe("When I add an item to the tree", () => {
            it("Should become its root", () => {
                // Arrange, Act
                tree.add(10);
                // Assert
                expect(tree.root).toBeDefined();
                expect(tree.root.value).toBe(10);
            });
        });
    });

    describe("Given that I have a tree with a root", () => {
        let tree;

        beforeEach(() => tree = Tree(10));
        
        describe("When I add an item greater than the root", () => {
            it("Should be added as its right child", () => {
                // Arrange, Act
                tree.add(50);
                // Assert
                expect(tree.root.right).toBeDefined();
                expect(tree.root.right.value).toBe(50);
            });
        });

        describe("When I add an item smaller than the root", () => {
            it("Should be added as its left child", () => {
                // Arrange, Act
                tree.add(2);
                // Assert
                expect(tree.root.left).toBeDefined();
                expect(tree.root.left.value).toBe(2);
            });
        });

        describe("When I add an item equal than the root", () => {
            describe("When there's no node as left child", () => {
                it ("Should be added as its left child", () => {
                    // Arrange, Act
                    tree.add(10);
                    // Assert
                    expect(tree.root.left).toBeDefined();
                    expect(tree.root.left.value).toBe(10);
                });
            });

            describe("When there's a node as its left child", () => {
                beforeEach(() => tree.add(1));
                describe("And no node as its right child", () => {
                    it("should be added as its right child", () => {
                        // Arrange, Act
                        tree.add(10);
                        // Assert
                        expect(tree.root.right).toBeDefined();
                        expect(tree.root.right.value).toBe(10);
                    });
                });
            });

        });

    });


    describe("Given that I have a tree with a node and two leaves", () => {
        let tree;

        beforeEach( () => {
            tree = Tree(10);
            tree.add(5);
            tree.add(50);
        });
        
        describe("When I add an item smaller than the root", () => {
            describe("And smaller than its left child", () => {
                it("Should become the roots left child's child", () => {
                    // Arrange, Act
                    tree.add(1);
                    // Assert
                    expect(tree.root.left.left).toBeDefined();
                    expect(tree.root.left.left.value).toBe(1);
                });
            });
        });
    
    });

});
