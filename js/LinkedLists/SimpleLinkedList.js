function LinkedList(value){
    let head = Node(value);

    return {
        get head(){ return head;},
        hasItem,
        append,
        remove,
        insert
    };

    function hasItem(value){
        let currentItem = head;

        // TODO: extract iteraton
        while (currentItem){
            if (currentItem.value === value) return true;
            currentItem = currentItem.next;
        }

        return false;
    }

    function append(value){
        let lastItem = head;
        while (lastItem.next !== null) lastItem = lastItem.next;
        lastItem.next = Node(value);
    }

    function insert(value){
        let currentHead = head;
        head = Node(value, /* next */ currentHead);
    }
    
    function remove(value){
        if (!hasItem(value)) {
            console.log('here');
            throw new Error(`Item ${value} is not in the list`);
        }
        if (value === head.value) {
            head = head.next; 
        } else {
            removeItemInside(value);
        }
    }

    function removeItemInside(value){
        let previousItem,
            currentItem = head;

        while (currentItem){
            if (currentItem.value === value){
                previousItem.next = currentItem.next;
            }
            previousItem = currentItem;
            currentItem = currentItem.next;
        }
    }

}

function Node(value, next=null){
    return {
        value,
        next
    };
}
