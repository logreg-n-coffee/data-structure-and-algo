const dynamicKnapsack = function (weightCap, weights, values) {
  const numItem = weights.length;  // or values.length
  const matrix = new Array(numItem);

  for (let index = 0; index <= numItem; index++) {
    matrix[index] = new Array(weightCap + 1);
    for (let weight = 0; weight <= weightCap; weight++) {
      if (index === 0 || weight === 0) {
        matrix[index][weight] = 0;
      } else if (weights[index - 1] <= weight) {
        const includeItem =
          values[index - 1] + matrix[index - 1][weight - weights[index - 1]];
        const excludeItem = matrix[index - 1][weight];
        matrix[index][weight] = Math.max(includeItem, excludeItem);
      } else {
        matrix[index][weight] = matrix[index - 1][weight];
      }
      console.log(`index=${index}, weight=${weight}`,'\n=========', matrix);
    }
  }
  return matrix[numItem][weightCap];
};

// Use this to test your function:
const weightCap = 50;
const weights = [31, 10, 20, 19, 4, 3, 6];
const val = [70, 20, 39, 37, 7, 5, 10];
console.log('result: ', dynamicKnapsack(weightCap, weights, val));

// big O runtime = O(index * weight)