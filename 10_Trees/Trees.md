# Árvores (Trees)

Uma árvore é um modelo abstrato de uma estrutura hierárquica. O exemplo mais comum de uma árvore na vida real seria o de uma árvore genealógica ou o organograma de uma empresa.

Uma árvore é constituída de nós com um relacionamento pai-filho. Todo nó tem um pai (exceto o primeiro nó no topo) e zero ou mais filhos.

            *
        /       \
       *         *
     /   \     /   \ 
    *     *   *     *
   / \   / \ / \   / \
  *   * *  * *  * *   *

No exemplo acima, a árvore possuí três níveis.

Existem os nós internos e externos. O nó interno é aquele que tem pelo menos um filho. Um nó que não tem filho é denominado nó externo ou folha.

Um nó pode ter ancestrais e descendentes. Os ancestrais são o pai, avô, bisavô etc. O descendentes são os filhos, netos, bisnetos etc. Há, também, as subárvores, sendo a composição de um nó e seus descendentes.

## Árvore binária e árvore binária de busca

Um nó em uma árvore binária tem no máximo dois filhos: um filho à esquerda e um filho à direita. Uma BST (Árvore Binária de Busca) é uma árvore binária, mas permite armazenar somente nós com valores menores do lado esquerdo e nós com valores maiores do lado direito. A árvore desenhada acima representa uma BST.