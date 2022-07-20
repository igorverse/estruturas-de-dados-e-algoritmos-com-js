const oddNumbers = new Set()
const evenNumbers = new Set()
const randomNumbers = new Set()

for (let number = 0; number < 10; number++) {
  if (number % 2 !== 0) {
    oddNumbers.add(number)
  } else {
    evenNumbers.add(number)
  }

  const randomDivisor = Math.floor(Math.random(0, 1) * 10)

  if (number % randomDivisor === 0) {
    randomNumbers.add(number)
  }
}

const setUnion = (firstSet, secondSet) => {
  const union = new Set()
  
  firstSet.forEach(value => union.add(value))
  secondSet.forEach(value => union.add(value))

  return union
}

const setIntersection = (firstSet, secondSet) => {
  const intersection = new Set()

  firstSet.forEach(value => {
    if (secondSet.has(value)) intersection.add(value)
  })

  return intersection
}

const setDifference = (firstSet, secondSet) => {
  const difference = new Set()

  firstSet.forEach(value => {
    if (!secondSet.has(value)) difference.add(value)
  })

  return difference
}

console.log(oddNumbers)
console.log(evenNumbers)
console.log(randomNumbers)
console.log(setUnion(oddNumbers, evenNumbers))
console.log(setIntersection(oddNumbers, evenNumbers))
console.log(setIntersection(oddNumbers, randomNumbers))
console.log(setIntersection(evenNumbers, randomNumbers))
console.log(setDifference(oddNumbers, evenNumbers))
console.log(setDifference(oddNumbers, randomNumbers))
console.log(setDifference(evenNumbers, randomNumbers))
