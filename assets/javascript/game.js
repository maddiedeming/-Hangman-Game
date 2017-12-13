

var guesses = 6;
var lettersGuessed = [];
var alert = document.getElementById("alert");
var primaryButton = document.getElementById("primaryButton");
var guessCard = document.getElementById("guessCard");
var wordCard = document.getElementById("wordCard");
var letterCard = document.getElementById("letterCard");
var guessesRemaining = document.getElementById("guessesRemaining");
var lettersGuessedDOM = document.getElementById("lettersGuessed");
var word = "BLANKET";
var wordLength = word.length;
var letterIndex = [];
var lettersLeft = word.length;

function resetGame(){
    lettersLeft = word.length;
    guesses = 6;
    lettersGuessed = [];    
    alert.innerHTML = "";
    alert.classList.add('invisible');
    alert.classList.remove('alert-warning');
    alert.classList.remove('alert-danger');
    alert.classList.remove('alert-success');
    primaryButton.innerHTML = "Play Again"
    primaryButton.classList.remove('btn-success');
    primaryButton.classList.add('btn-info');
    guessCard.classList.remove('invisible');
    wordCard.classList.remove('invisible');
    letterCard.classList.remove('invisible');
    guessesRemaining.innerHTML = guesses;
    guessCard.classList.remove('bg-warning');
    guessCard.classList.remove('bg-danger');
    guessCard.classList.add('bg-secondary');
    lettersGuessedDOM.innerHTML = lettersGuessed;
    for (var i = 0; i < letterIndex.length; i++){  
        var letterText = document.getElementById(letterIndex[i]);
        var element = document.getElementsByTagName("span"), index;
        for (index = element.length - 1; index >= 0; index--) {
            element[index].parentNode.removeChild(element[index]);
        }
    }
    newWord();
};

function newWord(){
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
            text.setAttribute("ID", word.indexOf(word[i]));
    }
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
    if(duplicate == false){
        var showLetter = ""
        var correctGuess = false
        for (var i = 0; i < wordLength; i++){
            if(letter == word[i]){
                letterIndex.push(word.indexOf(word[i]));
                correctGuess = true
                showLetter = document.getElementById(letterIndex[i]);
                console.log(showLetter);
                showLetter.classList.remove('invisible');
                lettersLeft--;
            }
        }
        if(correctGuess == false){
            guesses--;
            lettersGuessed.push(letter);
            lettersGuessedDOM.innerHTML = lettersGuessed;
        }
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
    else {
        if(guesses == 0){
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
    }
    if(lettersLeft == 0){
        alert.classList.remove('alert-warning');
        alert.classList.remove('alert-danger');
        alert.classList.add('alert-success');
        alert.classList.remove('invisible');
        lettersGuessed = [];
        guesses = -1;
        alert.innerHTML = "Congratulations! You won! Select the Button or press any key to play again!";
    }
};