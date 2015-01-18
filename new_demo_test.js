function Application(name, age, writing, driving) {
  this.name = name;
  this.age = age;
  this.writing = writing;
  this.driving = driving;
}

// function can be named 'Que' too
function Inventory() {
  this.application = [];
}

// linking Applicant object to Inventory (addApplicant is a method)
Inventory.prototype.addApplication = function(name, age, writing, driving) {
  this.application.push(new Application(name, age, writing, driving));
}

Inventory.prototype.listApplication = function() {
  for (var i = 0; i < this.application.length; i++) {
    // this.application[i].summary();
    this.application[i].grade();
  }
}

Inventory.prototype.grade = function(name, age, writing, driving) {
  var minAge, maxWritingScore, maxDrivingScore, communication;
  minAge = 18;
  minWritingScore = 14;
  minDrivingScore = 20;
  if ((age >= minAge) && (writing >= minWritingScore) && (driving >= minDrivingScore)) {
    communication = ("<strong>Congratulations!</strong> You've met all requirements. Contact us to finalize your application!");
  } else {
    communication = ("<strong>I'm sorry. You haven't met the qualifications to apply for a Driver's License</strong>. Please contact us for more information.");
  }
  return communication;
}

var button = document.getElementById("submit");
var summary = document.getElementById("outputResult");
var clear = document.getElementById('clear');
var more = document.getElementById("more");
var requirements = document.getElementById("requirements");

function showRequirements() {
  var outputRequirements = document.getElementById("outputRequirements");
  outputRequirements.innerHTML = "You have to be older than 18, you have to have minimum score of 14 from the knowledge test and a minimum score of 20 from the driving test.";
}

function Operator() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var writing = document.getElementById("written").value;
  var driving = document.getElementById("driver").value;
  var inventory = new Inventory();
  inventory.listApplication();
  var msg = inventory.grade(name, age, writing, driving);
  summary.innerHTML = msg;
  more.innerHTML = "<strong>Summary</strong>: your name is: " + document.getElementById("name").value + ", your age is: " + document.getElementById("age").value + ", your driving test score is: " + document.getElementById("driver").value + " and your knowledge test score is: " + document.getElementById("written").value + ".";
}

button.addEventListener('click', Operator, false);
clear.addEventListener('click', function() {
  history.go(0);
}, false);
requirements.addEventListener('click', showRequirements, false);

