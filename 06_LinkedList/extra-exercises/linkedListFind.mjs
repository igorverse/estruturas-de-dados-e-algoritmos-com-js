import { linkedList } from './linkedList.mjs'

// T: O(n) and S: O(1)
function linkedListFind(head, target) {
  let currentNode = head

  while (currentNode) {
    if (currentNode.element === target) return true

    currentNode = currentNode.next
  }

  return false
}

// T: O(n) and S: O(n)
function recursiveLinkedListFind(head, target) {
  if (!head) return false
  if (head.element === target) return true

  return recursiveLinkedListFind(head.next, target)
}

console.log(linkedListFind(linkedList._head, 'C'))
console.log(linkedListFind(linkedList._head, 'Z'))

console.log(recursiveLinkedListFind(linkedList._head, 'C'))
console.log(recursiveLinkedListFind(linkedList._head, 'Z'))