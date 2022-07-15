# Arrays

Um array é uma estrutura de dados simples que armazena valores do mesmo tipo, sequencialmente, na memória. No JavaScript, contudo, é possível criar um array com tipos diferentes (o que, por definição, não é um array).

## Inicializando arrays

```
let monthsOfTheYear = [] // inicializando array vazio

monthsOfTheYear = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const animals = new Array('Leão', 'Tigre', 'Touro') // Aqui é usada a estratégia de instanciar um array. Contudo, não é a melhor prática.
```

Note que foram usadas as palavras **const** e **let**. Fica a gosto do desenvolvedor o uso, visto que a maior diferença é **const** não permitir a referência à variável.

## Acessando elementos

No JavaScript, o array é 0-based-indexing. Portanto, o acesso ao primeiro elemento seria da seguinte forma:

`console.log(monthsOfTheYear[0]) // Janeiro`

## Acrescentando elementos

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

Para **acrescentar um número ao final do array**, poderíamos usar, por exemplo, as seguintes abordagens:

`numbers[numbers.length] = 10`

`numbers.push(10)`

O push permite adicionar elementos ao final do array. Inclusive, mais de um elemento...

No JavaScript, o array é mutável. Outras linguagens (Java, por exemplo) não permitiram essa mudança dinâmica.

Para acrescentar um número ao início do array, podemos usar as seguintes abordagens:

```
Array.prototype.insertFirstPosition = function(value) => {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value
}
```

No código acima, ao usar **prototype**, o método insertFirstPosition ficará disponível para todas as instâncias de array. Note ainda que está sendo feito um deslocamento. No fim do deslocamento, o valor de interesse é atribuído à posição inicial do array.

Contudo, o JavaScript já tem o método **unshift** que permite inserir elementos ao início do array.

```
const numbers = [1, 2, 3, 4]
numbers.unshift(0)
console.log(numbers) // [0, 1, 2, 3, 4]
```

## Removendo elementos

Se o objetivo é remover o último elemento, pode-se usar **pop**:

```
numbers.pop() // [0, 1, 2, 3, 4] -> o 4 será removido
console.log(numbers) // [0, 1, 2, 3]
```

Se o objetivo for remover um elemento do início do array, têm-se algumas abordagens possíveis:

```
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}
```

A solução acima apresenta uma pequena peculiaridade, visto que, na verdade, está ocorrendo um deslocamento dos elementos para a esquerda. Então, como resultado, teremos o array com o mesmo comprimento e com o último elemento sendo do tipo **undefined**.

Uma abordagem melhor é usar o método **shift**:

```
const numbers = [-1, 0, 1, 2, 3]
numbers.shift()

console.log(numbers) // [0, 1, 2, 3]
```

Ao usar o **shift** o elemento será removido e o comprimento do array será reduzido. Ou seja, não apresenta a peculiaridade da primeira abordagem.

## Adição e remoção de elementos em uma posição específica

O método **splice** pode servir para tal propósito. O splice pode ser usado tanto com o propósito de remoção como de adição.

`splice(posicaoInicial, quantidadeDeElementosASeremRemovidos)`

```
const numbers = [1, 1, 2, 3, 5, 8]
numbers.splice(2, 2) // Pode ser lido: a partir da posição 2 (inclusive), remova 2 elementos

console.log(numbers) // [1, 1, 5, 8]
```

Agora, caso o objetivo seja a adição de elementos:

`splice(posicaoInicial, quantidadeDeElementosASeremRemovidos, elemento1, ..., elementoN)``

```
const numbers = [1, 3, 5, 7]
numbers.splice(4, 0, 9, 11) // A partir da posição 4, remova 0 elementos e adicione 9 e 11

console.log(numbers) // [1, 3, 5, 7, 9, 11]
```

É possível, ainda, adicionar e remover elementos:

```
const numbers = [1, 1, 2, 3, 5, 9, 10, 21]
numbers.splice(5, 2, 8, 13) // A partir da posição 5, remova 2 elementos e adicione 8 e 13

console.log(numbers) // [1, 1, 2, 3, 5, 8, 13, 21]
```

## Arrays bidimensionais e multidimensionais

JavaScript não tem suporte para matrizes. Contudo, é possível driblar aspecto implementando arrays de arrays.

Suponha que queremos representar a venda ou não venda do jogo Elden Ring a cada hora do dia para os 5 dias úteis da semana de uma loja de games que fica aberta entre 10h e 17h:

```
const salesOfTheWeek = [[0, 1, 1, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0], [1, 1, 1, 1, 1, 0, 1], [1, 1, 1, 0, 0, 0, 1], [0, 1, 1, 1, 1, 0, 0]]
```

O resultado seria uma matrix 5 x 7, em que as linhas representam os dias da semana e as colunas representam se pelo menos um jogo foi vendido a cada hora de funcionamento da loja (0 -> não, 1 -> sim).

Para iterar uma matriz, pode-se usar a seguinte abordagem:

```
for (let i = 0; i < salesOfTheWeek.length; i++) {
  for (let j = 0; j < salesOfTheWeek[i].length; j++) {
    console.log(salesOfTheWeek[i][j])
  }
}
```

Um jeito elegante de exibir uma matriz é usando **console.table**. Mas só é válido se você pretende apenas imprimir a matriz.

## Métodos nativos de array em JavaScript

Quando comparada a outras linguagens, o JavaScript possui muitos recursos standard interessantes.

- **concat** -> Junta vários arrays e devolve uma cópia dos arrays concatenados
- **every** -> Testa se todos os elementos no array passam pelo teste fornecido (uma função)
- **filter** -> Retorna um array de elementos depois de filtrar certos elementos do array original
- **forEach** -> Executará o mesmo código (função) para cada elemento de um array
- **join** -> Reúne todos os elementos do array em uma string
- **indexOf** -> Pesquisa o array em busca de elementos específicos e devolve a sua posição
- **lastIndexOf** -> Devolve a posição do último item do array que corresponde ao critério de pesquisa
- **map** -> Pega um argumento de uma callback function e retorna um novo array
- **reverse** -> inverte o array: [1, 2, 3] -> [3, 2, 1]
- **slice** -> A partir do índice especificado, cria-se um novo array
- **some** -> testa se pelo menos um elemento passa no teste implementado pela função fornecida
- **sort** -> Organiza o array de acordo com a regra especificada. Por padrão, ordena de forma crescente (considerando o unicode)
- **toString** -> É gerada uma string a partir do array

Dos métodos acima, podemos classificá-los em **mutator**, **acessor** e **iteration**:

- mutator: métodos que modificam o array original
- acessor: métodos que retornam um novo valor ou representação do array original
- iteration: métodos que operam em cada item de um array, um de cada vez

Note que há a possibilidade de um método possuir mais de uma categorização, mas jamais possuirá as três.

### Novas Funcionalidades ES6 e ES7

- **@@iterator** -> devolve um objeto que contém os pares chave/valor do array. Pode ser chamado sincronamente para obter a chave/valor dos elementos do array.
- **copyWithin** -> Copia uma sequência de valores do array na posição de um índice de início
- **entries** -> Devolve @@iterator, que contém pares chave/valor
- **includes** -> verifica se um determinado elemento está presente no array. Retorna um booleano.
- **find** -> retorna o primeiro elemento que atende uma dada condição
- **findIndex** -> retorna o índice do primeiro elemento que atender uma dada condição.
- **fill** -> preenche o array com um valor estático
- **from** -> cria um novo array a partir de um array existente
- **keys** -> devolve @@iterator contendo as chaves do array
- **of** -> cria um novo array a partir dos argumentos passados para o método
- **values** -> Devolve @@iterator contendo os valores do array


### Ordenando Elementos 

O JavaScript possui um método de ordenação built-in (sort()).

Por exemplo, um array já ordenado crescentemente:

`const ascendingArray = [1, 2, 5, 7, 9, 42]`

Uma forma de mudar para uma ordenação decrescente é:

`const descendingArray = ascendingArray.reverse() // [42, 9, 7, 5, 2, 1]`

Agora, caso o objetivo seja ordenar um array:

```
const array = [43, 2, 9, 21, 0, -9]
const sortedArray = array.sort((a, b) => a - b) // [-9, 0, 2, 9, 21, 43]
```
*(a, b) => a - b* Esse trecho é responsável por definir a regra de ordenação. Neste caso, está sendo feita uma simples comparação, considerando que o array deverá ser ordenado crescentemente. É importante especificar uma regra de ordenação para evitar colaterais indesejados, visto que a ordenação padrão é com base na pontuação de código unicode.

### Pesquisando Elementos

Há dois métodos built-in: **indexOf**, que devolve o índice do primeiro elemento correspondente ao argumento passado e **lastIndexOf**, que devolve o índice do último elemento encontrado.

O ES6 e ES7 implementou alguns métodos de pesquisa bem legais, que já foram destacados mais para cima: **find**, **findIndex**, **includes**

### Conversão de array para String

Para coverter um array em string, há duas formas built-in: **toString()** e **join**

```
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.toString()) // 1, 2, 3, 4, 5
console.log(numbers.join('-')) // 1-2-3-4-5
```

Note que, para o método **join**, é possível definir um separador...

 
