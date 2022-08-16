class ValuePair {
  constructor (key, value) {
    this.key = key
    this.value = value
  }

  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}

export default class Dictionary {
  constructor() {
    this.table = {}
  }

  hasKey(key) {
    return this.table[key] || false
  }

  set(key, value) {
    const tableKey = new String(key)
    this.table[tableKey] = new ValuePair(key, value)
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[key]

      return true
    }

    return false
  }

  get(key) {    
    return this.table[key]
  }

  keyValues() {
    return Object.values(this.table)
  }

  keys() {
    return Object.keys(this.table)
  }
  
  size() {
    return this.keys().length
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.table = {}
  }
}

const dictionary = new Dictionary()

dictionary.set('foo', 'foo@baz.com')
dictionary.set('baz', 'baz@foo.com')
dictionary.set('foobaz', 'foobaz@bazfoo.com')

console.log(dictionary.hasKey('foo'))
console.log(dictionary.hasKey('tega'))

console.log(dictionary.keys())
console.log(dictionary.keyValues())
console.log(dictionary.size())

console.log(dictionary.get('foo'))