var submitButton  = document.getElementById("submit");

function Application(name, age, writing, driving){
  this.name = document.getElementById("name").value;
  this.age = document.getElementById("age").value;
  this.writing = document.getElementById("written").value;
  this.driving = document.getElementById("driver").value;
}

function Inventory() {
  this.application = [];
}

Inventory.prototype.grade = function() {
  var minAge, maxWritingScore, maxDrivingScore; //agePrint, scorePrint;
  minAge = 18;
  minWritingScore = 14;
  minDrivingScore = 20;
  var SCORE= function() {
  if ((document.getElementById("age").value >= minAge) && (document.getElementById("written").value >= minWritingScore) && (document.getElementById("driver").value >= minDrivingScore)) {
    return "passed";
  } else {
    return "failed";
  }
}
var msg = document.getElementById("name").value + " you " + SCORE() + " the requirements!";

var outputName           = document.getElementById("outputName");
outputName.innerHTML     = "Your name is " + document.getElementById("name").value;  
var outputAge            = document.getElementById("outputAge");
outputAge.innerHTML      = "Your age is " + document.getElementById("age").value;
var outputDriving        = document.getElementById("outputDriving");
outputDriving.innerHTML  ="Your driver test score is " + document.getElementById("driver").value;
var outputWriting        = document.getElementById("outputWritten");
outputWriting.innerHTML  = "Your driver test score is " + document.getElementById("written").value;
var outputResult         = document.getElementById("outputResult");
outputResult.innerHTML   = msg;

}

// linking Applicant object to Inventory (addApplicant is a method)
Inventory.prototype.addApplication = function(name, age, writing, driving) {
  this.application.push(new Application(name, age, writing, driving));
}

Inventory.prototype.listApplication = function() {
  for (var i = 0; i < this.application.length; i++) {
    this.application[i].grade;
  }
}

var inventory = new Inventory();
inventory.addApplication("Tom", 18, 14, 20);
inventory.addApplication("Sam", 14, 16, 5);
inventory.addApplication();
inventory.listApplication();

submitButton.addEventListener('click', Inventory.prototype.grade, false);
