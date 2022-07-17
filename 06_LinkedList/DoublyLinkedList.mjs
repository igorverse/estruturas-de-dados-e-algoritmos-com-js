import { LinkedList } from './LinkedList.mjs'
import { DoublyNode } from './DoublyNode.mjs'

export class DoublyLinkedList extends LinkedList {
  constructor(compareElements = (a, b) => a === b) {
    super(compareElements)
    this._tail = null
  }

  insert(element, index) {
    if (index >= 0 && index < this._itemsCounter) {
      const node = new DoublyNode(element)
      let currentNode = this._head

      if (index === 0) {
        if (!this._head) {
          this._head = node
          this._tail = node
        } else {
          node.next = this._head
          currentNode.prev = node
          this._head = node
        } 
      } else if (index === this._itemsCounter - 1) {
        currentNode = this._tail
        currentNode.next = node
        node.prev = currentNode
        this._tail = node
      } else {
        const previousNode = this.getElementAt(index - 1)
        currentNode = previousNode.next
        node.next = currentNode
        currentNode.prev = node
        node.prev = previousNode
      }
      this._itemsCounter++
      return `${element} inserted at index: ${index}`
    }
    
    return 'Invalid index!'
  }

}

