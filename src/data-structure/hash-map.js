// hashmap with no seperate chains - can not avoid collisions
/*
class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null);
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    this.hashmap[arrayIndex] = value;
  }

  retrive(key) {
    const arrayIndex = this.hash(key);
    return this.hashmap[arrayIndex];
  }
}
*/


// hashmap with seperate chains to avoid collisions - seperate chaining

import Node from './Node';
import LinkedList from './linked-list';

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];

    // if linkedList is empty, then assign { key, value } pair to the head of the linked list
    if (!linkedList.head) {
      linkedList.addToHead({ key, value });
      return;
    }

    // if linkedList is not empty, iterate over the linked list -
    let current = linkedList.head;
    while (current) {
      // if current key and the node's key are the same, overwrite the node's value with current value
      if (current.data.key === key) {
        current.data = { key, value };
      }
      // if current key and the node's key are not the same, the while loop continues
      // if the current node is the end of the linked list,
      // set the next node after current to a new node and then break the while loop
      if (!current.getNextNode()) {
        const newNode = new Node({ keyk, value });
        current.setNextNode(newNode);
        break;
      }
      current = current.getNextNode();
    }
  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];

    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) {
        return current.data.value;
      }
      current = current.getNextNode();
    }
    return null;
  }
}

export default HashMap;
