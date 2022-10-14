/** 
 * @params {array, number}
 * @return {number|null} - The index of the target 
*/ 

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const indexToCheck = Math.floor((left + right) / 2);
        const checking = arr[indexToCheck];
        console.log('indexToCheck', indexToCheck);

        if (checking === target) {
            return indexToCheck;
        } else if (checking < target) {
            // look at the right part of the array - update the left range 
            left = indexToCheck + 1;
        } else {
            // look at the left part of the array - update the right range
            right = indexToCheck + 1;
        }
    }

    // default return
    return null;
};

// in order to perform binary search, the searchable array should be sorted
const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 2;

// result 
const index = binarySearch(searchable, target);
console.log('========= Printing results =================')
console.log('index', index);

// the orignal number searched
const number = searchable[index];
console.log('number', number);

if (number === target) {
    console.log('Quicksort applied correctly');
}

// Time complexity: O(log n)

// The above algorithm will exceed the time limit in Leetcode - see the following improved code

const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let i = Math.floor((l + r) / 2);

    if (nums[i] === target) {
      return i;
    } else if (nums[i] < target) {
      l = i + 1;
    } else {
      r = i - 1;
    }
  }
  return -1; // if target doesn't exist return -1
};

console.log('Leetcode Accepted Answer');

const nums = [-1, 0, 3, 5, 9, 12];
const numsTarget = 9;

const result = search(nums, numsTarget);
console.log('result', result);
