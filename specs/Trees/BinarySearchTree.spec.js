
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
 * - Having an empty tree
 *   - add item to tree which becomes the root
 * - Having a tree with a root
 *   - add item smaller than root creates left child
 *   - add item greater than root creates right child
 *   - add item equal to root, try to add to left then try right, otherwise try under left child
 * - Having a tree with two leaves
 *   - add item 
 *   - add item (implement recursively)
 * - Find
 *   - find item
 *   - throw error if item is not found
 * - Traversal
 *   - pre-order
 *   - in-order
 *   - post-order
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
                // 
                //     10
                //       \
                //        50
                //
                expect(tree.root.right).toBeDefined();
                expect(tree.root.right.value).toBe(50);
            });
        });

        describe("When I add an item smaller than the root", () => {
            it("Should be added as its left child", () => {
                // Arrange, Act
                tree.add(2);
                // Assert
                //
                //     10
                //    /
                //   2
                //
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
                    //   
                    //     10
                    //    /
                    //  10
                    //
                    expect(tree.root.left).toBeDefined();
                    expect(tree.root.left.value).toBe(10);
                });
            });

            describe("When there's a node as its left child", () => {
                beforeEach(() => tree.add(1));
                it("should be added as its left child's right child", () => {
                    // Arrange, Act
                    tree.add(10);
                    // Assert
                    //      10
                    //     /
                    //    1
                    //     \
                    //      10
                    //
                    //
                    expect(tree.root.left.right).toBeDefined();
                    expect(tree.root.left.right.value).toBe(10);
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

        describe("When I add an item smaller than the root", () => {
            describe("And smaller than its left child", () => {
                describe("And I want to solve this recursively", () => {
                    it("Should become the roots left child's child", () => {
                        // Arrange, Act
                        tree.addRecursively(1);
                        // Assert
                        expect(tree.root.left.left).toBeDefined();
                        expect(tree.root.left.left.value).toBe(1);
                    });
                });
            });

            describe("And bigger than its right child", () => {
                describe("And I want to solve this recursively", () => {
                    it("Should become the roots right child's child", () => {
                        // Arrange, Act
                        tree.addRecursively(6);
                        // Assert
                        expect(tree.root.left.right).toBeDefined();
                        expect(tree.root.left.right.value).toBe(6);
                    });
                });
            });
        });
    
    });

    describe("addMany", () => {
        describe("Given that I have an empty tree", () => {
            describe("When I add many items at once", () => {
                it("The first one should be the tree root and the rest should be ordered according to size" , () => {
                    // Arrange
                    let tree = Tree();          
                    // Act
                    tree.addMany(10, 1, 2, 20, 30);
                    /* 
                     *     10 
                     *    /  \
                     *   1    20
                     *    \     \
                     *     2     30
                     */
                    // Assert
                    expect(tree.root.value).toBe(10);
                    expect(tree.root.left.value).toBe(1);
                    expect(tree.root.left.right.value).toBe(2);
                    expect(tree.root.right.value).toBe(20);
                    expect(tree.root.right.right.value).toBe(30);
                });
            });
        });
    });

    describe("BST Travesals", () => {
        describe("Given that I have a BST with some nodes", () => {
            let tree;

            beforeEach(() => {
                tree = Tree();
                tree.addMany(10, 1, 2, 20, 30);
                /* 
                 *     10 
                 *    /  \
                 *   1    20
                 *    \     \
                 *     2     30
                 */
            });

            it("I should be able to traverse it in Pre-order", () => {
                // Arrange
                let nodesTraversed = [];
                // Act 
                tree.traversePreOrder((n) => nodesTraversed.push(n.value));
                // Assert
                expect(nodesTraversed.join(',')).toBe('10,1,2,20,30');
            });

            it("I should be able to traverse it in Pre-order implemented iteratively", () => {
                // Arrange
                let nodesTraversed = [];
                // Act 
                tree.traversePreOrderIteratively((n) => nodesTraversed.push(n.value));
                // Assert
                expect(nodesTraversed.join(',')).toBe('10,1,2,20,30');
            });

            it("I should be able to traverse it in Pre-order implemented iteratively with another tree", () => {
                // Arrange
                let anotherTree = Tree();
                anotherTree.addMany(10, 1, 0, 2, 20, 15, 14, 16, 30, 25, 35);
                /* 
                 *     10 
                 *    /  \
                 *   1    20
                 *  / \   / \
                 * 0   2  15  30
                 *       /  \  / \
                 *      14  16 25 35
                 *
                 */
                let nodesTraversed = [];
                // Act 
                anotherTree.traversePreOrderIteratively((n) => nodesTraversed.push(n.value));
                // Assert
                expect(nodesTraversed.join(',')).toBe('10,1,0,2,20,15,14,16,30,25,35');
            });


            it("I should be able to traverse it in In-order", () => {
                // Arrange
                let nodesTraversed = [];
                // Act 
                tree.traverseInOrder((n) => nodesTraversed.push(n.value));
                // Assert
                expect(nodesTraversed.join(',')).toBe('1,2,10,20,30');
            });

            it("I should be able to traverse it in Post-order", () => {
                // Arrange
                let nodesTraversed = [];
                // Act 
                tree.traversePostOrder((n) => nodesTraversed.push(n.value));
                // Assert
                expect(nodesTraversed.join(',')).toBe('2,1,30,20,10');
            });

        });
    });

    describe("find", () => {
        describe("Given that I have an BST with several nodes", () => {
            describe("When I try to find an item that is within the tree", () => {
                it("Should be able to find it" , () => {
                    // Arrange
                    let tree = Tree();          
                    tree.addMany(10, 1, 2, 20, 30);
                    /* 
                     *     10 
                     *    /  \
                     *   1    20
                     *    \     \
                     *     2     30
                     */
                    // Act
                    var node = tree.find(30);
                    // Assert
                    expect(node.value).toBe(30);
                });
            });

            describe("When I try to find an item that is NOT within the tree", () => {
                it("Should throw an error" , () => {
                    // Arrange
                    let tree = Tree();          
                    tree.addMany(10, 1, 2, 20, 30);
                    /* 
                     *     10 
                     *    /  \
                     *   1    20
                     *    \     \
                     *     2     30
                     */
                    // Act, Assert
                    expect(() => tree.find(10000)).toThrowError();
                });
            });
        });
    });

});
