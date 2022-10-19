const memo = {};

const fibonacci1 = n => {
  let returnValue;
  
  if (memo[n]) {
    returnValue = memo[n];
  } else if (n === 0 || n === 1) {
    returnValue = num;
  } else {
    returnValue = fibonacci1(n - 1) + fibonacci1(n - 2);
    memo[n] = returnValue;
  }
  return returnValue;

};

const fibonacci2 = (n) => {
  // base case
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // create empty dynamic array
  const dp = Array(n + 1).fill(0);

  // paterns
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// time complexity: O(n) - space complexity: O(n)