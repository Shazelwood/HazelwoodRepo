//alert("JavaScript works!");
//Shae Hazelwood
//Lab#3
//Following a flow chart

//Variables
var booRain = true;
var inchRain = 10;
var booUmbrella = true;

//Console
var booRain = confirm("Is it raining?");
	if (booRain === true)
	{
		var inchRain = parseInt(prompt("How many inches of rain is it?" , "Rain in inches"));
			if (inchRain <= 5)
			{
				console.log("Heavy rainfall.");
			}
			else if (inchRain >= 6 && inchRain <= 10)
			{
				console.log("There may be a storm outside.");
			}
			else if (inchRain >= 11 && inchRain <= 15)
			{
				console.log("Chances of becoming a thunderstorm.");
			}
			else if (inchRain >= 16 && inchRain <= 20)
			{
				console.log("This is a sever thunderstorm!");
			}
			else
			{
				console.log("FIND SHELTER!");
			}
	}
	else
	{
		console.log("It is not raining!");
	}
var booUmbrella = confirm ("Did you bring your umbrella?");
	if (booUmbrella === true)
	{
		console.log("You'll be fine!")
	}
	else
	{
		console.log("You might want to stay inside or seek some cover.")
	}
console.log("")

