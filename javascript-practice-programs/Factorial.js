// calculate factorial using iteration
function factorial_iterative(n) {
    let res = 1;
    if (n == 0 || n == 1) {
        return res;
    }
    for (let i = n; i >= 1; i--) {
        res *= i;
    }
    return res;
}

// calculate factorial using recursion
function factorial_recursive(n) {
    return n == 0 || n == 1 ? 1 : n * factorial_recursive(n - 1);
}

// calculate factorial by storing previous results (memoization)
var memo = [];

function factorial_memoization(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    if (memo[n] > 0) {
        return memo[n];
    }
    return memo[n] = factorial_memoization(n - 1) * n;
}

// 4! = 4 * 3 * 2 * 1 = 24
let n = 4;
console.log(n + "! is " + factorial_iterative(4));
console.log(n + "! is " + factorial_recursive(4));
console.log(n + "! is " + factorial_memoization(4));