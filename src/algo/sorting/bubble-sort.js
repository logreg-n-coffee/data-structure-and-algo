// bubble sort will directly apply to the original array unless a copy is created

// type checking for array
const isArray = obj => obj.constructor.name == 'Array';

// array swap
const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
};

// bubble sort
const bubbleSortAscending = input => {
    // check if the input is an array
    if (!isArray(input)) {
        throw new Error('Please input an array');
    }

    // create a switch variable
    let swapping = true;

    // logging the swapping time(s)
    let swappingTime = 0;

    while (swapping) {
        // turn off the switch first
        swapping = false;
        
        // loop from the first element to the second-to-last element 
        for (let i = 0; i < input.length - 1; i++) {
            // compare the value 
            if (input[i] > input[i + 1]) {
                // operate on the swapping
                console.log(`swapping pair ${input[i]} and ${input[i + 1]} in array [${input}]`);
                swap(input, i, i + 1);

                // increment of the swapping time
                swappingTime++;

                // keep the while loop running to see if additional swaps might be needed
                swapping = true;
            }
        }
    }

    console.log(`Swapped ${swappingTime} times.`);
};

// the algo has a time complexity of O(n^2); the optimal case has an Omega(n)

// testing

const arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("before sorting", arr1);
bubbleSortAscending(arr1);
console.log("after sorting", arr1);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("before sorting", arr2);
bubbleSortAscending(arr2);
console.log("after sorting", arr2);
