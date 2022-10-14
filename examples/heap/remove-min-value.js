import MinHeap from "../../src/data-structure/min-heap";

const minHeap = new MinHeap();

// random number generator
const randomize = () => Math.floor(Math.random() * 40);

// populate minHeap with random numbers
for (const _ of Array(6).keys()) {
    const num = randomize();
    console.log(`.. Adding value ${num}`);
    minHeap.add(num);
    console.log('Content of min-heap: ', minHeap.heap);
}

// return the minimum value of the minHeap until it is exhausted
console.log('\n');
for (const _ of Array(6).keys()) {
    console.log(`.. Removing minimum value ${minHeap.popMin()}`);
    console.log('Content of min-heap: ', minHeap.heap);
}
