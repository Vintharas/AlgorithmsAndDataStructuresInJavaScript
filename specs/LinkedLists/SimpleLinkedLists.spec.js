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


    
    });

});
