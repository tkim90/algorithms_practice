var GraphAM = function() {
  this._nodes = [];
};

GraphAM.prototype.addNode = function(node) {
  this._nodes[node] = this._nodes[node] || [];
};

GraphAM.prototype.contains = function(node) {
  return !!this._nodes[node];
};

GraphAM.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    // iterate over array like an object, to skip over undefined values
    for (var i in this._nodes[node]) {
      this.removeEdge(node, i);
    }
    this._nodes[node] = undefined;
  }
};

GraphAM.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode)) {
    return false;
  }
  return !!this._nodes[fromNode][toNode];
};

GraphAM.prototype.addEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  this._nodes[fromNode][toNode] = true;
  this._nodes[toNode][fromNode] = true;
};

GraphAM.prototype.removeEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  this._nodes[fromNode][toNode] = undefined;
  this._nodes[toNode][fromNode] = undefined;
};

GraphAM.prototype.forEachNode = function(cb) {
  for (var node in this._nodes) {
    cb(node);
  }
};