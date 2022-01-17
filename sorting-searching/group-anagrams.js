/* Write a method to sort an array of strings so that all the anagrams are next to each other.
 *
 * I: array of strings
 * O: sorted array of anagrams
 * C:
 * E: no anagrams?
 *
 * [tae, abc, cba, eat, ate]
 * [[tae, eat, ate], [abc, cba]]
 *
 * HashMap approach:
 * Create hashmap of each unique anagram set
 * ex. { "aet": ["tae"] }
 * Scan array
 *  check if anagram (sort it)
 * Scan map
 *  add to result aray in order
 *
 * Time: O(mnlogn) where m is the length of the word
 * Space: O(N)
 */

function groupAnagrams(s) {
  let m = new Map();

  for (let w of s) {
    sortedWord = w.split("").sort().join("");
    m.has(sortedWord) ? m.get(sortedWord).push(w) : m.set(sortedWord, [w]);
  }
  return [...m.values()];
}

let s = ["tae", "abc", "cba", "eat", "ate"];

console.log("Groups anagrams", groupAnagrams(s));
