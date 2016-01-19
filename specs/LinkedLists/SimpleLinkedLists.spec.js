/*
 * Linked Lists
 *
 * - create linked list with 1 item (head)
 * - having a list with an item
 *   - hasItem returns true if the list has that item
 *   - hasItem returns false if the list doesn't have that item
 *   - should be able to add an item to an existing list
 *   - should be able to add multiple items to the list
 *   - should be able to insert an item at the beginning
 * - having a list with multiple items
 *   - hasItem returns true if the list has an item
 *   - hasItem returns false if the list doesn't have an item
 *   - remove first item from the list
 *   - remove an item from the list
 *   - should throw error when trying to remove an item that doesn't exist
 *
 */

describe("Linked Lists", () => {

    it("Should be able to create a Linked List from a single item which would be its head", () => {
        // Arrange, Act
        var l = LinkedList(5);
        // Assert
        expect(l.head).toBeDefined();
        expect(l.head.value).toBe(5);
    });

    describe("Given that I have a linked list with an item", () => {
        var list; 

        beforeEach(() => {
            list = LinkedList(5);
        });

        describe("hasItem", () => {
            it("should return true when an element is within the list", () => {
                // Arrange, Act, Assert
                expect(list.hasItem(5)).toBe(true);
            });

            it("should return false when an element is within the list", () => {
                // Arrange, Act, Assert
                expect(list.hasItem(7)).toBe(false);
            });
        });

        it("should be able to add another item at the end of the list", () => {
            // Arrange, Act
            list.append(3);
            // Assert
            var head = list.head;
            expect(head.value).toBe(5);
            expect(head.next).toBeDefined();
            expect(head.next.value).toBe(3);
        });

        it("should be able to add multiple items at the end of the list", () => {
            // Arrange, Act
            list.append(3);
            list.append(6);
            list.append(8);
            // Assert
            var head = list.head;
            expect(head.value).toBe(5);
            expect(head.next.value).toBe(3);
            expect(head.next.next.value).toBe(6);
            expect(head.next.next.next.value).toBe(8);
        });

        it("should be able to insert another item at the beginning of the list", () => {
            // Arrange, Act
            list.insert(1);
            // Assert
            var head = list.head;
            expect(head.value).toBe(1);
        });
    });

    describe("Given that I have a linked list with multiple items", () => {
        var list; 
        beforeEach(() => {
            list = LinkedList(5); // 5 => 3 => 8 => 9
            list.append(3);
            list.append(8);
            list.append(9);
        });

        describe("hasItem", () => {
            it("should return true when an element is within the list", () => {
                // Arrange, Act, Assert
                expect(list.hasItem(8)).toBe(true);
            });

            it("should return false when an element is within the list", () => {
                // Arrange, Act, Assert
                expect(list.hasItem(100)).toBe(false);
            });
        });

        it("should be able to remove the first item from the list", () => {
            // Arrange, Act
            list.remove(5);
            // Assert
            expect(list.hasItem(5)).toBe(false, 'list has item 5');
            expect(list.hasItem(3)).toBe(true, 'list doesnt have item 3');
            expect(list.hasItem(8)).toBe(true, 'list doesnt have item 8');
            expect(list.hasItem(9)).toBe(true, 'list doesnt have item 9');
        });

        it("should be able to remove any item from the list", () => {
            // Arrange, Act
            list.remove(3);
            // Assert
            expect(list.hasItem(5)).toBe(true, 'list doesnt have item 5');
            expect(list.hasItem(3)).toBe(false, 'list has item 3');
            expect(list.hasItem(8)).toBe(true, 'list doesnt have item 8');
            expect(list.hasItem(9)).toBe(true, 'list doesnt have item 9');
        });

        it("should throw an error if you try to remove an item that is not in the list", () => {
            // Arrange, Act, Assert
            expect(() => list.remove(111)).toThrowError();
        });


    
    });

});

/*
 * Implement a Stack using a linked list (LIFO data structure)
 *
 * - pop
 * - push
 *
 */

describe("Stack", () => {

});
