const divideByTwo = n => {
    let countIterations = 0;
    while (n > 1) {
        n = n / 2;
        countIterations++;
    }
    return countIterations;
};

const ns = [1, 2, 4, 8, 16, 32, 64, 128, 256, 1024];

for (const n of ns) {
    console.log(`n = ${n} - log2(n) = ${Math.log2(n)} - divideByTwo = ${divideByTwo(n)}`);
}

// Big O: (log n)
