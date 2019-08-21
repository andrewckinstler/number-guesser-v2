var minRange = document.getElementById('js__min--range');
var maxRange = document.getElementById('js__max--range');
var rangeButton = document.getElementById('js__range--button');
var minNumberDisplay = document.getElementById('min__number--display');
var maxNumberDisplay = document.getElementById('max__number--display');
var submitGuess = document.getElementById('guess__submit--button');

rangeButton.addEventListener('click', setRangeValue);

function setRangeValue(){
	setMinValue();
	setMaxValue();
	generateNumber();
};

function setMinValue(){
	minNumberDisplay.innerText = minRange.value;
};

function setMaxValue(){
	maxNumberDisplay.innerText = maxRange.value;
};

function generateNumber(){
	var min = Math.ceil(minRange.value);
	var max = Math.floor(maxRange.value);
	var randomNumber = Math.floor(Math.random() * (max - min)) + min;
	console.log(randomNumber);
}

function changeText() {
		var playerOneGuess = document.getElementById("js__name1--guess")
		var currentGuessOne = document.getElementById("player__one--guess")
		currentGuessOne.innerText = playerOneGuess.value;
		var playerTwoGuess = document.getElementById("js__name2--guess")
		var currentGuessTwo = document.getElementById("player__two--guess")
		currentGuessTwo.innerText = playerTwoGuess.value;
}

submitGuess.addEventListener('click', changeText);
