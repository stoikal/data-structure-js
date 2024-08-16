import Vertex from "./Vertex"

class Edge {
  start: Vertex
  end: Vertex
  weight: number | null

  constructor (start: Vertex, end: Vertex, weight: number | null = null) {
    this.start = start
    this.end = end
    this.weight = weight
  }
}

export default Edge
