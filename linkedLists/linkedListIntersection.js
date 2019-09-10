let getIntersection(headA, headB) {
  // by the time both pointers are at equal spots,
  // and both are null, there are no intersections
  if (headA === null && headB === null) return null;

  pointerA = headA;
  pointerB = headB;

  // if headA gets to end, point it to B
  // if headB gets to end, point it to A
  while (pointerA !== pointerB) {
    pointerA = pointerA === null ? pointerB : pointerA.next;
    pointerB = pointerB === null ? pointerA : pointerB.next;
  }

  return pointerA;
};

  if (headA === null && headB === null) return null;
  
  ptA = headA;
  ptB = headB;
  
  while (ptA != ptB) {
    ptA = ptA === null ? headB : ptA.next;
    ptB = ptB === null ? headA : ptB.next;
  }
  
  return ptA;
// time: O(N)
// space: O(1)