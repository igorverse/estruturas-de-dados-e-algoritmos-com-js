import { linkedList } from './linkedList.mjs'

// T: O(n) and S: O(1)
function traverseLinkedList(head) {
  let current = head
  
  while (current) {
    console.log(current.element)
    current = current.next
  }
}

// T: O(n) and S: O(1)
function recursiveTraverseLinkedList(head) {
  if (!head) return

  console.log(head.element)

  recursiveTraverseLinkedList(head.next)
}

traverseLinkedList(linkedList._head)
recursiveTraverseLinkedList(linkedList._head)