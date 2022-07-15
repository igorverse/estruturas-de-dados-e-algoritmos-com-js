# Arrays no TypeScript

Tudo que foi discutido para arrays usando JavaScript é valido para TypeScript. A maior diferença fica mesmo na possibilidade de fazer a verificação de tipos em tempo de compilação no TypeScript.

Um exemplo em TypeScript:

```
interface Person {
  name: string;
  age: number
}

const friends: Person[] = [{name: 'Carlos', age: 24}, {name: 'Pastori', age: 23}]

```