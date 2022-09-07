// Min Heap 
// in a min-heap, for any given element, their parent's value is no greater than (<=) its value

class MinHeap {
    constructor() {
        this.heap = [null];  // null stands for a guardian element
        this.size = 0;
    }

    getParent(current) {
        return Math.floor((current / 2));
    }

    getLeft(current) {
        return current * 2;
    }

    getRight(current) {
        return current * 2 + 1;
    }

    add(value) {
        this.heap.push(value);
        this.size++;
        this.bubbleUp();
    }

    popMin() {
        if (this.size === 0) {
            return null;
        }
        // get the min value
        const min = this.heap[1];
        // put the bottom right most child at the head
        this.heap[1] = this.heap[this.size];
        this.size--;
        // remove the bottom right most child as it has been moved to the head
        this.heap.pop();
        // heapify the heap
        this.heapify();
        return min;

    }

    bubbleUp() {
      // Set the current element index to be the last index of heap
      let current = this.size;
      while (
        // While current element is valid and its value is less than its parent's value
        current > 1 &&
        this.heap[this.getParent(current)] > this.heap[current]
      ) {
        // Swap the indexes and update the current element index to be its parent index
        this.swap(current, this.getParent(current));
        current = this.getParent(current);
      }
    }

    heapify() {
        // heapify begins from the index that always points to the minimum value
        let current = 1;  // index is 1
        let leftChild = this.getLeft(current);
        let rightChild = this.getRight(current);

        // check if there is something to swap 
        while (this.canSwap(current, leftChild, rightChild)) {
            // compare left & right with the parent if they both exist
            if (this.exists(leftChild) && this.exists(rightChild)) {
                // swap the parent with the smaller child
                if (this.heap[leftChild] < this.heap[rightChild]) {
                    this.swap(current, leftChild);
                    current = leftChild;
                } else {
                    this.swap(current, rightChild);
                    current = rightChild;
                }
            } else {
                // if only the child exists, swap the left child with the parent
                this.swap(current, leftChild);
                current = leftChild;
            }
            // inside the while loop, update the left and right children based on the new parent 
            // this will prevent indefinite loops
            leftChild = this.getLeft(current);
            rightChild = this.getRight(current);
        }
    }

    swap(a, b) {  // a and b are indexes
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    exists(index) {
        return index <= this.size;
    }

    canSwap(current, leftChild, rightChild) {
        // check one of the possible swap conditions exists 
        return (
            this.exists(leftChild) && this.heap[current] > this.heap[leftChild] ||
            this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
        );
    }

}

export default MinHeap;
