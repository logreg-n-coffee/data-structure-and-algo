// Swap nodes in Singly Linked List
// Time Complexity: O(n)
// Space Complexity: O(1)

import LinkedList from "../../src/data-structure/linked-list";

const testList = new LinkedList();

for (const i of Array(10).keys()) {
    testList.addToTail(i);
}

testList.printList();
swapNodes(testList, 2, 5);
testList.printList();

function swapNodes(list, data1, data2) {
  
  // Save start time
  console.time();
  console.log(`Swapping ${data1} and ${data2}`);

  // Step 1: find the matching and proceding nodes
  let node1 = list.head;
  let node2 = list.head;
  let node1Prev = null;
  let node2Prev = null;

  // -- edge case --
  if (data1 === data2) {
    console.log("Elements are the same - no swap to be made.");
    return;
  }

  // find node1 and node1Prev
  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  // find node2 and node2Prev
  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }

  // Step 2: update the preceding nodes' pointers
  // if node1Prev is null, then the node1 is the head of the list

  // -- edge case --
  if (node1 === null || node2 === null) {
    console.log("Swap not possible - one or more element is not in the list.");
  }

  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  // Step 3: update the nodes' next pointers
  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);

  // Log out process time
  console.timeEnd();
}