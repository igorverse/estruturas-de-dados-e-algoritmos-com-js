import { linkedList } from './linkedList.mjs'

// T: O(n) and S: O(1)
function getNodeValue(head, index) {
  let currentNode = head
  let nodeCounter = 0

  while (currentNode) {
    if (nodeCounter === index) return currentNode.element

    currentNode = currentNode.next
    nodeCounter++
  }

  return null
}

// T: O(n) and S: O(n)
function recursiveNodeValue(head, index) {
  if (index === 0) return head.element
  if (!head) return null

  return recursiveNodeValue(head.next, index - 1)
}

console.log(getNodeValue(linkedList._head, 2))
console.log(getNodeValue(linkedList._head, 0))
console.log(getNodeValue(linkedList._head, 10))

console.log(recursiveNodeValue(linkedList._head, 2))
console.log(recursiveNodeValue(linkedList._head, 0))
console.log(recursiveNodeValue(linkedList._head, 10))