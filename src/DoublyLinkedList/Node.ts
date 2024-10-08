class Node {
  data: any
  next: Node | null
  previous: Node | null

  constructor (data: any) {
    this.data = data
    this.next = null
    this.previous = null
  }

  setNextNode (node: Node | null) {
    if (node instanceof Node || node === null) {
      this.next = node
    } else {
      throw new Error('Next node must be a member of the Node class')
    }
  }

  setPreviousNode (node: Node | null) {
    if (node instanceof Node || node === null) {
      this.previous = node
    } else {
      throw new Error('Previous node must be a member of the Node class')
    }
  }

  getNextNode () {
    return this.next
  }

  getPreviousNode () {
    return this.previous
  }
}

export default Node
