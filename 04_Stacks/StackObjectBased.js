class Stack {
  constructor() {
    this._count = 0
    this._items = {}
  }

  push(element) {
    this._items[this._count] = element
    this._count++
  }

  pop() {
    if (this.isEmpty()) return undefined
    
    this._count--

    const removedElement = this._items[this._count]
    delete this._items[this._count]

    return removedElement
  }

  isEmpty() {
    return this._count === 0
  }

  size() {
    return this._count
  }

  peek() {
    if (this.isEmpty()) return undefined

    return this._items[this._count - 1]
  }

  clear() {
    this._items = {}
    this._count = 0
  }
}

const stack = new Stack()

console.log(stack.isEmpty())

stack.push(10)
stack.push(42)

console.log(stack)


console.log(stack.peek())
console.log(stack.size())

stack.pop()
console.log(stack.peek())
stack.pop()
console.log(stack.size())