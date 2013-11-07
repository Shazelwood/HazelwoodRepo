alert("JavaScript works!");
//
//
//
//
var math = "";
var numOne = 0;
var numTwo = 0;
var booAgain = true;

var division = function(firstNumber , secondNumber)
{
	var answer = firstNumber / secondNumber;
	return answer;
}
var multiplication = function(firstNumber , secondNumber)
{
	var answer = firstNumber * secondNumber;
	return answer;
}
var addition = function(firstNumber , secondNumber)
{
	var answer = firstNumber + secondNumber;
	return answer; 
}
var subtraction = function(firstNumber , secondNumber)
{
	var answer = firstNumber - secondNumber;
	return answer;
}
	var numOne = parseFloat(prompt("Enter your first number: " ));
	var numTwo = parseFloat(prompt("Enter your second number: "));
	var math = prompt("Enter operation: ");
	
	if (math === "/")
	{
		var result = division (numOne,numTwo);
		console.log(numOne + math + numTwo + " = " + result);
		var booAgain = confirm("Do you want to enter another problem?");
	}
	else if ( math === "*" || math === "x")
	{
		var result = multiplication (numOne,numTwo);
		console.log(numOne + math + numTwo + " = " + result);
		var booAgain = confirm("Do you want to enter another problem?");
	}
	else if ( math === "+")
	{
		var result = addition (numOne,numTwo);
		console.log(numOne + math + numTwo + " = " + result);
		var booAgain = confirm("Do you want to enter another problem?");
	}
	else if ( math === "-")
	{
		var result = subtraction (numOne,numTwo);
		console.log(numOne + math + numTwo + " = " + result);
		var booAgain = confirm("Do you want to enter another problem?");
	}
	else
	{
		alert("You may have entered the wrong operation.")
	}
	

