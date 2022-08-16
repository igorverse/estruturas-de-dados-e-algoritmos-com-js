# Dicionários e Hashes

Em um conjunto (set), o interesse está no próprio valor como elemento principal. Em contrapartida, em um dicionário (mapa, dependendo da linguagem) e em hashes, os elementos são armazenados em pares **[chave, valor]**.

A implementação de dicionários e hashes são distintas, considerando-se que dicionários podem armazenar um valor único por chave e hashes não têm essa limitação.

## Dicionário (ou mapa)

Como já discutido acima, dicionários armazenam elementos em pares [chave, valor]. É uma estrutura de dados muito utilizada em alguns ramos da ciência da computação. Um bom caso de uso está no armazenamento de endereços de referência de objetos.

## Implementação Nativa ES2015 (ES6)

A ECMAScript 2015 tem uma implementação de dicionário. O nome atribuído à classe é *Map*.