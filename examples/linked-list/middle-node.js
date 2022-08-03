// Question: find the middle node of a linked list
// return the right-weighted middle for even-length lists

import LinkedList from "../../src/data-structure/linked-list";

const testLinkedList = new LinkedList();

for (const i of Array(17).keys()) {
    testLinkedList.addToTail(i + 1);
}

testLinkedList.printList();

const findMiddle = linkedList => {
  let fast = linkedList.head;
  let slow = linkedList.head;

  // As long as the end of the list is not reached
  while (fast) {
    // Move the fast pointer at least one step
    fast = fast.next;
    if (fast) {
      // Move both pointers forward once
      fast = fast.next;
      slow = slow.next;
    }
  }
  // At this point, the slow pointer is in the middle
  return slow;
};


const findMiddleAlt = linkedList => {
    let count = 0;
    let fast = linkedList.head;
    let slow = linkedList.head;

    while (fast) {
        fast = fast.next;
        if (count % 2) {
            slow = slow.next;
        }
        count++;
    }

    return slow;
};

const middle = findMiddle(testLinkedList);
console.log('middle', middle);

const middleAlt = findMiddleAlt(testLinkedList);
console.log('middleAlt', middleAlt);
