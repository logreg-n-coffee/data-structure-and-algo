import Node from '../../data-structure/node';
import LinkedList from "../../data-structure/linked-list";

class newLinkedList extends LinkedList {
    findNodeRecursively(data, currentNode = this.head) {
        if (currentNode === null) {
            return null;
        } else if (currentNode.data === data) {
            return currentNode;
        } else {
            return this.findNodeRecursively(data, currentNode.next);
        }
    }
}

const myList = new newLinkedList();

for (const i of Array(5).keys()) {
    myList.addToHead(`Node ${i + 1}`);
}

myList.printList();

const myNodeRecursive = myList.findNodeRecursively('Node 2');
console.log(myNodeRecursive);
