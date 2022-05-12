function sum(x, y, z) {
  if (arguments[0] === 42) {
    console.log(
      `${arguments[0]} é a resposta para a vida, o universo e tudo mais!`
    )
  }

  return x + y + z
}

console.log(sum(42, 0, 0))
console.log(sum(0, 42, 0))
