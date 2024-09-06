import Queue from "../Queue";

class BinaryTree {
  value: number | string
  depth: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor (value: number | string, depth = 1) {
    this.value = value
    this.depth = depth
    this.left = null
    this.right = null
  }

  insert (value: number | string) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinaryTree(value, this.depth + 1)
      } else {
        this.left.insert(value)
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTree(value, this.depth + 1)
      } else {
        this.right.insert(value)
      }
    }
  }

  getNodeByValue (value: number | string) {
    if (this.value === value) {
      return this
    } else if ((this.left) && (value < this.value)) {
      return this.left.getNodeByValue(value)
    } else if (this.right) {
      return this.right.getNodeByValue(value)
    } else {
      return null
    }
  }

  depthFirstTraversal () {
    if (this.left) {
      this.left.depthFirstTraversal()
    }

    console.log(`Depth=${this.depth}, Value=${this.value}`)

    if (this.right) {
      this.right.depthFirstTraversal()
    }
  }

  breadthFirstTraversal () {
    const queue = new Queue()
    queue.enqueue(this);

    while (!queue.isEmpty()) {
      const current = queue.dequeue()

      if (current) {
        console.log(`Depth=${current.depth}, Value=${current.value}`)

        queue.enqueue(current.left)
        queue.enqueue(current.right)
      }
    }
  }
};

export default BinaryTree
