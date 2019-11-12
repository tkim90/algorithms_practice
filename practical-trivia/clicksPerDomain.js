// Given a .csv of # of clicks and a domain, give a total of clicks for each level of the domain
// I.e. input: [‘90, sports.yahoo.com’, ‘10, news.yahoo.com’]
// Output: { com: 100, yahoo.com: 100, sports.yahoo.com: 90, news.yahoo.com: 10 }

// declare output obj
// scan input array and split into a nested array
// [[90, sports.yahoo.com], [10, news.yahoo.com]]

// iterate array
// add 1st index as key, 0th as val
//.  if key exists, increment to existing


const clicksPerDomain = (a) => {
  let aNested = a.map(v => v.split(', '));

  return aNested.reduce((obj, el) => {
    obj[el[1]] = el[0];
    return obj
  }, {})
};


let r1 = clicksPerDomain(['90, sports.yahoo.com', '10, news.yahoo.com']);
console.log(`Should return clicks per domain: ${JSON.stringify(r1)}`);

let r2 = clicksPerDomain([]);
console.log(`Should handle empty inputs: ${JSON.stringify(r2)}`);