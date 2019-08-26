// You are managing a sales team and you are interested is analyzing some data related to their age and total sales.
// Take a moment to review the following data structure recorded in salesTeam.json for analysis:

if(typeof module === "object" && typeof module.exports === "object") {
  // OPEN and SEE salesTeam.js
  var salesTeam = require('../salesTeam.js');
}

function getTeenagerNameObj (salesTeam) {
let teenagerNameArr = [];

  for(let obj of salesTeam) {
    if(obj.age < 20) {
      teenagerNameArr.push(obj.name);
    }
  }
  return teenagerNameArr;
}

function getTeenager(salesTeam) {
  let getFullName = function(nameObj) {
    return nameObj.first + " " + nameObj.last;
  }

  return getTeenagerNameObj(salesTeam).map(getFullName);
}

var output = getTeenager(salesTeam);
console.log(output);