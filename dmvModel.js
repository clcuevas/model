var submitButton  = document.getElementById("submit");
var inputName     = document.getElementById("name").value;
var inputAge      = document.getElementById("age").value;
var inputDriving  = document.getElementById("driver").value; 
var inputWriting  = document.getElementById("written").value;  

function Application(name, age, writing, driving){
  this.name = name;
  this.age = age;
  this.writing = writing;
  this.driving = document.getElementById("age").value;
};

Application.prototype.summary = function() {
  console.log("I am " + this.name + " who is requesting a Driver's License to be issued to me. My age is " + this.age + ". My test scores are as follows: " + this.writing + ", " + this.driving + ".");
}

Application.prototype.grade = function() {

  var minAge, maxWritingScore, maxDrivingScore;
  minAge = 18;
  minWritingScore = 14;
  minDrivingScore = 20;
  var ifAge = function() {
    if (this.age >= minAge) {
    console.log("pass");
    } else {
    console.log("fail");
    }
   }; 
  if (this.writing >= minWritingScore) {
    console.log("You passed the Writing Test!!");
  } else {
    console.log("You failed the Writing Test.");
  }
  if (this.driving >= minDrivingScore) {
    console.log("You passed the Driving Test");
  } else {
    console.log("You failed the Driving Test.")
  }
var outputName           = document.getElementById("outputName");
outputName.innerHTML      = "Your name is " + document.getElementById("name").value;  
var outputAge            = document.getElementById("outputAge");
outputAge.innerHTML      = "Your age is " + document.getElementById("age").value;
var outputDriving        = document.getElementById("outputDriving");
outputDriving.innerHTML  ="Your driver test score is " + document.getElementById("driver").value;
var outputWriting        = document.getElementById("outputWritten");
outputWriting.innerHTML  = "Your driver test score is " + document.getElementById("written").value;
var outputResult         = document.getElementById("outputResult");
outputResult.innerHTML   = "This means you " + /*MEET/DON'T MEET*/ + " the requirements for a driver's lisence."
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
    this.application[i].summary();
    this.application[i].grade();
  }
}

var inventory = new Inventory();
inventory.addApplication("Tom", 18, 14, 20);
inventory.addApplication("Sam", 14, 16, 5);
inventory.addApplication()
inventory.listApplication();

submitButton.addEventListener('click', Application.prototype.grade, false);
