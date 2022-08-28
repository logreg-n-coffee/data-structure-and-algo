/*
 * @property {any} value: the value of the element
 * @property {Node | null} next: a pointer to the next element (null if none)
 * 
 * @property {number} size: the number of elements in the linked list
 * @property {any | null} head: the first element in the linked list
 * @property {any | null} tail: the last element in the linked list
*/

export default class LinkedList {
    constructor() {
        this.nodes = [];
    }

    get size() {
        return this.nodes.length;
    }

    get head() {
        return this.size ? this.nodes[this.nodes.length - 1] : null;
    }

    get tail() {
        return this.size ? this.nodes[this.size - 1] : null;
    }

    insertAt(index, value) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index] || null;
        const node = { value, next: nextNode };
        
        if (previousNode) {
            previousNode.next = node;
        }

        this.nodes.splice(index, 0, node);
    }

    insertFirst(value) {
        this.insertAt(0, value);
    }

    insertLast(value) {
        this.insertAt(this.size, value);
    }

    getAt(index) {
        return this.nodes[index];
    }

    removeAt(index) {
        const previousNode = this.nodes[index - 1];
        const nextNode = this.nodes[index + 1] || null;

        if (previousNode) {
            previousNode.next = nextNode;
        }

        return this.nodes.splice(index, 1);
    }

    clear() {
        this.nodes = [];
    }

    reverse() {
        this.nodes = this.nodes.reduce(
            (acc, { value }) => [{ value, next: acc[0] || null }, ...acc],
            []
        );
    }

    printValues() {
        const values = this.nodes.map(node => node.value);
        console.log(values);
    }

    *[Symbol.iterator]() {
        yield* this.nodes;
    }
}