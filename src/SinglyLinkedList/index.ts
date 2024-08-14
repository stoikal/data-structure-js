import Node from "./Node"

class SinglyLinkedList {
  head: Node | null

  constructor () {
    this.head = null
  }

  addToHead (data: any) {
    const newHead = new Node(data)
    const currentHead = this.head
    this.head = newHead
    if (currentHead) {
      this.head.setNextNode(currentHead)
    }
  }

  addToTail (data: any) {
    if (this.head === null) {
      this.head = new Node(data)
    } else {
      let tail = this.head

      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode() as Node
      }
      tail.setNextNode(new Node(data))
    }
  }

  removeHead () {
    const removedHead = this.head
    if (!removedHead) {
      return
    }
    this.head = removedHead.getNextNode()
    return removedHead.data
  }

  printList () {
    let currentNode = this.head
    let output = '<head> '
    while (currentNode !== null) {
      output += currentNode.data + ' '
      currentNode = currentNode.getNextNode()
    }
    output += '<tail>'
    console.log(output)
  }
}

export default SinglyLinkedList
