import { LinkedList } from "./LinkedList.mjs"
import { DoublyLinkedList } from "./DoublyLinkedList.mjs"

console.log('--- Linked List ---')

const linkedList = new LinkedList()

linkedList.push(42)
linkedList.push(1)
linkedList.push(90)

console.log(linkedList)

linkedList.removeAt(1)
console.log(linkedList)

linkedList.insert(10, 1)

console.log(linkedList._head)
console.log(linkedList.indexOf(0))
console.log(linkedList.indexOf(10))
console.log(linkedList.remove(10))
console.log(linkedList.indexOf(10))
console.log(linkedList.indexOf(42))

console.log(linkedList.size())
console.log(linkedList.isEmpty())
console.log(linkedList.getHead())

console.log('\n--- Doubly Linked List ---')

const doublyLinkedList = new DoublyLinkedList()

console.log(doublyLinkedList)
doublyLinkedList.push(42)
console.log(doublyLinkedList)
doublyLinkedList.insert(10, 0)
console.log(doublyLinkedList._head)
