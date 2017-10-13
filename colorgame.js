var numSquares = 6;
var colors = generaterandomcolors(numSquares);

var blocks = document.querySelectorAll(".square");
var colordisplay = document.querySelector("#colordisplay");
var messagedisplay = document.querySelector("#messagedisplay");
var pickedcolor = pickcolor();
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
colordisplay.textContent = pickedcolor;

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generaterandomcolors(numSquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < blocks.length; i++){
		if (colors[i]){
			blocks[i].style.backgroundColor = colors[i];
		}else{
			blocks[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6
	colors = generaterandomcolors(numSquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < blocks.length; i++){
		blocks[i].style.backgroundColor = colors[i];
		blocks[i].style.display = "block";
	}
})


resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generaterandomcolors(numSquares);
	//pick a new color from array
	pickedcolor = pickcolor();
	//change color display to match picked color
	colordisplay.textContent = pickedcolor;
	//change color of squares
	messagedisplay.textContent = " ";
	this.textContent = "NEW COLORS";
	for(var i = 0; i < blocks.length; i++){
	//adds background color to each square
		blocks[i].style.backgroundColor= colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

for(var i = 0; i < blocks.length; i++){
	//adds background color to each square
	blocks[i].style.backgroundColor= colors[i];
	//checks if the clicked color matches with picked color.
	blocks[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor; 
		if(clickedColor === pickedcolor){
			messagedisplay.textContent = "Correct!!";
			allcorrect(pickedcolor);
			h1.style.backgroundColor = pickedcolor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messagedisplay.textContent = "Try Again!";
			resetButton.textContent = "New Colors";
		}
	})
}

function allcorrect(color){
	for(var i = 0; i < blocks.length; i++){
		blocks[i].style.backgroundColor = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generaterandomcolors(num){
	//make array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomcolor());
	}
	//return that array
	return arr;
}

function randomcolor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
