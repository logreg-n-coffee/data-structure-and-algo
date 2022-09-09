const forIterativeFactorial = n => {
    if (n < 0) {
        return false;
    }
    if (n === 0) { 
        return 1;
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
        // console.log(`i = ${i}, result = ${result}`);
    }
    return result;
};

console.log('forIterativeFactorial(10)', forIterativeFactorial(10));

const whileIterativeFactorial = n => {
    let result = 1;
    while (n > 0) {
        result *= n;
        n -= 1;
    }
    return result;
};

console.log('whileIterativeFactorial(10)', whileIterativeFactorial(10));

const recursiveFactorial = n => {
    if (n === 0) {
        return 1;
    }
    if (n > 0) {
        return recursiveFactorial(n - 1) * n;
    }
};

console.log('recursiveFactorial(10)', recursiveFactorial(10));
