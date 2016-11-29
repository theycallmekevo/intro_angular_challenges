console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("SecondController", SecondController);

function WelcomeController(){
  this.full_name = "Kevin Tran",
  this.age = 28,
  this.city = "Alameda",
  this.state = "California"
  this.shout = function(word){
    return word.toUpperCase() + "!";
  }
}

function SecondController(){
  this.class_name = "GA - WDI33",
  this.enrolled_students = "20-ish students",
  this.start_date = "10/24/2016",
  this.end_date = "1/27/2016",
  this.daysRemaining = function(){
    var ms_left =  Date.now() - Date.parse(this.end_date);
    var days_left = Math.floor(ms_left/1000/24/60/60);
    return days_left;
  }
}
