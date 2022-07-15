// concat

const caramel = 'caramel'
const almostATwix = ['biscuit', 'chocolate']
const twix = almostATwix.concat(caramel)

console.log('concat -> ', twix) // [ 'biscuit', 'chocolate', 'caramel' ]

const numbers = [5, 10, 15, 16, 20, 25, 30]

const isMultipleOfFive = (number) => number % 5 === 0

// every
let isMultipleOfFiveResult = numbers.every(isMultipleOfFive) // numbers.every((number) => number => number % 5 === 0) -> também poderia ser escrito desta forma...

console.log('every -> ', isMultipleOfFiveResult) // false -> falhará quando chegar no 16, pois ele não é múltipo de 5

// some
isMultipleOfFiveResult = numbers.some(isMultipleOfFive)

console.log('some -> ', isMultipleOfFiveResult) // true -> porque tem pelo menos um elemento que é múltipo de 5

// forEach
const multiplyByThreeAndPrint = numbers.forEach((number) =>
  console.log('forEach -> ', number * 3)
) // multiplicará cada número do array por 3. É comum o uso quando não necessita de um retorno e é necessário iterar sobre todos os itens

// map -> iteration e acessor (devolve um novo array como resultado)
const elementsMultipliedByThree = numbers.map((number) => number * 3) // será gerado um novo array, mas o original não será afetado.

console.log('map -> ', elementsMultipliedByThree)

// filter -> iteration e acessor
const elementMultipleOfFive = numbers.filter(isMultipleOfFive) // neste caso, a função callback virará a regra do filtro. Tudo que obedece à regra será adicionado como elemento do array a ser originado

console.log('filter -> ', elementMultipleOfFive) // [5, 10, 15, 20, 25, 30]

// reduce -> iteration e acessor (devolve um único valor como resultado)
const sumOfNumbers = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
) // realizará a soma de todos os elementos do array number -> 121

console.log('reduce -> ', sumOfNumbers)

const zeros = Array(6).fill(0) // Criará um array de comprimento 6 e preenchido com zeros.
console.log(zeros)
