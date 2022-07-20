# Recursion (Recursão)

Já dizia um velho sábio: "para entender a recursão, é preciso entender antes a recursão."

A recursão é uma técnica que possibilita a abordagem *dividir para conquistar*. Ou seja, ela possibilita quebrar um problema em partes menores do mesmo problema até que seja possível resolver o problema original.

Visto que a recursividade é envolve chamar a si mesmo, para evitar o estouro de pilha, é preciso ter pelo menos um *caso base* e o *caso recursivo*

## Pilhas de chamadas

Sempre que uma função é chamada ela vai para o topo da pilha de chamadas (call stack). Na recursão, as chamadas de funções são empilhadas uma em cima da outra. Por isso é importante ter um caso base, visto que, como já mencionado, pode ocorrer o estouro de pilha (stack overflow). Para o JavaScript, cada ambiente de execução pode ter uma determinada limitação do tamanho da pilha de chamadas.

## Recursão tem melhor desempenho?

*Não!* A versão iterativa costuma ser superior em termos de complexidade de tempo e espaço. Contudo, a recursão permite aumentar o entendimento de algumas soluções, principalmente quando estamos trabalhando com estruturas complexas, como árvores e grafos. Portanto, a adoção de recursão se deve principalmente à possibilidade de simplificar a resolução de alguns problemas.  