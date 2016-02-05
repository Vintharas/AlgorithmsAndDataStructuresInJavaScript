/*
 * AVL Tree (self-balancing tree)
 *
 *
 * BST are awesome for searching, adding and removing items with a
 * runtime complexity of O(logn). But that's only when they 
 * are balanced. In the worst case scenario, when you add 1, 2, 3
 * 4, 5, etc, a BST results in a linked list. In that case all
 * these operations suddenly become O(n).
 *
 * AVL to the rescue!!! AVL is a self-balancing tree that runs a 
 * balancing algorithm when adding or removing nodes results in
 * the left or right subtree heights differing in more than 1.
 *
 *
 * - AVLTree
 *    - Create new empty AVLTree
 *    - Create new AVLTree with root
 *    - Add node
 *    - Remove node
 *    - Find node (like BST)
 *    - Clear (like BST)
 *    - Count (like BST)
 *    - Traversals (like BST)
 *
 *
 * This is a toughie to implement :)
 *
 */

describe("AVLTree", () => {

    describe("Given that I have no tree", () => {
        it("Should be able to create an empty tree", () => {
            // Arrange, Act
            const tree = new AVLTree();
            // Assert
            expect(tree.root).toBeUndefined();
        });

        it("Should be able to create a tree with a root", () => {
            // Arrange, Act
            const tree = new AVLTree(10);
            // Assert
            expect(tree.root).toBeDefined();
            expect(tree.root.value).toBe(10);
        });
    });

    describe("Given that I have an empty tree", () => {
        let tree;
        beforeEach(() => tree = new AVLTree());
        it("Should be able to add an item that'll be its root", () => {
            // Arrange, Act
            tree.add(11);
            // Assert
            expect(tree.root).toBeDefined();
            expect(tree.root.value).toBe(11);
        });
    });

    describe("Given that I have a tree with a root", () => {
        let tree;
        beforeEach(() => tree = new AVLTree(10));
        describe("When adding an item smaller than the root", () => {
            it("Should be added as left child", () => {
                // Arrange, Act
                tree.add(5);
                // Assert
                expect(tree.root.left).toBeDefined();
                expect(tree.root.left.value).toBe(5);
            });
        });

        describe("When adding an item bigger than the root", () => {
            it("Should be added as right child", () => {
                // Arrange, Act
                tree.add(50);
                // Assert
                expect(tree.root.right).toBeDefined();
                expect(tree.root.right.value).toBe(50);
            });
        });

        describe("When adding an item equal than the root", () => {
            it("Should be added as right child", () => {
                // Arrange, Act
                tree.add(10);
                // Assert
                expect(tree.root.right).toBeDefined();
                expect(tree.root.right.value).toBe(10);
            });
        });
    
    });

    describe("Given that I have a tree with a root left and right children", () => {
        let tree;
        beforeEach(() => {
            tree = new AVLTree(10);
            tree.add(5);
            tree.add(15);
            /*
             *
             *       10
             *      /  \
             *     5    15
             *
             */
        });

        describe("When adding an item smaller than 5", () => {
            it("Should be added as root-left-left child", () => {
                // Arrange, Act
                tree.add(1);
                // Assert
                expect(tree.root.left.left).toBeDefined();
                expect(tree.root.left.left.value).toBe(1);
            });
        });

        describe("When adding an item between 5 and 10", () => {
            it("Should be added as root-left-right child", () => {
                // Arrange, Act
                tree.add(6);
                // Assert
                expect(tree.root.left.right).toBeDefined();
                expect(tree.root.left.right.value).toBe(6);
            });
        });

        describe("When adding an item between 10 and 15", () => {
            it("Should be added as root-right-left child", () => {
                // Arrange, Act
                tree.add(11);
                // Assert
                expect(tree.root.right.left).toBeDefined();
                expect(tree.root.right.left.value).toBe(11);
            });
        });

        describe("When adding an item greater than 15", () => {
            it("Should be added as root-right-right child", () => {
                // Arrange, Act
                tree.add(20);
                // Assert
                expect(tree.root.right.right).toBeDefined();
                expect(tree.root.right.right.value).toBe(20);
            });
        });

    });


    describe("Tree balancing", () => {
        describe("Given that I have a tree with a root and a right child", () => {
            let tree;
            beforeEach(() => {
                tree = new AVLTree(10);
                tree.add(15);
                /*
                 *
                 *       10
                 *         \
                 *          15
                 *
                 */
            });

            // Left Rotation
            describe("When I add an item greater than 15", () => {
                it("Should rebalance the tree", () => {
                    // Arrange, Act
                    tree.add(20);
                    // Assert
                    // 
                    //      15
                    //     /  \
                    //    10   20
                    //
                    expect(tree.root.value).toBe(15);
                    expect(tree.root.right.value).toBe(20);
                    expect(tree.root.left.value).toBe(10);
                });
            });

            // Left Rotation
            describe("When I add 20, 30, 40", () => {
                it("Should rebalance the tree", () => {
                    // Arrange, Act
                    tree.add(20);
                    tree.add(30);
                    tree.add(40);
                    // Assert
                    // 
                    //      15
                    //     /  \
                    //    10   30
                    //        / \
                    //      20   40 
                    //
                    expect(tree.root.value).toBe(15);
                    expect(tree.root.left.value).toBe(10);
                    expect(tree.root.right.value).toBe(30);
                    expect(tree.root.right.left.value).toBe(20);
                    expect(tree.root.right.right.value).toBe(40);
                });
            });
        
        });
    });


    
});
