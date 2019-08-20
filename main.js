var minRange = document.getElementById('js__min--range');
var maxRange = document.getElementById('js__max--range');
var rangeButton = document.getElementById('js__range--button');
var minNumberDisplay = document.getElementById('min__number--display');
var maxNumberDisplay = document.getElementById('max__number--display');

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
	var d = Math.floor(Math.random() * (max - min)) + min;
}
