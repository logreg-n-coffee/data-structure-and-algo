const explicitSortWithComparator = (inputArray, order) => {
  
  const explicitComparator = (a, b) => {
    // Write your code here:
    let idxA = order.length;
    let idxB = order.length;

    if (order.includes(a)) {
        idxA = order.indexOf(a);
    }
    if (order.includes(b)) {
        idxB = order.indexOf(b);
    }
    return idxA - idxB;
  };
  
  return inputArray.sort(explicitComparator).slice();
}

// Use this array to test your code:
const inputArray = ['a', 'b', 'c', 'd', 'e', 'f', 'n', 'y', 'g']
const order = ['a', 'n', 'd', 'y']
console.log(explicitSortWithComparator(inputArray, order));
// expected: ['a', 'n', 'd', 'y', 'b', 'c', 'e', 'f', 'g']