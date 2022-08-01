import Node from '../../src/data-structure/node';

// Example 1 - instances of the Node class
// literation: Vanilla -> Berry Tasty -> Coconuts for coconut

console.log("Example 1");

const strawberryNode = new Node("Berry Tasty");
const vanillaNode = new Node("Vanilla");
const coconutNode = new Node("Coconuts for Coconut");

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode;

let nodeCounter = 0;

while (currentNode != null) {
  console.log(nodeCounter, currentNode.data);
  currentNode = currentNode.getNextNode();
  nodeCounter++;
}

// Example 2 - node in a node

console.log("Example 2");

const node1 = new Node(5);
const node2 = new Node(node1);

console.log("node1: ", node1);
console.log("node2: ", node2);

console.log("node1.data: ", node1.data);
console.log("node2.data: ", node2.data);

console.log("the next node of node2: ", node2.getNextNode());
