# Dicionários e Hashes

Em um conjunto (set), o interesse está no próprio valor como elemento principal. Em contrapartida, em um dicionário (mapa, dependendo da linguagem) e em hashes, os elementos são armazenados em pares **[chave, valor]**.

A implementação de dicionários e hashes são distintas, considerando-se que dicionários podem armazenar um valor único por chave e hashes não têm essa limitação.

## Dicionário (ou mapa)

Como já discutido acima, dicionários armazenam elementos em pares [chave, valor]. É uma estrutura de dados muito utilizada em alguns ramos da ciência da computação. Um bom caso de uso está no armazenamento de endereços de referência de objetos.

```
const map = new Map()
map.set('Darth Vader', 'darth@vader.com')
map.set('Luke Skywalker', 'luke@skywalker.com')
console.log(map.has('Darth Vader')) // true
console.log(map.has('Yoda')) // false
console.log(map.size) // 3
```

## Implementação Nativa ES2015 (ES6)

A ECMAScript 2015 tem uma implementação de dicionário. O nome atribuído à classe é *Map*.

## Tabela Hash

O **hashing** consiste em encontrar um valor em uma estrutura de dados o mais rápido possível. Para atingir tal objetivo, é feito o uso de funções hash, o que permite identificar a posição do valor buscado em O(1) (dependerá da função hash utilizada).

Uma função hash, de maneira resumida, faz o mapeamento de chave e valor. Portanto, dada uma entrada, ela retorna um número. Uma boa implementação de hashtable é extremamente dependente de uma boa função hash. No pior caso, identificar a posição do valor buscado terá tempo de execução O(n), mas uma boa função hash assegura a operação no caso médio (O(1)).

No JavaScript, pode-se considerar {} (Object) uma implementação de **hashtable** (também conhecida como **hashmap**).

## Colisões

Quando duas ou mais chaves são associadas ao mesmo espaço, acontece um fenômeno denominado colisão. Para tratar colisões, tabelas hashes podem ser implementadas usando-se listas ligadas, resultando-se, em contrapartida, em mais uso de memória. Sendo repetitivo, outra forma de evitar colisões é possuindo uma boa função hash.