alert("Class Grades");
// Shae Hazelwood
// November 9, 2013
// Lab 6
// Arrays

var firstName = [];
var lastName = [];
var scores = [];
var first = "";
var last = "";
var result = 0;
var n = 0;

var nameSort = function(name1, name2, grade)
{
	for (var i = 0; i < name1.length && i < name2.length; i++)
	{
		console.log("Student name: " + name1[i] + " " + name2[i] + " Grade: " + grade[])
	}	
	return;
	
}
while ( n < 5)
{
	first = prompt("Enter a first name.");
	last = prompt("Enter a last name.");
	result = parseInt(prompt("Enter" +" "+ first + " " + last +"'s "+ "score:"));
	scores.push(result)
	firstName.push(first)
	lastName.push(last)
	n++
}
var printName = nameSort(firstName , lastName , scores);
