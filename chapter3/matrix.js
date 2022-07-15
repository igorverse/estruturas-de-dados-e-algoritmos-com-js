const salesOfTheWeek = [
  [0, 1, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 1, 0, 0],
]

for (let i = 0; i < salesOfTheWeek.length; i++) {
  for (let j = 0; j < salesOfTheWeek[i].length; j++) {
    console.log(salesOfTheWeek[i][j])
  }
}

console.table(salesOfTheWeek)
