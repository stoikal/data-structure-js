import LinkedList from "../SinglyLinkedList";

class Stack {
  stack: LinkedList
  maxSize: number
  size: number

  constructor (maxSize = Infinity) {
    this.stack = new LinkedList()
    this.maxSize = maxSize
    this.size = 0
  }

  hasRoom () {
    return this.size < this.maxSize
  }

  isEmpty () {
    return this.size === 0
  }

  push (value: any) {
    if (this.hasRoom()) {
      this.stack.addToHead(value)
      this.size++
    } else {
      throw new Error('Stack is full')
    }
  }

  pop () {
    if (this.isEmpty()) {
      console.log('Stack is empty!')
    } else {
      const value = this.stack.removeHead()
      this.size--
      return value
    }
  }

  peek () {
    if (this.isEmpty()) {
      return null
    } else {
      return this.stack.head?.data
    }
  }
}

export default Stack

