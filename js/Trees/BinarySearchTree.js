function Tree(value){
    // private members
    let root;

    if(value) { root = TreeNode(value); }

    // public API
    return {
        get root() { return root;},
        add,
        addRecursively,
        addMany,
        traversePreOrder,
        traversePreOrderIteratively,
        traverseInOrder,
        traversePostOrder,
        find,
        findRecursively
    };

    function add(value){
        if (!root) { return root = TreeNode(value);}

        let tree = getBinarySearchTreeIterator(root, value);
        for (let currentNode of tree){
            if (value <= currentNode.value && !currentNode.left){
                return currentNode.left = TreeNode(value);
            } else if (value > currentNode.value && !currentNode.right){
                return currentNode.right = TreeNode(value);
            } 
        }

    }

    function addRecursively(value){
        if (!root) { return root = TreeNode(value);}
        return addRecursivelyOnNode(root, value);
    }

    function addRecursivelyOnNode(node, value){
        // simplified to add minor or equal to left child
        if (value <= node.value) {
           if (!node.left) { 
               return node.left = TreeNode(value);
           }
           return addRecursivelyOnNode(node.left, value);
        } else {
           if (!node.right) { 
               return node.right = TreeNode(value);
           }
           return addRecursivelyOnNode(node.right, value);
        }
        throw new Error();
    }

    function addMany(...values){
        values.forEach(value => addRecursively(value));
    }

    function traversePreOrder(processNode){
        traverse(root, processNode);

        function traverse(node, processNode){
            processNode(node);
            if (node.left) traverse(node.left, processNode);
            if (node.right) traverse(node.right, processNode);
        }
    }

    function traverseInOrder(processNode){
        traverse(root, processNode);

        function traverse(node, processNode){
            if (node.left) traverse(node.left, processNode);
            processNode(node);
            if (node.right) traverse(node.right, processNode);
        }
    }

    function traversePostOrder(processNode){
        traverse(root, processNode);

        function traverse(node, processNode){
            if (node.left) traverse(node.left, processNode);
            if (node.right) traverse(node.right, processNode);
            processNode(node);
        }
    }

    function traversePreOrderIteratively(processNode){
        let stack = Stack(); // => global namespace haha!

        // for each node: 
        // - process node
        // - go left
        // - go right

        let currentNode = root;
        while(currentNode){
            // process Node
            processNode(currentNode);
            // go left
            if (currentNode.left){
                // push into stack to go right later
                stack.push(currentNode.right); 
                currentNode = currentNode.left;
            } else if (currentNode.right) {
                // only right node
                currentNode = currentNode.right;
            } else {
                // leave (go back)
                if (stack.isEmpty()){ currentNode = undefined;}
                else {currentNode = stack.pop();}
            }
        }
    }

    function find(value){
        let nodes = getBinarySearchTreeIterator(root, value);
        for(let node of nodes){
            if (node.value === value) return node;
        }
        throw Error(`Node with value ${value} was not found!`);
    }

    function findRecursively(value){
        return findRecursivelyInNode(root, value);
    }

    function findRecursivelyInNode(node, value){
        if (!node) throw Error(`Node with value ${value} was not found!`);
        if (node.value === value) return node;
        if (value > node.value) return findRecursivelyInNode(node.right, value);
        if (value < node.value) return findRecursivelyInNode(node.left, value);
    }

}

// TODO: Need to setup ES6 modules
// right now everything is declared globally. Oh no! :O
function TreeNode(value){
    let left, right;
    return {
        value,
        left,
        right
    };
}

function* getBinarySearchTreeIterator(root, value){
    yield root; 

    let currentNode = root;
    while(currentNode){
       if (value <= currentNode.value){ currentNode = currentNode.left; } 
       else { currentNode = currentNode.right; }
       yield currentNode;
    }
}



