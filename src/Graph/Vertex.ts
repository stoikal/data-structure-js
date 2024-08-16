import Edge from "./Edge"

class Vertex {
  data: any
  edges: Edge[]

  constructor (data: any) {
    this.data = data
    this.edges = []
  }

  addEdge (vertex: Vertex, weight?: number | null) {
    if (vertex instanceof Vertex) {
      this.edges.push(new Edge(this, vertex, weight))
    } else {
      throw new Error('Edge start and end must both be Vertex')
    }
  }

  removeEdge (vertex: Vertex) {
    this.edges = this.edges.filter(edge => edge.end !== vertex)
  }

  print () {
    const edgeList = this.edges.map(edge =>
      edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data)

    const output = `${this.data} --> ${edgeList.join(', ')}`
    console.log(output)
  }
}

export default Vertex
