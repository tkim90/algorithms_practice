//////////////////////////////////////////////////////////////////
// Implementation #1:
// Store nodes and edges in objects
//
// Using objects to store nodes and edges has the benefit of
// constant-time look-up when looking for any node or edge.
// This implementation can accept any data-type that can be
// represented as a string (keys of objects are strings).
// Lastly, this solution is quite space efficient because hash
// tables only occupy only slightly more space than is needed
// to store the underlying data set.
//////////////////////////////////////////////////////////////////

class Graph {
  constructor() {
    this._graph = {};
  }

  // Add a node to the graph, passing in the node's value.
  addNode(node) {
    this._graph[node] = this._graph[node] || { edges: {}};
  };

  // Return a boolean value indicating if the value passed to contains is represented in the graph.
  contains(node) {
    return !!this._graph[node];
  };

  // Removes a node from the graph.
  removeNode(node) {
    if (this.contains(node)) {
      for (let targetNode in this._graph[node].edges) {
        this.removeEdge(node, targetNode);
      }
      delete this._graph[node];
    }
  };

  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
  hasEdge(fromNode, toNode) {
    if (!this.contains(fromNode)) return false;
    return !!this._graph[fromNode].edges[toNode];
  };

  // Connects two nodes in a graph by adding an edge between them.
  addEdge(fromNode, toNode) {
    if (!this.contains(fromNode) || !this.contains(toNode)) return ;
    this._graph[fromNode].edges[toNode] = toNode;
    this._graph[toNode].edges[fromNode] = fromNode;
  };

  // Remove an edge between any two specified (by value) nodes.
  removeEdge(fromNode, toNode) {
    if (!this.contains(fromNode) || !this.contains(toNode)) return ;
    delete this._graph[fromNode].edges[toNode];
    delete this._graph[toNode].edges[fromNode];
  };

  // Pass in a callback which will be executed on each node of the graph.
  forEachNode(cb) {
    for (let node in this._graph) {
      cb(node);
    }
  };
}

// const g = new Graph;
// g.addNode('A');
// g.addNode('B');
// g.addEdge('A', 'B')
// console.log(g.hasEdge('A', 'B'));
// console.log(g.hasEdge('B', 'A'));
// console.log(g.hasEdge('C', 'A'));
// g.removeEdge('A', 'B');
// console.log(g.hasEdge('B', 'A'));
// console.log(g);

module.exports.Graph = Graph;