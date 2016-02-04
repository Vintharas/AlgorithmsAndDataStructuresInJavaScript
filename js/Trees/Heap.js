function Heap(value){
    // private members
    let root;

    if(value) { root = HeapNode(value); }

    // public API
    return {
        get root() {return root;},
        add
    };

    function add(value){
        if (!root) root = HeapNode(value);
        else addToSubHeap(root, value);
        // console.log('out: ' + JSON.stringify(root));
    }

    function addToSubHeap(node, value){
        // console.log('in node: ' + JSON.stringify(node) + ' value: ' + value);

        if (value > node.value) {
            // if the value is bigger than the current node
            // then switch it and position the old value
            let oldValue = node.value;
            node.value = value;
            value = oldValue;
        }

        if (!node.left) node.left = HeapNode(value);
        else if (!node.right) node.right = HeapNode(value)
        else addToSubHeap(node.left, value);
    }

        /*add,
        /*addRecursively,
        addMany,
        traversePreOrder,
        traversePreOrderIteratively,
        traverseInOrder,
        traversePostOrder,
        find,
        findRecursively*/
}

// TODO: Need to setup ES6 modules
// right now everything is declared globally. Oh no! :O
function HeapNode(value){
    let left, right;
    return {
        value,
        left,
        right
    };
}
