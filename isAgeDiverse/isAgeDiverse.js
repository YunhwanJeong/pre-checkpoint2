// You are managing a sales team and you are interested is analyzing some data related to their age and total sales.
// Take a moment to review the following data structure recorded in salesTeam.json for analysis:

if(typeof module === "object" && typeof module.exports === "object") {
  // OPEN and SEE salesTeam.js
  var salesTeam = require('../salesTeam.js');
}

var collectAndSortAge = function (list) {
  let ageArr = [];

  for(let obj of list) {
    ageArr.push(obj.age);
  }
  
  ageArr.sort(function(a, b) {
    return a - b;
  });
  return ageArr;
}


var isAgeDiverse = function(list) {
  if(collectAndSortAge(list)[0] < 10 || collectAndSortAge(list) >= 90) {
    return false;
  } else {
    return true;
  }
};

var output = isAgeDiverse(salesTeam);
console.log(output);