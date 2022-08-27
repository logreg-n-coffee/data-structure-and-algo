import TreeNode from '../../src/data-structure/tree-node';

const tree = new TreeNode(1);
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

console.log(tree);

tree.print();
