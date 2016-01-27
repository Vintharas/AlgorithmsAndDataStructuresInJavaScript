function LinkedList(value){
    let head = null;

    if (value) head = Node(value);

    return {
        get head(){ return head;},
        hasItem,
        append,
        remove,
        removeFirst,
        insert,
        getLast,
        getNthLast
    };

    function hasItem(value){
        let iter = getTraverseLinkedListIterator(head);
        for (let item of iter){
            if (item.value === value) return true;
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

    function getLast(){
        let iter = getTraverseLinkedListIterator(head);
        for (let item of iter){
            if (!item.next) return item.value;
        }
        throw new Error("The list is empty");
    }

    function getNthLast(position){
        let iter = getTraverseLinkedListIterator(head),
            values = Array.from(iter).map(i => i.value), // BOOM!
            index = values.length - (position);

        if (index < 0) throw new Error('there are no items in that position. The list is too small');
        return values[index];
    }

    // Abstract linked list iteration 
    // inside a generator Say WHAAAAAT!
    function* getTraverseLinkedListIterator(head){
        let currentItem = head;
        while(currentItem){
            yield currentItem;
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

function Stack(){
    let list = new LinkedList(); 

    return {
        push: value => list.insert(value),
        hasItem: value => list.hasItem(value),
        pop: () => list.removeFirst(),
        isEmpty: () => list.head == null
    };
}


