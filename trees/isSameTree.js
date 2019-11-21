// base: if both null, true
// base: if one is null and the other isnt, or if either values don't match, false
// recurse: return recurse(p.left, q.left) && recurse(p.right, q.right)

var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if ((p && !q) || (!p && q) || (p.val !== q.val)) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};