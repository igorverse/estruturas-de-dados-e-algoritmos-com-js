import { linkedList } from './linkedList.mjs'

// T: O(n) and S: O(n)
function linkedListValues(head) {
  let current = head
  const values = []
  
  while (current) {
    values.push(current.element)
    current = current.next
  }

  return values
}

// T: O(n) and S: O(n)
function recursiveLinkedListValues(head) {
  const values = []
  
  fillValues(head, values)

  return values
}

function fillValues(head, values) {
  if (!head) return values

  values.push(head.element)

  return fillValues(head.next, values)
}

console.log(linkedListValues(linkedList._head))
console.log(recursiveLinkedListValues(linkedList._head))