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