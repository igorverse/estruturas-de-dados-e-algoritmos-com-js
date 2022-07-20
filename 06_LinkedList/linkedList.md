# Linked List (Lista Ligada)

Assim como os arrays, as listas ligadas armazenam uma coleção sequencial de elementos. Contudo, uma grande diferença é que os elementos não são posicionados de forma contígua na memória. Cada elemento de uma lista ligada possuí o seu valor e o endereço de memória do elemento seguinte (pointeiro).

Um bom exemplo do dia a dia que pode ser usado para associar à lista ligada é o trem. Um trem é composto por vários vagões ligados entre si. É possível mudar o vagão de lugar, adicionar um novo, removê-lo etc. Portanto, é um comportamento bem semelhante ao empreendido pela lista ligada.

## Doubly Linked List (Lista Duplamente Ligada)

A maior diferença entre uma *lista ligada* e uma *lista duplamente ligada* é que a *lista duplamente ligada* possui uma ligação para o nó anterior e outra para o nó seguinte. Em outras palavras, cada nó tem dois ponteiros.

## Lista Ligada Circular

A lista ligada circular pode ter uma direção, como na lista ligada, ou duas direções, como na lista duplamente ligada. A maior diferença aqui é que *tail.next* faz referência ao primeiro elemento da lista e não a *null*.

## Lista Ligada Ordenada

É uma lista que mantém todos os seus elementos ordenados sem a necessidade de aplicar um algoritmo de ordenação. Para que o objetivo seja atingido, o elemento é sempre inserido na sua posição correta.

## Conclusão

A principal vantagem de uma lista ligada em relação a um array está na sua capacidade de adicionar e remover elementos sem a necessidade de deslocar seus elementos, como é o caso do array. Portanto, quando existe a necessidade de inserção e remoção de muitos elementos, a lista ligada tende a ser uma melhor escolha quando comparada ao array.