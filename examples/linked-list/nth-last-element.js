// Question: create a function that returns the nth last element of a singly linked list

// O(n) time and O(1) space

import LinkedList from "../../src/data-structure/linked-list";

const testLinkedList = new LinkedList();

for (const i of Array(5).keys()) {
    testLinkedList.addToTail(i);
}

testLinkedList.printList();

const nthLastNode = (linkedList, n) => {
    let current = null;
    let tailSeeker = linkedList.head;
    let count = 0;

    while (tailSeeker) {
      tailSeeker = tailSeeker.next;
      // a second pointer delayed n steps behind the first one
      if (count >= n) {
        // set current to head if it's still null
        if (!current) {
          current = linkedList.head;
        }
        // move it forward
        current = current.next;
      }
      count++;
    }
    return current;
};

const target = nthLastNode(testLinkedList, 3);

console.log('target', target);
