// binary search tree has four properties - value, depth, left, right
// feature 1: left node of a parent node is smaller than its parent node (root)
// feature 2: right node of a parent node is larger than its parent node (root)

class BinaryTree {
    constructor(value, depth = 1) {
        this.value = value;
        this.depth = depth;
        this.left = null;  // default value: null
        this.right = null;
    }

    // insert
    insert(value) {
        // insert a value based on the feature of the binary tree
        // left node scenario
        if (value < this.value) {
            // if the left node does not exist
            if (!this.left) {
                // create a new binary tree with incremented depth
                this.left = new BinaryTree(value, this.depth + 1);
            } else {
                // if the left node exists, repeat the insertion based on the new left node
                this.left.insert(value);
            }
        } else {
            // right node scenario (if the value to be inserted >= the root node)
            // if the right node does not exist, create a new binary tree with depth + 1
            if (!this.right) {
                this.right = new BinaryTree(value, this.depth + 1);
            } else {
                // if the right node exists, repeat the insertion
                this.right.insert(value);
            }
        }
    }

    // search
    getNodeByValue(value) {
        // base case: if the value to be searched is the same as the root node's value, return node
        if (value === this.value) {
            return this;  // return the tree itself
        } else if (this.left && value < this.value) {
            return this.left.getNodeByValue(value);
        } else if (this.right && value > this.value) {
            return this.right.getNodeByValue(value);
        } else {
            return null;  // default return
        }
    }

    // depth first traversal - in-order traversal (left child -> parent -> right child)
    // printed values will be sorted
    depthFirstTraversal() {
        if (this.left) {
            this.left.depthFirstTraversal();
        }
        console.log(`Depth: ${this.depth}, Value: ${this.value}`);
        if (this.right) {
            this.right.depthFirstTraversal();
        }
    }
}

export default BinaryTree;
