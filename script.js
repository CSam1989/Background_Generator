var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function GetRandomNumber(){
	return Math.round(Math.random()*255);
}

function setGradient(lk){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function(){
	var random1 = "rgb(" + GetRandomNumber()
					+ "," + GetRandomNumber()
					+ "," + GetRandomNumber() + ")"; 
	var random2 = "rgb(" + GetRandomNumber()
					+ "," + GetRandomNumber()
					+ "," + GetRandomNumber() + ")"; 

	body.style.background = "linear-gradient(to right, " 
	+ random1 + ", " 
	+ random2 + ")";

	css.textContent = body.style.background + ";";
})

