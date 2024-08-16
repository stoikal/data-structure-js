class MinHeap {
  heap: Array<number|null>
  size: number

  constructor () {
    this.heap = [null]
    this.size = 0
  }

  popMin () {
    if (this.size === 0) {
      return null
    }
    const min = this.heap[1]
    this.heap[1] = this.heap[this.size]
    this.heap.pop()
    this.size--
    this.heapify()
    return min
  }

  add (value) {
    this.heap.push(value)
    this.size++
    this.bubbleUp()
  }

  bubbleUp () {
    let current = this.size

    while (
      current > 1 && 
      (this.heap[getParent(current)] as number) > (this.heap[current] as number)
    ) {
      this.swap(current, getParent(current))
      current = getParent(current)
    }
  }

  heapify () {
    let current = 1
    let leftChild = getLeft(current)
    let rightChild = getRight(current)

    while (this.canSwap(current, leftChild, rightChild)) {
      // Only compare left & right if they both exist
      if (this.exists(leftChild) && this.exists(rightChild)) {
        const leftChildValue = this.heap[leftChild] as number
        const rightChildValue = this.heap[rightChild] as number
    
        if (leftChildValue < rightChildValue) {
          this.swap(current, leftChild)
          current = leftChild
        } else {
          this.swap(current, rightChild)
          current = rightChild
        }
      } else {
        // If only one child exist, always swap with the left
        this.swap(current, leftChild)
        current = leftChild
      }

      leftChild = getLeft(current)
      rightChild = getRight(current)
    }
  }

  exists (index) {
    return index <= this.size
  }

  canSwap (current, leftChild, rightChild) {
    const currentValue = this.heap[current] as number
    const leftChildValue = this.heap[leftChild] as number
    const rightChildValue = this.heap[rightChild] as number
    // Check that one of the possible swap conditions exists
    return (
      this.exists(leftChild) && currentValue > leftChildValue ||
      this.exists(rightChild) && currentValue > rightChildValue
    )
  }

  swap (a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }
}

const getParent = current => Math.floor((current / 2))
const getLeft = current => current * 2
const getRight = current => current * 2 + 1

export default MinHeap
