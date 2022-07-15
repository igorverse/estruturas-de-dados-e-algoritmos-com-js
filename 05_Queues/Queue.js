class Queue {
  constructor() {
    this._count = 0
    this._lowestCount = 0
    this._items = {}
  }

  enqueue(element) {
    this._items[this._count] = element
    this._count++
  }

  dequeue() {
    if (this.isEmpty()) return undefined

    const removedElement = this._items[this._lowestCount]
    delete this._items[this._lowestCount]

    this._lowestCount++

    return removedElement
  }

  peek() {
    if (this.isEmpty()) return undefined

    return this._items[this._lowestCount]
  }

  size() {
    return this._count - this._lowestCount
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this._items = {}
    this._count = 0
    this._lowestCount
  }
}

const queue = new Queue()

console.log(queue.isEmpty())

queue.enqueue(5)
queue.enqueue(42)
console.log(queue)


console.log(queue.size())

queue.dequeue()
console.log(queue.size())

console.log(queue)
console.log(queue.peek())
