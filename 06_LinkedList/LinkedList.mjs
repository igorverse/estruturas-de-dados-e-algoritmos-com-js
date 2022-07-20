import { Node } from './Node.mjs'

export class LinkedList {
  constructor(compareElements = (a, b) => a === b) {
    this._itemsCounter = 0
    this._head = null
    this._compareElements = compareElements
  }

  push(element) {
    const node = new Node(element)
    let currentNode

    if (!this._head) {
      this._head = node
    } else {
      currentNode = this._head
      while (currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = node
    }

    this._itemsCounter++
  }

  getElementAt(index) {
    if (index >= 0 && index < this._itemsCounter) {
      let currentNode = this._head
      for (let i = 0; i < index; i++) {
        if (!currentNode) break

        currentNode = currentNode.next
      }

      return currentNode
    }

    return null
  }

  removeAt(index) {
    if (index >= 0 && index < this._itemsCounter) {
      let currentNode = this._head

      if (index === 0) {
        this._head = currentNode.next
      } else {
        const previousNode = this.getElementAt(index - 1)
        currentNode = previousNode.next
        previousNode.next = currentNode.next
      }

      this._itemsCounter--

      return `${currentNode.element} removed at index: ${index}.`
    }

    return `Invalid index!`
  }

  insert(element, index) {
    if (index >= 0 && index < this._itemsCounter) {
      const node = new Node(element)

      if (index === 0) {
        const currentNode = this._head
        node.next = currentNode
        this._head = node
      } else {
        const previousNode = this.getElementAt(index - 1)
        const currentNode = previousNode.next
        node.next = currentNode
        previousNode.next = node
      }
      
      this._itemsCounter++

      return `${element} inserted at index ${index}`
    }

    return 'Invalid index!'
  }

  indexOf(element) {
    let currentNode = this._head

    for (let i = 0; i < this._itemsCounter; i++) {
      if (!currentNode) break

      if (this._compareElements(element, currentNode.element)) {
        return i
      }
      
      currentNode = currentNode.next
    }

    return -1
  }

  remove(element) {
    const index = this.indexOf(element)
    
    return this.removeAt(index)
  }

  size() {
    return this._itemsCounter
  }

  isEmpty() {
    return this._itemsCounter === 0
  }

  getHead() {
    return this._head
  }
}