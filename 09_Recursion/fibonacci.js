// iterative approach
// O(n) time complexity and O(1) space complexity
function iterativeFibonacci(n) {
  const lastTwo = [0, 1]
  let counter = 3

  while (counter <= n) {
    const nextFibonacci = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = nextFibonacci

    counter++
  }

  return n > 1 ? lastTwo[1] : lastTwo[0]
}

console.log(iterativeFibonacci(8)) // 13

// recursive approach
// O(2^n) time complexity and O(n) space complexity
function recursiveFibonacci(n) {
  if (n === 1) return 0
  if (n === 2) return 1

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(8)) // 13

// recursive approach with memoization (cache)
// O(n) time complexity and O(n) space complexity
function recursiveMemoizationFibonacci(n, fibonacciCache = {1: 0, 2: 1}) {
  if (fibonacciCache.hasOwnProperty(n)) return fibonacciCache[n]
  
  fibonacciCache[n] = recursiveMemoizationFibonacci(n - 1) + recursiveMemoizationFibonacci(n - 2)
  
  return fibonacciCache[n]
}

console.log(recursiveMemoizationFibonacci(8)) // 13
