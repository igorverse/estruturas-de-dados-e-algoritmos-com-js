# JavaScript: orientação a objetos

JavaScript é uma linguagem **Prototype-based**, em que a reutilização de comportamento (herança) é realizada por meio de um processo de reutilização de objetos existentes que servem como protótipos. Portanto, usam-se objetos generalizados que podem ser clonados ou estendidos.

## Declarando Classes

Com a ES6, veio uma nova forma de declarar classes em JavaScript. Por baixo dos panos, uma classe JavaScript continua sendo uma função, mas é possível usar açúcar sintático para tornar o código em algo mais elegante.

```
function Movie(title, genre, duration) {
  this.title = title
  this.genre = genre
  this.duration = duration
}
```

```
Movie.prototype.showTitle = function() {
  console.log(this.title)
}
```

Usando açúcar sintático:

```
class Movie {
  constructor(title, genre, duration) {
    this.title = title
    this.genre = genre
    this.duration = duration
  }

  showTitle() {
    console.log(this.title)
  }
}
```

## Herança

Pô, olha se isso não te lembra um Java da vida:

```
class Streaming extends Movie {
  constructor(title, genre, duration, platformName) {
    super(title, genre, duration)
    this.platformName = platformeName
  }

  showPlatformName() {
    console.log(this.platformName)
  }
}
```

Apesar de poder lembrar, o comportamento de uma classe JavaScript é diferente de Java ou C++. Basta lembrar que, como dito no início, JavaScript é uma linguagem baseada em protótipos. Então, é só açúcar sintático mesmo!

## getters e setters

Dá sim para usar get e set. Além disso, há uma convenção para tornar um atributo privado. Usa-se **\_**.

```
class Animal {
  constructor(name, specie) {
    this._name
    this._specie
  }

  get name() {
    return this._name
  }

  get specie() {
    return this._specie
  }

  set name(name) {
    this._name = name
  }

  set specie(specie) {
    this._specie = specie
  }
}
```

Para instanciar:

```
const lion = new Animal('Leo', 'Lion')

console.log(lion.name) // get name() está sendo invocado.

lion.name = 'Messi' // set name(name) está sendo invocado.
```

Note que get e set são referenciados como se fosse atributos. Ah! e o **\_** antes do nome do atributo não adiciona nenhuma funcionalidade para tornar o acesso direto indisponível. É apenas uma convenção (seja uma boa pessoa)!
