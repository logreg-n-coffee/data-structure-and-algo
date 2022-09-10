import Node from './node';

class LinkedList {
  // The last node, or tail, of the list will point to null.
  constructor() {
    // set the default head to null - linked list only keeps track of the head
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;

    // check if there is a current head to the list
    if (currentHead) {
      // If there is, set the list’s head’s next node to currentHead.
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    // If tail has no value, then that means the list was empty
    if (!tail) {
      // so we create the head and tail with the data passed in
      this.head = new Node(data);
    } else {
      // iterate through the list until we find the end
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      // add tail to the end of the list
      tail.setNextNode(new Node(data));
    }
  }

  remove(data) {
    if (this.head === null) {
      return null;
    }
    if (this.head.data === data) {
      this.removeHead();
    } else {
      let prev = this.head;
      while (prev.next && prev.next.data !== data) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        return removedNode.data;
      }
    }
  }

  removeHead() {
    const removedHead = this.head;
    // if removedHead has no value
    if (!removedHead) {
      // return to end execution of the .removeHead() method
      return;
    }
    // set the list’s head equal to removedHead‘s next node
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

export default LinkedList;
