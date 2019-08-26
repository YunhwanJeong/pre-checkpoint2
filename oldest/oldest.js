// You are managing a sales team and you are interested is analyzing some data related to their age and total sales.
// Take a moment to review the following data structure recorded in salesTeam.json for analysis:

if(typeof module === "object" && typeof module.exports === "object") {
  // OPEN and SEE salesTeam.js
  var salesTeam = require('../salesTeam.js');
}

function oldest(salesTeam){
  let reducer = function(oldestStudent, currentStudent) {
    if(oldestStudent.age >= currentStudent.age) {
      return oldestStudent;
    } else {
      return currentStudent;
    }
  }

  let oldestStudentObj = salesTeam.reduce(reducer);
  let oldestStudentName = oldestStudentObj.name.first + " " + oldestStudentObj.name.last;
  return "The oldest student is " + oldestStudentName;
}
var output = oldest(salesTeam);
console.log(output);