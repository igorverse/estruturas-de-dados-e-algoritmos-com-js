// iterative approach
// O(n) time complexity and O(1) space complexity
function iterativeFactorial(number) {
  if (number < 0) return

  let result = 1

  while (number > 0) {
    result *= number
    number--
  }

  return result
}

// recursive approach
// O(n) time complexity and O(n) space complexity
function recursiveFactorial(number) {
  if (number < 1) return 1

  return recursiveFactorial(number - 1) * number
}

console.log(iterativeFactorial(5))
console.log(iterativeFactorial(6))
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(6))