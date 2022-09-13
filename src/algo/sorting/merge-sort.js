const mergeSort = startArr => {
    const length = startArr.length;

    // base case of recursion 
    if (length === 1) {
        return startArr;
    }

    // find the middle value and split the arrays 
    const mid = Math.floor(length / 2);
    const leftArr = startArr.slice(0, mid);  // .slice() does not modify the original array
    const rightArr = startArr.slice(mid, length);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    leftArr[0] < rightArr[0]
      ? sortedArr.push(leftArr.shift())
      : sortedArr.push(rightArr.shift());  // .shift() removes the first element from the array and returns the first element
  }

  // Either leftArr or rightArr will still have elements in it after the while loop.
  // The .concat() method will add the remaining elements from this array to sortedArr.
  return sortedArr.concat(leftArr).concat(rightArr);
};

