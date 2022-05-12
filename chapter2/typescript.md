# TypeScript: adicionando tipagem estática ao JavaScript

Criado e mantido pela Microsoft, o TypeScript é um superconjunto do JavaScript. Portanto, o maior benefício do TypeScript é que você pode (e deve) continuar usando os recursos de JavaScript e adicionar um certo tempero a mais, como, por exemplo, a tipagem estática.

O TypeScript agrega muito no tempo de compilação, visto que ele é transpilado para JavaScript posteriormente.

## O choro de TypeScript

Como dito acima, no fim das contas o TypeScript será transpilado para JavaScript. Então, mesmo que você escreva um código JavaScript, apesar do erro que será apontado, não haverá um impedimento. O código será gerado normalmente...

## Inferência de tipo

Uma das grandes vantagens de usar TypeScript é a possibilidade de tipar as variáveis. Contudo, há alguns cenários em que é uma boa prática utilizar a inferência de tipos para diminuir a verbosidade do código.

```
let age: number = 42;
let existFlag: boolean = false;
let language: string = 'JavaScript'
```

Mesmo em TypeScript, devido à inferência de tipo, o código acima poderia ser simplesmente escrito da seguinte forma:

```
let age = 20; // number
let existsFlag = false; // boolean
let language = 'JavaScript'; // string
```

Um uso mais interessante da tipagem estática é para quando você não inicializa a sua variável. Qualquer variável que não seja tipada, será tratada com **any** (o que é considerado um tipo no TypeScript).

## Interfaces

TypeScript apresenta dois conceitos distintos para **interfaces**. O primeiro conceito refere-se à descrição de atributos e de métodos que um objeto deve ter.

```
interface Movie {
  title: string;
  duration: number;
}

function showMovieTitle(movie: Movie) {
  console.log(movie.title)
}

const spiderMan = { title: 'Spider Man', duration: 180}
const starWars = { title: 'Star Wars', duration: 200, genre: scifi} // !!! Note que aqui tem mais um atributo

console.log(spiderMan)
console.log(starWars)
```

No exemplo acima, `star wars` tem o atributo genre. Apesar disso, ele também será tratado como Movie devido ao conceito de **duck typing**. Se algo se parece com um pato, nada como um pato e faz quack como um pato, então é um pato!

O segundo conceito está ligado às ideias de orientação objetos. Ou seja, uma interface é um contrato em que definimos o comportamento que as classes ou interfaces que o implementarão devem ter.

```
interface Transact {
  withdraw(value): number
}

class Bank implements Transact {
  ...
  withdraw(value): number {
    this.saldo -= value

    return value
  }
}
```

No exemplo acima, a interface **Transact** diz para a classe Bank que ela deve implementar um método chamado **whitdraw**. Logo, estabelece-se um contrato.

## Genéricos

Genéricos permitem passar um tipo de forma dinâmica para a interface.
