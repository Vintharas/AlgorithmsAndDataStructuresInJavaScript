function LinkedList(value){
    let head;

    if (value) head = Node(value);

    return {
        get head(){ return head;},
        hasItem,
        append,
        remove,
        removeFirst,
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
        if (!head) head = Node(value);
        else {
            let lastItem = head;
            while (lastItem.next !== null) lastItem = lastItem.next;
            lastItem.next = Node(value);
        }
    }

    function insert(value){
        if (!head) head = Node(value);
        else {
            let currentHead = head;
            head = Node(value, /* next */ currentHead);
        }
    }
    
    function remove(value){
        if (!hasItem(value)) {
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

    function removeFirst(){
        if (head) {
            var value = head.value;
            head = head.next;
            return value;
        } else {
            throw new Error('no items to remove');
        }
    }

}

function Node(value, next=null){
    return {
        value,
        next
    };
}

function Stack(){
    let list = new LinkedList(); 

    return {
        push: value => list.insert(value),
        hasItem: value => list.hasItem(value),
        pop: () => list.removeFirst()
    };
}


