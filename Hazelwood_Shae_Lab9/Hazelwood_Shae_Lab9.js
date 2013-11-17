alert("JavaScript works!");
//Shae Hazelwood
//November 16, 2013
//Lab9
//Number and Date Objects

alert("Problem 1");

var num = 3.14159265359;
var n = 2;

var funcDecimal = function (argNum, argDecimal)
{
	var finalNum = argNum.toFixed(argDecimal);
	return finalNum;
	

}
var x = funcDecimal(num, n);
console.log(num + " is too large of a number. Moving it to " + x + " deciamal places is much easier to remember.");


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


alert("Problem 2");

var numString = "2013";

var funcNumString = function(argNumString)
{
	var numb = Number(argNumString);
	return numb;
}
var instNumString = funcNumString(numString);
console.log("The real number is " + instNumString);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


alert("Problem 3");

var date1 = new Date();
var date2 = new Date("April 3, 1995");
var hours ="hours.";

var funcDate = function(d1, d2, h)
{
	var milDate1 = d1.getTime();
	var milDate2 = d2.getTime();
	var difference = d1 - d2;
	var time = (((difference/60)/60)/24);
	return time;
};
var instDate = funcDate(date1,date2,hours);
console.log("The difference between " + date1 + " and " + date2 + " is " + Math.round(instDate) + " hours.");

























