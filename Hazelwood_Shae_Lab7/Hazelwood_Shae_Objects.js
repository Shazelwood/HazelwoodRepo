//Shae Hazelwood
//November 12, 2013
//Lab 7
//Objects
var objFirstPerson;
var objSecondPerson;
//console.log(jsonPeople);
var objConstructor = function(first, last, yearsOld, myDate)
{
	this.firstName = first;
	this.lastName = last;
	this.age = yearsOld;
	this.date = myDate;
	
};


var createObjects = function()
{
	/*var firstName;
	var lastName;
	var age;
	var date;*/
	for (var i = 0; i < jsonPeople.person.length; i++)
	{
		firstName = jsonPeople.person[i].firstName;
		lastName = jsonPeople.person[i].lastName;
		age = jsonPeople.person[i].age;
		date = jsonPeople.person[i].birthdayDate;
		
		if (i === 0)
		{
			objFirstPerson = new objConstructor (firstName, lastName, age, date);
			console.log("My name is " + objFirstPerson.firstName + " " + objFirstPerson.lastName + ". " + objFirstPerson.age + " years old, born " + objFirstPerson.date);
		}
		else
		{
			objSecondPerson = new objConstructor  (firstName, lastName, age, date);
			console.log("My friend's name is " + objSecondPerson.firstName + " " + objSecondPerson.lastName + ". " + objSecondPerson.age + " years old, born " + objSecondPerson.date);
		}
	}
};
createObjects();