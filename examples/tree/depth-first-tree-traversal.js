import TreeNode from "../../src/data-structure/tree-node";

// instantiate TreeNode
const tree = new TreeNode('Root');

// define a random numer
const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (const _ of Array(3).keys()) {
    tree.addChild(randomize());
}

// add second-level children
for (const i of Array(3).keys()) {
    for (const _ of Array(2).keys()) {
        tree.children[i].addChild(randomize());
    }
}

// add third-level children
for (const i of Array(3).keys()) {
    for (const j of Array(2).keys()) {
        for (const _ of Array(2).keys()) {
            tree.children[i].children[j].addChild(randomize());
        }
    }
}

// console.log tree
console.log(tree);

// pretty print tree
tree.print();

// depth first traverse tree
tree.depthFirstTraversal();
