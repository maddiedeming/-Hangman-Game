//Congratulations! You won! Select the Button to play again!
//alert-success 

var guesses = 6;
var lettersGuessed = [];
var alert = document.getElementById("alert");
var primaryButton = document.getElementById("primaryButton");
var guessCard = document.getElementById("guessCard");
var wordCard = document.getElementById("wordCard");
var letterCard = document.getElementById("letterCard");
var guessesRemaining = document.getElementById("guessesRemaining");
var lettersGuessedDOM = document.getElementById("lettersGuessed");

document.body.onload = newWord;
function newWord(){
    var word = "TEST";
    var wordLength = word.length;
    for (var i = 0; i < wordLength; i++){
        var newLetter = document.createElement("span");
            newLetter.classList.add('badge');
            newLetter.classList.add('badge-dark');
            newLetter.classList.add('m-1');
        var parent = document.getElementById("currentWord");
            parent.appendChild(newLetter);
        var text = document.createElement("p");
        var t = document.createTextNode(word[i]);
            text.appendChild(t);
            newLetter.appendChild(text);  
            text.classList.add('invisible');
            text.style.width = "25px";
    }
};

function resetGame(){
    guesses = 6;
    lettersGuessed = [];    
    alert.innerHTML = "";
    alert.classList.add('invisible');
    alert.classList.remove('alert-danger');
    alert.classList.remove('alert-success');
    primaryButton.innerHTML = "Play Again"
    primaryButton.classList.remove('btn-success');
    primaryButton.classList.add('btn-info');
    guessCard.classList.remove('invisible');
    wordCard.classList.remove('invisible');
    letterCard.classList.remove('invisible');
    guessesRemaining.innerHTML = guesses;
    guessCard.classList.remove('bg-danger');
    guessCard.classList.add('bg-secondary');
    lettersGuessedDOM.innerHTML = lettersGuessed;
};

document.onkeyup = function(event){
        play();
};

function play(){
    var regex = /^[a-zA-Z]+$/;
    var input = event.keyCode;
    input = String.fromCharCode(input);
    if (input.match(regex)){
        validateEntry(input);
    }
};

function validateEntry(input){
    var letter = input.toUpperCase();
    var duplicate = false;
    for (var i = 0; i < lettersGuessed.length; i++){
        if(letter == lettersGuessed[i]){
            duplicate = true;
        }
    }
    if(duplicate == false){
        guesses --;
        lettersGuessed.push(letter);
        lettersGuessedDOM.innerHTML = lettersGuessed;
    }
    if(guesses >= 2){
        guessesRemaining.innerHTML = guesses;
    }
    else if(guesses == 1){
        guessesRemaining.innerHTML = guesses;
        guessCard.classList.remove('bg-secondary');
        guessCard.classList.add('bg-warning');
        alert.classList.remove('invisible');
        alert.classList.add('alert-warning');
        alert.innerHTML = "You only have 1 more guess left. Choose wisely!";
    }
    else if(guesses == 0){
        guessesRemaining.innerHTML = guesses;
        guessCard.classList.remove('bg-warning');
        guessCard.classList.add('bg-danger');
        alert.classList.remove('alert-warning');
        alert.classList.add('alert-danger');
        lettersGuessed = [];
        alert.innerHTML = "You lose! Select the Button or press any key to play again!";
    }
    else if(guesses < 0){
        resetGame();
    }
};