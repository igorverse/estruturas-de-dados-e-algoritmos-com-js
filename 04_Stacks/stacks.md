# Stacks

Uma pilha (stack), é uma estrutura de dados que obedece ao príncipio Last In, First Out (*LIFO*). Ou seja, a adição e remoção de novos itens ocorrem na extremidade da estrutura. O seu comportamento pode ser associado a uma pilha de livros, por exemplo. Geralmente, quando você vai adicionar um novo livro à pilha, você coloca-o no topo e quando quer ler o livro recém adicionado, ele é o primeiro a ser retirado do topo.

Trata-se de uma estrutura importantíssima. A memória do computador faz uso dela (pilha de chamada) para armazenar variáveis e chamadas de métodos.

Por meio dos métodos push() (inserção) e pop() (remoção), torna-se muito fácil mimetizar o comportamento LIFO da pilha.

```
const oddNumbers = [1, 3, 5, 7]

oddNumbers.push(9) // [1, 3, 5, 7, 9]
oddNumbers.pop() // 9
oddNumbers.pop() // 7
console.log(oddNumbers) // [1, 3, 5]
```

### Convenção de nomeclatura

Em JavaScript, quando usamos *underscore (_)*, é uma convenção para indiciar que se trata de um atributo privado. É importante frizar que não terá nenhum efeito prático na proteção do atributo. Trata-se apenas de uma convenção...