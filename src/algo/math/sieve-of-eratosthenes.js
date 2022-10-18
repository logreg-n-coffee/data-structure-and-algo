// finding prime numbers
// a prime number is a positive number with no divisors but 1 and itself. 2, 3, 11, and 443 are all prime numbers.

// illustration: https://content.codecademy.com/PRO/skill-paths/jsip/interactives/eratosthenes/index.html

/** 
 * At the beginning, suppose every number is prime
 * 1. Create an array of all integers from 2 to n
 * 2. Set all elements of the array to true
 * 3. Starting with 2, iterate through the array. If the current element is true, it is still considered prime. 
 * Since we know that all multiples of that number are NOT prime, iterate through all multiples of that number up to n and set them equal to false
 * 4. Change the current element to the next non-false index.
 * 5. Return the corresponding number value for any element still marked as prime (value of true).
 */


// Time complexity: O(n log (log (n)) - 
// https://en.wikipedia.org/wiki/Divergence_of_the_sum_of_the_reciprocals_of_the_primes
const sieveOfEratosthenes = (limit) => {
    // use indices to represent the actual number and 
    // true/false to represent whether it is prime number or not
    // original algo: 2, ..., n (n-1 numbers) current array: ignore array[0] and array[1]
    const output = Array(limit + 1).fill(true);
    output[0] = false;
    output[1] = false;

    // create an outer loop to iterate from 2 to the limit
    for (let i = 2; i<= Math.pow(limit, 0.5); i++) {
        if (output[i]) {
            for (let j = Math.pow(i, 2); j <= limit; j = j + i) {
                output[j] = false;
            }
        }
    }

    // remove the non-prime numbers
    const result = output
            .map((item, index) => {
                if (item) return index;
            })
            .filter(item => item !== undefined);

    // or get the result using reduce()
    // const result output.reduce((primes, current, index) => {
    //   if (current) {
    //     primes.push(index);
    //   }
    //   return primes;
    // }, []);

    return result;
};

// test limit === 10000
const range10000 = sieveOfEratosthenes(10000);
console.log(range10000);

