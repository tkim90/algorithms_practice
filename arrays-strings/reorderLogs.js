// https://leetcode.com/problems/reorder-data-in-log-files/

// build helper to get array with identifier removed
// loop thru each log and check if number or string based on helper
// if number, add to DigitLogs, else add to letterLogs
// sort letterlogs
var reorderLogFiles = function(logs) {
  const body = (s) => s.slice(s.indexOf(' ') + 1);
  const isNumber = (d) => /\d/.test(d);
  
  const customSort = (a, b) => {
    const n = body(a).localeCompare(body(b));
    if (n !== 0) return n;
    return a.localeCompare(b);
  }
  
  let digitLogs = [];
  let letterLogs = [];
  
  for (let log of logs) {
    if (isNumber(body(log))) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  }
  
  return [...letterLogs.sort(customSort), ...digitLogs];
};

logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
console.log(reorderLogFiles(logs));
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
