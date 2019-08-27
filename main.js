var minRange = document.querySelector('.js__min--range');
var maxRange = document.querySelector('.js__max--range');
var rangeButton = document.querySelector('.js__range--button');
var minNumberDisplay = document.querySelector('.min__number--display');
var maxNumberDisplay = document.querySelector('.max__number--display');
var submitGuess = document.querySelector('.guess__submit--button');
var playerOneGuess = document.querySelector(".js__name1--guess")
var currentGuessOne = document.querySelector(".player__one--guess")
var playerTwoGuess = document.querySelector(".js__name2--guess")
var currentGuessTwo = document.querySelector(".player__two--guess")
var pInner = document.querySelector(".p__inner");
var p2Inner = document.querySelector(".p2__inner");
var min = parseInt(Math.ceil(minRange.value));
var max = parseInt(Math.floor(maxRange.value));
var randomNumber = 0;

rangeButton.addEventListener('click', setRangeValue);
submitGuess.addEventListener('click', changeText);

function generateNumber() {
  min = Math.ceil(minRange.value);
  max = Math.floor(maxRange.value);
  randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber)
}

function setRangeValue() {
  randomNumber = generateNumber();
  setValue();
};

function setValue() {
  minNumberDisplay.innerText = minRange.value;
  maxNumberDisplay.innerText = maxRange.value;
};

function changeText() {
  var name1 = document.querySelector('.js__input--name1')
  var name2 = document.querySelector('.js__input--name2')
  var changeName = document.querySelector('.player-name')
  var changeName2 = document.querySelector('.player-name2')

  changeName.innerText = name1.value;
  changeName2.innerText = name2.value;
  currentGuessOne.innerText = playerOneGuess.value;
  currentGuessTwo.innerText = playerTwoGuess.value;
  pInner.innerText = getWinner(playerOneGuess.value);
  p2Inner.innerText = getWinner(playerTwoGuess.value);
}

function getWinner(guess) {
  if (!guess) {
    return '';
  }
  if (parseInt(guess) > randomNumber) {
    return "That's too high!";
  } else if (parseInt(guess) < randomNumber) {
    return "That's too low!";
  }
  return 'BOOM!';
};
