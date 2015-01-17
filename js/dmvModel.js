function Application(name, age, writing, driving) {
  this.name = name;
  this.age = age;
  this.writing = writing;
  this.driving = driving;
}

// Application.prototype.summary = function() {
//   console.log("I am " + this.name + " who is requesting a Driver's License to be issued to me. My age is " + this.age + ". My test scores are as follows: " + this.writing + ", " + this.driving + ".");
// }

Inventory.prototype.grade = function() {
  var minAge, 
      minWritingScore, 
      minDrivingScore, 
      communication;

  minAge = 18;
  minWritingScore = 14;
  minDrivingScore = 20;

  if ((age >= minAge) && (writing >= minWritingScore) && (driving >= minDrivingScore)) {
    communication = ("Congratulations! You've met all requirements. Click Continue to finalize your application.");
  } else {
    communication = ("I'm sorry. You haven't met the qualifications to apply for a Driver's License. Please Contact Us for more information.");
  }
  return communication;
}
// function can be named 'Que' too
function Inventory() {
  this.application = [];
}

// linking Applicant object to Inventory (addApplicant is a method)
Inventory.prototype.addApplication = function(name, age, writing, driving) {
  this.application.push(new Application(name, age, writing, driving));
};

Inventory.prototype.listApplication = function() {
  for (var i = 0; i < this.application.length; i++) {
    // this.application[i].summary();
    this.application[i].grade();
  }
};

var button = document.getElementById("submit");
var summary = document.getElementById("outputResult");

function Operator() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var writing = document.getElementById("written").value;
  var driving = document.getElementById("driver").value;
  var inventory = new Inventory(name, age, writing, driving);
  inventory.listApplication();
  var msg = Inventory.prototype.grade(name, age, writing, driving);
  summary.innerHTML = msg;
}

button.addEventListener('click', Operator, false);

// var inventory = new Inventory();
// inventory.addApplication("Tom", 18, 14, 20);
// inventory.addApplication("Sam", 14, 16, 5);
// inventory.listApplication();
