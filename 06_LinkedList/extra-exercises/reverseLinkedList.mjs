import { linkedList, numbers } from './linkedList.mjs'

// T: O(n) and O(1)
function reverseLinkedList(head) {
  let previousNode = null
  let currentNode = head

  while (currentNode) {
    const nextNode = currentNode.next
    currentNode.next = previousNode
    previousNode = currentNode
    currentNode = nextNode
  }

  return previousNode
}

console.log(reverseLinkedList(numbers._head))
console.log(reverseLinkedList(linkedList._head))
