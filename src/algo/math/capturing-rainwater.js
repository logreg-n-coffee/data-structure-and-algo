// rainwater calculation
// waterAtIndex = Math.min(highestLeftBound, highestRightBound) - heightOfIndex;

/** naive solution - O(n^2)
 * 1. Traverse every element in the array
 * 2. Find the highest left bound for that index
 * 3. Find the highest right bound for that index
 * 4. Take the lower of those two values
 * 5. Subtract the height of that index from that minimum
 * 6. Add the difference to the total amount of water
 * */ 

function naiveSolution(heights) {
  let totalWater = 0;

  // loop from the 2nd element of the array to the 2nd to the last element
  for (let i = 1; i < heights.length - 1; i++) {
    let leftBound = 0;
    let rightBound = 0;
    // We only want to look at the elements to the left of i, which are the elements at the lower indices
    for (let j = 0; j <= i; j++) {
      leftBound = Math.max(leftBound, heights[j]);
    }
    // Likewise, we only want the elements to the right of i, which are the elements at the higher indices
    for (let j = i; j < heights.length; j++) {
      rightBound = Math.max(rightBound, heights[j]);
    }
    totalWater += Math.min(leftBound, rightBound) - heights[i];
  }
  return totalWater;
}


// Two Pointer Solution - More efficient - O(n) time complexity and O(1) space complexity

/**
 * Find the sum of water stored in each index
 * @param {Array<number>} heights 
 * @returns {number} total water result
 */

// At every index, the amount of water stored is between the current index height and a minimum of leftBound and rightBound
function efficientSolution(heights) {
  let totalWater = 0;  // results
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let leftBound = 0;  // left max
  let rightBound = 0;  // right max

  while (leftPointer <= rightPointer) {
    if (leftBound <= rightBound) {
      // add the difference betweeen current value and leftBound at index leftPointer
      totalWater += Math.max(0, leftBound - heights[leftPointer]);

      // update leftBound
      leftBound = Math.max(leftBound, heights[leftPointer]);

      // update left pointer
      leftPointer++
    } else {
      // add the difference betweeen current value and rightBound at index rightPointer
      totalWater += Math.max(0, rightBound - heights[rightPointer]);

      // update rightBound
      rightBound = Math.max(rightBound, heights[rightPointer]);

      // update right pointer
      rightPointer--;
    }
  }

  return totalWater;
}

const testArray = [4, 2, 1, 3, 0, 1, 2];
console.log(efficientSolution(testArray));