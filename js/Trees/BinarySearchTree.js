function Tree(value){
    // private members
    let root;

    if(value) { root = TreeNode(value); }

    // public API
    return {
        get root() { return root;},
        add,
        addRecursively
    };

    function add(value){
        if (!root) { return root = TreeNode(value);}

        let tree = getBinarySearchTreeIterator(root, value);
        for (let currentNode of tree){
            if (value < currentNode.value && !currentNode.left){
                return currentNode.left = TreeNode(value);
            } else if (value > currentNode.value && !currentNode.right){
                return currentNode.right = TreeNode(value);
            } else {
                if (!currentNode.left) { return currentNode.left = TreeNode(value);}
                if (!currentNode.right) { return currentNode.right = TreeNode(value);}
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



