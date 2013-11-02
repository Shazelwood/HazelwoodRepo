//alert("JavaScript works!");
// Shae Hazelwood
// Lab#2
// Variables and outputs

//Variables
var myName = "Shae";
var myCar = "";
var booCar = true; 
var roadUnderConstruction = true;
var numMiles = 50;
var dollarPerMile = 2

//console 

var myName = prompt("What is your name?", "Your name here.");
console.log("Hello!" + myName);
var booCar = confirm("If you have previously owned a car click 'OK'.");
console.log("It is " + booCar + " that you have previously owned a car.");
var myCar = prompt("What car would you like to buy?" , "your car here");
console.log(myName + " would like to purchase a(n) " + myCar);
var numMiles = parseInt(prompt("How many miles would you like to drive?" , "enter number of miles"));
console.log(myName + " will be driving " + numMiles + " miles in the " + myCar + ".");
