import { linkedList, numbers } from './linkedList.mjs'

// size of head1 > size of head2
// T: O(min(n, m)) and S: O(1) [because i'm working with references], where n is head1 and m is head2
function zipperList(head1, head2) {
  let tail = head1
  let currentNode1 = head1.next
  let currentNode2 = head2
  let counter = 0

  while (currentNode1 && currentNode2) {
    if (counter % 2 === 0) {
      tail.next = currentNode2
      currentNode2 = currentNode2.next
    } else {
      tail.next = currentNode1
      currentNode1 = currentNode1.next
    }

    tail = tail.next
    counter += 1
  }

  if (!currentNode1) tail.next = currentNode1
  if (!currentNode2) tail.next = currentNode2

  return head1
}

function recursiveZipperList(head1, head2) {
  if (!head1 && !head2) return null
  if (!head1) return head2
  if (!head2) return head1

  const next1 = head1.next
  const next2 = head2.next
  head1.next = head2
  head2.next = recursiveZipperList(next1, next2)

  return head1
}

console.log(recursiveZipperList(numbers._head, linkedList._head))
// console.log(zipperList(numbers._head, linkedList._head))