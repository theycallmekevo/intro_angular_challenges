console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  this.full_name = "Kevin Tran",
  this.age = 28,
  this.city = "Alameda",
  this.state = "California"
  this.shout = function(word){
    return word.toUpperCase() + "!";
  }

}
