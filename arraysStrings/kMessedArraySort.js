// https://www.pramp.com/question/XdMZJgZoAnFXqwjJwnBZ

// O(N*k) soln => insertionSort

// O(N * log(N)) soln => heapsort

// input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// build min heap of size k + 1
// insert first k + 1 elements to the heap
// remove min from heap
// insert next el from array into the heap until both array and heap are exhausted
// for each pop operation , insert the corresponding top element to the correct position in the array
