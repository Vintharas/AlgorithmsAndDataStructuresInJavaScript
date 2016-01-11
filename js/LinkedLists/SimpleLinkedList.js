function LinkedList(value){


    return {

        head: Node(value),
        hasItem(value){
            var currentItem = this.head;

            while (currentItem){
                if (currentItem.value === value) return true;
                currentItem = currentItem.next;
            }

            return false;
        },
        append(value){
            var lastItem = this.head;
            while (lastItem.next !== null) lastItem = lastItem.next;
            lastItem.next = Node(value);
        }
    };
}

function Node(value){
    return {
        value,
        next: null
    };
}
