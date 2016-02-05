//
// Running wild without ; !!!! Wiiii!!!
//

class AVLTree {
    constructor(value){
        this.root = value ? AVLTreeNode(value, null, this) : undefined;
    }
    add(value){
        console.log('adding AVL node with value: ' + value);
        if (!this.root) this.root = AVLTreeNode(value, null, this)
        else this.addNode(this.root, value)
    }
    addNode(node, value){
        if (value < node.value){
            if (node.left) this.addNode(node.left, value)
            else node.left = AVLTreeNode(value, node, this)
        } else {
            if (node.right) this.addNode(node.right, value)
            else node.right = AVLTreeNode(value, node, this)
        } 
        // this is evaluated for each node going upwards
        // like a baws!
        if (node.isUnbalanced()) node.balance()
    }
}


function AVLTreeNode(value, parent, tree){
    return {
        value,
        left: null,
        right: null,
        parent,
        tree,
        isUnbalanced,
        balance,
        getBalanceFactor,
        isRightHeavy(){ return this.getBalanceFactor() > 1},
        isLeftHeavy(){ return this.getBalanceFactor() < -1}
    }

    function isUnbalanced() {
        const height = this.getBalanceFactor();
        const isUnbalanced = Math.abs(height) > 1
        if (isUnbalanced) console.log('is unbalanced with height: ' + height)
        return isUnbalanced;
    }

    function getBalanceFactor() {
        const leftHeight = getHeight(this.left)
        const rightHeight = getHeight(this.right)
        return rightHeight - leftHeight;
    }

    function getHeight(node){
        if (!node) return 0
        else return 1 + Math.max(getHeight(node.left), getHeight(node.right))
    }

    function balance(){
        console.log('balancing node with value: ' + this.value);
        if (this.isRightHeavy() && this.right.isLeftHeavy())
            balanceRightLeft(this)
        else if (this.isRightHeavy())
            balanceRight(this)
        else if (this.isLeftHeavy() && this.left.isRightHeavy())
            balanceLeftRight(this)
        else 
            balanceLeft(this)
    }

    function balanceRightLeft(node){
        console.log('node ' + this + ' needs to be balanced right-left');
    }
    function balanceRight(node){
        console.log('node ' + node.value + ' needs to be balanced right');
        let oldRoot = node
        let root = oldRoot.right
        rightChildBecomesRoot(oldRoot, root)
        rightChildLeftsNodeBecomesOldRootRightNode(oldRoot, root)
        oldRootBecomesRootLeftNode(oldRoot, root)
    }
    
    function rightChildBecomesRoot(oldRoot, root){
        oldRoot.right = null
        root.parent = oldRoot.parent;
        oldRoot.parent = root;
        // update link in parent
        if (root.parent) {
            if (root.parent.left === oldRoot) root.parent.left = root;
            if (root.parent.right === oldRoot) root.parent.right = root;
        }
        console.log(root.value + ' becomes root');
    }

    function rightChildLeftsNodeBecomesOldRootRightNode(oldRoot, root){
        if (root.left) {
           oldRoot.right = root.left
           root.left = null
           console.log(root.left.value + ' becomes old root ' + oldRoot.value + ' right child')
        }
    }

    function oldRootBecomesRootLeftNode(oldRoot, root){
        root.left = oldRoot
        console.log(root.left.value + ' becomes root ' + root.value + ' left child')
        // #4. if this is the root of the tree, update it
        if (oldRoot.tree.root === oldRoot) { 
            console.log('change tree root to ' + root.value)
            oldRoot.tree.root = root
        }
    }

    function balanceLeftRight(node){
        console.log('node ' + this + ' needs to be balanced left-right');
    }
    function balanceLeft(node){
        console.log('node ' + this + ' needs to be balanced left');
    }

}
