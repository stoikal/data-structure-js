import LinkedList from "../SinglyLinkedList"
import Node from "../SinglyLinkedList/Node"

class HashMap {
  hashmap: LinkedList[]

  constructor (size = 0) {
    this.hashmap = new Array(size)
      .fill(null)
      .map(() => new LinkedList())
  }

  hash (key: string): number {
    let hashCode = 0
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i)
    }
    return hashCode % this.hashmap.length
  }

  assign (key: string, value: any) {
    const arrayIndex = this.hash(key)
    const linkedList = this.hashmap[arrayIndex]
    console.log(`Storing ${value} at index ${arrayIndex}`)
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value })
      return
    }
    let current = linkedList.head
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value }
      }
      if (!current.next) {
        current.next = new Node({ key, value })
        break
      }
      current = current.next
    }
  }

  retrieve (key: string) {
    const arrayIndex = this.hash(key)
    let current = this.hashmap[arrayIndex].head
    while (current) {
      if (current.data.key === key) {
        console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`)
        return current.data.value
      }
      current = current.next
    }
    return null
  }
}

export default HashMap
