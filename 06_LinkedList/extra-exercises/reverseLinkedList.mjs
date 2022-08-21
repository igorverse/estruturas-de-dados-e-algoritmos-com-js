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

// T: O(n) and S: O(n)
function recursiveReverseLinkedList(head, previousNode = null) {
  if (!head) return previousNode
  
  const nextNode = head.next
  head.next = previousNode

  return recursiveReverseLinkedList(nextNode, head)
}

console.log(reverseLinkedList(numbers._head))
console.log(reverseLinkedList(linkedList._head))

// console.log(recursiveReverseLinkedList(numbers._head))
// console.log(recursiveReverseLinkedList(linkedList._head))
