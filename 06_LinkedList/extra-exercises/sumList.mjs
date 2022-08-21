import { numbers } from './linkedList.mjs'

// T: O(n) and S: O(1)
function sumList(head) {
  let currentNode = head
  let totalSum = 0

  while (currentNode) {
    totalSum += currentNode.element
    currentNode = currentNode.next
  }

  return totalSum
}

// T: O(n) and S: O(n)
function recursiveSumList(head) {
  if (!head) return 0

  return head.element + recursiveSumList(head.next)
}

console.log(sumList(numbers._head))
console.log(recursiveSumList(numbers._head))