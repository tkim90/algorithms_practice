var groupAnagrams = function(strs) {
  let output = [];
  let map = {};
  for (let word of strs) {
    let sortedWord = word.split('').sort().join('');
    if (!map[sortedWord]) {
      map[sortedWord] = [];
    }
  }

  for (word of strs) {
    let sortedWord = word.split('').sort().join('');
    if (map[sortedWord]) {
      map[sortedWord].push(word);
    }
  }
  
  for (let w in map) {
    output.push(map[w]);
  }
  return output;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));