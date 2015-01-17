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
  var minAge, maxWritingScore, maxDrivingScore, passMsg, outputResult, resultMsg, outputDetails, requirementMsg;
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
  passMsg                 = document.getElementById("name").value + ", you " + SCORE() + " the requirements!";
  outputResult            = document.getElementById("outputResult");
  outputResult.innerHTML  = passMsg;
  resultMsg               = document.getElementById("name").value + ", age " + document.getElementById("age").value + ", drive test score " + document.getElementById("driver").value + " and knowledge test score " + document.getElementById("written").value + ".";
  outputDetails           = document.getElementById("outputDetails");
  outputDetails.innerHTML = resultMsg;
  requirementMsg          = document.getElementById("outputRequirements");
  requirementMsg.innerHTML= "To pass the requirements, you need to be 18 or older, and score at least 14 points in the knowledge test and 20 points in the drive test."
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
