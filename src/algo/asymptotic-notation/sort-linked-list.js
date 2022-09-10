import LinkedList from "../../data-structure/linked-list";
import { findMax } from "./find-max-in-a-linked-list";

// sortedLinkedList has a time complexity of O(n^2) = O(n * (n + n)) 
const sortLinkedList = list => {
    const newList = new LinkedList();

    while (list.head !== null) {  // while has an O(n)
        let currentMax = findMax(list);  // O(n)
        list.remove(currentMax);  // O(n)
        newList.addToHead(currentMax);  // O(1)
    }

    return newList;
};

const listItems = [5, 8, 2, 3, 7, 1, 4, 6, 9, 0];

const myList = new LinkedList();

for (const item of listItems) {
  myList.addToTail(item);
}

myList.printList();

const mySortedLinkedList = sortLinkedList(myList);

mySortedLinkedList.printList();
