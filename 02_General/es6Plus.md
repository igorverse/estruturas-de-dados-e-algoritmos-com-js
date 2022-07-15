# Um pouco de ES6+

## Definindo const e let

A ES2015 (ES6) introduziu a palavra reservada **const** e a palavra reservada **let** (substituta da **var**). Enquanto **const** tem valor somente para leitura, ou seja, é um valor constante, **let** permite mudar sua referência. **var** caiu em desuso devido ao seu comportamento um tanto perigoso.

## const x let: quando usar?

Não há uma forma certa ou errada. Dependerá do contexto. Como dito acima, const é um valor constante e, portanto, de referência (à variável) imutável. Então, uma prática amplamente adotada pelos desenvolvedores é usar const se a referência à variável não mudar e let quando há a necessidade de mudar a referência à variável.

## Templates literais

Os templates literais permitem a criação de strings sem a necessidade de concatenar os valores. Para isso, usa-se a seguinte sintaxe:

```
`valor: ${variavelASerMencionada}`
```

Note que há o uso do acento grave (`) e, para interpolação, usa-se ${}.

## Arrow functions

Arrow functions são sugar syntax para definir funções. É mais fácil demonstrar um exemplo prático de simplificação possibilitado por essa sintaxe:

- declaração com a sintaxe mais comum:

```
const sayHelloTo = function (name) {
  return `Hello, ${name}`
}

```

- declaração com a sintaxe arrow function:

```
const sayHelloTo = (name) => {
    return `Hello, ${name}`
}
```

- No caso acima, que **só tem uma instrução**, pode-se simplificar ainda mais: (retorno implícito)

```
const sayHelloTo = (name) => `Hello, ${name}`
```

Note que a maior diferença é apenas a omissão da palavra reservada **function** e o uso de **=>**.

## Valores Default

ES6+ também possibilita definir funções com valores default. Antes era necessário fazer um manejo no escopo da função, o que a tornava um tanto feia.

```
function multiply(x = 6, y = 7){
  return x + y
}
```

Funções JavaScript têm um objeto chamado **arguments** embutido. É possível acessá-lo!

## Operadores de espalhamento (spread operator)

O spread operator (...) é bem útil para lidar com arrays. Com ele, como o nome sugere, é possível fazer o espalhamento de um array.

```
const oddNumbers = [1, 3, 5, 7]
const pairNumbers = [2, 4, 6, 8]
const allNumbers = [0, ...oddNumbers, ...pairNumbers] // [0, 1, 3, 5, 7, 2, 4, 6, 8]
```

O código acima representa um uso possível para o **spread operator** (...)

## Desestruturação de objetos e arrays

Considere o seguinte objeto:

```
const dev = {
  name: 'Igor',
  birthYear: 1998,
  techs: ['javascript', 'go', 'elixir']
}
```

A desestruturação do objeto ficará:

```
const { name, birthYear, techs } = dev

console.log(name) // Igor
console.log(birthYear) // 1998
console.log(techs) // ['javascript', 'go', 'elixir']
```

Ou seja, você passa a ter o acesso a cada propriedade do objeto.

Para arrays, a ideia é semelhante... Você pode usar essa sintaxe de desestruturação para inicializar variáveis de uma só vez:

```
const [tech1, tech2, tech3] = ['javascript', 'go', 'elixir']
```

Um código equivalente será:

```
const tech1 = 'javascript'
const tech2 = 'go''
const tech3 = 'elixir'
```

Outra utilidade da **desestruturação para arrays** é a possibilidade de fazer swapping:

```
[first, second] = [second, first]
```

O equivalente seria:

```
const tmp = first
first = second
second = tmp
```

Note como a primeira solução é mais elegante...
