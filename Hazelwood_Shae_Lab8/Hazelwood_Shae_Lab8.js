//Shae Hazelwood
//November 14, 2013
//Lab 8
//Working with strings


//Problem 1
alert("Problem 1");


var email = "";
var email = prompt("Enter a valid email: ");

var funcEmail = function(argEmail)
{
	
	var atCheck = argEmail.indexOf("@");
	var secondAtCheck = argEmail.lastIndexOf("@");
	var dotCheck = argEmail.search(".");
	var spaceCheck = argEmail.search(" ");
	if (atCheck>dotCheck || atCheck<=0 || atCheck != secondAtCheck || spaceCheck === true)
	{
		console.log(email + " is not a valid email.")
	}
	else
	{
		console.log(email)
	}
};
funcEmail(email);

console.log(" ")
//Problem 2
alert("Problem 2");

var string = "rice, beans, eggs, milk";
var seperator = ",";
var newSeperator = " or";

var funcString = function (argString, argSep, argNewSep){
	var newStr = "";
	var newSplit = argString.split(argSep);
	
	for(var i = 0; i < newSplit.length; i++){
		if (newStr === ""){
			var newStr = newStr + newSplit[i]
	    	//newStr = newStr + argNewSep + argString[i]; 	
		}else{
			var newStr = newStr + argNewSep + newSplit[i]
		}
	}
	
	console.log(newStr);
};
console.log(string);
funcString(string, seperator, newSeperator);







