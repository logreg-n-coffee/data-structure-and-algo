// define the Node class

export default class Node {
  constructor(data, prevOn = false) {
    // data stores the data for this node
    // next points to the next node; default value is null
    this.data = data;
    this.next = null;
    if (prevOn) {
      this.previous = null;
      this.prevOn = prevOn;
    }
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }

  setPrevNode(node) {
    if (this.prevOn) {
      if (node instanceof Node || node === null) {
        this.prev = node;
      } else {
        throw new Error("Next node must be a member of the Node class.");
      }
    } else {
      throw new Error('Must be a double-linked list to setPrevNode');
    }
  }

  getNextNode() {
    return this.next;
  }
}
