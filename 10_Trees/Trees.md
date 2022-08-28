# Árvores (Trees)

Uma árvore é um modelo abstrato de uma estrutura hierárquica. O exemplo mais comum de uma árvore na vida real seria o de uma árvore genealógica ou o organograma de uma empresa.

Uma árvore é constituída de nós com um relacionamento pai-filho. Todo nó tem um pai (exceto o primeiro nó no topo) e zero ou mais filhos.
```
// árvore 1

            *
        /       \
       *         *
     /   \     /   \ 
    *     *   *     *
   / \   / \ / \   / \
  *   * *  * *  * *   *
```

No exemplo acima, a árvore possuí três níveis.

Existem os nós internos e externos. O nó interno é aquele que tem pelo menos um filho. Um nó que não tem filho é denominado nó externo ou folha.

Um nó pode ter ancestrais e descendentes. Os ancestrais são o pai, avô, bisavô etc. O descendentes são os filhos, netos, bisnetos etc. Há, também, as subárvores, sendo a composição de um nó e seus descendentes.

## Árvore binária e árvore binária de busca

Um nó em uma árvore binária tem no máximo dois filhos: um filho à esquerda e um filho à direita. Uma BST (Árvore Binária de Busca) é uma árvore binária, mas permite armazenar somente nós com valores menores do lado esquerdo e nós com valores maiores do lado direito. A árvore desenhada acima representa uma BST.

## Percorrendo uma árvore

Percorrer uma árvore é o processo de visitar todos os seus nós.
```
// árvore 2

             11
        /         \
       7           15
     /   \        /   \ 
    5     9      13    20
   / \   / \    / \   / \
  3   6 8  10  12 14 18 25
```
### Percurso em-ordem (in-order)

Visita todos os nós de uma BST em **ordem crescente**. Portanto, todos os nós serão visitados do menor para o maior.

Considerando a *árvore 2* acima, o percurso em-ordem seria: `[3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]`

### Percurso pré-ordem (pre-order)

Visita o nó **antes** de visitar seus descendentes.

Considerando a *árvore 2* acima, o percurso pré-ordem seria: `[11, 7, 5, 6, 9, 8, 10, 15, 13, 12, 14, 29, 18, 25]`

### Percurso pós-ordem (post-order)

Visita o nó **após** visitar todos os seus descendentes.

Considerando a *árvore 2* acima, o percurso pós-ordem seria: `[3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11]`