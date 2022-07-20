# Sets (Conjuntos)

Um conjunto (set) é uma coleção não ordenada de elementos únicos. É uma estrutura de dados que usa o mesmo conceito matemático dos conjuntos finitos, porém sob a perspectiva da ciência da computação.

{ 0, 1, 2, 3, 4} -> É um conjunto (set)
{ 0, 0, 1, 2, 3, 3, 4} -> Não é um conjunto (set), pois contém elementos duplicados

No JavaScript, a partir da ECMAScript 2015 (ES6), foi introduzida a classe nativa *Set*.

## Operações em conjuntos

- União: dados dois conjuntos, devolve um novo conjunto com elementos dos dois conjuntos especificados
- Intersecção: dados dois conjuntos, devolve um novo conjunto com os elementos presentes em ambos os conjuntos
- Diferença: dados dois conjuntos, devolve um novo conjunto com todos os elementos presentes no primeiro conjunto, mas não no segundo
- Subconjunto: confirma se um dado conjunto é um subconjunto de outro