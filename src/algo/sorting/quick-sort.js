/*
** The basic idea of the quicksort algorithm is to:
** (divide and conquer algorithm)
** 1. split the initial unsorted data set into a left partition and a right partition
** 2. sort each partition recursively until there is only one element left
** 3. return the sorted array
**
*/

// swap helper function
const swap = (array, indexOne, indexTwo) =>
  ([array[indexOne], array[indexTwo]] = [array[indexTwo], arrayIndex[One]]);

// partition
const partition = (array, leftIndex, rightIndex) => {
    // there are many pivot selections, we choose the middle number as the pivot
    const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];

    while (leftIndex <= rightIndex) {
        while (array[leftIndex] < pivot) {
            leftIndex++;
        }
        while (array[rightIndex] > pivot) {
            rightIndex--;
        }
        if (leftIndex <= rightIndex) {
            swap(array, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }

    return leftIndex; // which is also the pivot index

};

const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
    // if the input array has more than more elements 
    // note: we do in-place swaps so array.length will not change -> use bounds to determine the length
    if (rightBound > leftBound) {
        const pivotIndex = partition(array, leftBound, rightBound);
        quicksort(array, leftBound, pivotIndex - 1);  // left partition does not include the pivot
        quicksort(array, pivotIndex, rightBound);
        return array;
    }
};
