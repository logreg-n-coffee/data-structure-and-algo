// define the Node class

export default class Node {
  constructor(data) {
    // data stores the data for this node
    // next points to the next node; default value is null
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }

  setPrevNode (node) {
    if (node instanceof Node || node === null) {
      this.prev = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }

  getNextNode() {
    return this.next;
  }
}
