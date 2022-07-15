class Stack {
  constructor() {
    this._items = []
  }

  push(element) {
    this._items.push(element)
  }

  pop() {
    return this._items.pop()
  }

  peek() {
    return this._items[this._items.length - 1]
  }

  isEmpty() {
    return this._items.length === 0
  }

  size() {
    return this._items.length
  }

  clear() {
    this._items = []
  }
}

const stack = new Stack()

console.log(stack.isEmpty())

stack.push(10)
stack.push(42)

console.log(stack.isEmpty())
console.log(stack.peek())
console.log(stack.size())

stack.pop()
console.log(stack.peek())
stack.pop()
console.log(stack.size())

