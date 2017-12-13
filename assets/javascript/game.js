//Variables
var listOfWords = ["ARIES", "TAURUS", "GEMINI", "CANCER", "LEO", "VIRGO", "LIBRA", "SCORPIO", "SAGITTARIUS", "CAPRICORN", "AQUARIUS", "PISCES"]
var randomNumber = Math.floor(Math.random() * listOfWords.length);
var word = listOfWords[randomNumber];
console.log(word);
var guesses = 6;
var lettersGuessed = [];
var incorrectLetters = [];
var correctLetters = [];
var letterIndex = [];
//Document Element Variables
var pageAlert = document.getElementById("alert");
var pageButton = document.getElementById("primaryButton");
var pageGuessCard = document.getElementById("guessCard");
var pageWordCard = document.getElementById("wordCard");
var pageLetterCard = document.getElementById("letterCard");
var pageGuessContent = document.getElementById("guessesRemaining");
var pageLetterContent = document.getElementById("lettersGuessed");

document.onkeydown = function(event){
    play();
};

function resetGame(){
    guesses = 6;
    lettersGuessed = []; 
    var incorrectLetters = [];
    var correctLetters = [];
    pageAlert.innerHTML = "";
    pageAlert.classList.add('invisible');
    pageAlert.classList.remove('alert-warning');
    pageAlert.classList.remove('alert-danger');
    pageAlert.classList.remove('alert-success');
    pageButton.innerHTML = "Play Again"
    pageButton.classList.remove('btn-success');
    pageButton.classList.add('btn-info');
    pageGuessCard.classList.remove('invisible');
    pageWordCard.classList.remove('invisible');
    pageLetterCard.classList.remove('invisible');
    pageGuessContent.innerHTML = guesses;
    pageGuessCard.classList.remove('bg-warning');
    pageGuessCard.classList.remove('bg-danger');
    pageGuessCard.classList.add('bg-secondary');
    pageLetterContent.innerHTML = incorrectLetters;
    for (var li = 0; li < letterIndex.length; li++){  
        var letterText = document.getElementById(letterIndex[li]);
        var element = document.getElementsByTagName("span"), li;
        for (index = element.length - 1; index >= 0; index--) {
            element[index].parentNode.removeChild(element[index]);
        }
    }
    newWord();
};

function newWord(){
    for (var w = 0; w < word.length; w++){
        var newLetter = document.createElement("span");
        newLetter.classList.add('badge');
        newLetter.classList.add('badge-dark');
        newLetter.classList.add('m-1');
        var parent = document.getElementById("currentWord");
        parent.appendChild(newLetter);
        var text = document.createElement("p");
        var t = document.createTextNode(word[w]);
        text.appendChild(t);
        newLetter.appendChild(text);  
        text.classList.add('invisible');
        text.style.width = "25px";
        text.setAttribute("ID", word.indexOf(word[w]));
    }
};

function play(){
    var regex = /^[a-zA-Z]+$/;
    var input = event.keyCode;
    input = String.fromCharCode(input);
    console.log(input);
    if (input.match(regex)){
        validateEntry(input);
    }
};

function validateEntry(input){
    var letter = input.toUpperCase();
    var duplicate = false;
    var showLetter = "";
    var correctGuess = false;
    for (var cl = 0; cl < correctLetters.length; cl++){
        if(letter == correctLetters[cl]){
            duplicate = true;
        }
    }
    for (var il = 0; il < incorrectLetters.length; il++){
        if(letter == incorrectLetters[il]){
            duplicate = true;
        }
    }
    if (duplicate == false){
        for (var l = 0; l < word.length; l++){
            if(letter == word[l]){
                correctLetters.push(word[l]);
                //lettersGuessed.push(word[l]);
                letterIndex.push(word.indexOf(word[l]));
                correctGuess = true
                for (var e = 0; e < letterIndex.length; e++){
                    
                    showLetter = document.getElementById(parseInt(letterIndex[e]));
                    showLetter.classList.remove('invisible');
                }
            }
        }
        if(correctGuess == false){
            guesses--;
            incorrectLetters.push(letter);
            //lettersGuessed.push(letter);
            pageLetterContent.innerHTML = incorrectLetters;
            failCheck(guesses);
        }
        else if(correctGuess == true){
            successCheck();
        }
    }
};

function failCheck(guesses){
    if(guesses >= 2){
        pageGuessContent.innerHTML = guesses;
    }
    else if(guesses == 1){
        pageGuessContent.innerHTML = guesses;
        pageGuessCard.classList.remove('bg-secondary');
        pageGuessCard.classList.add('bg-warning');
        pageAlert.classList.remove('invisible');
        pageAlert.classList.add('alert-warning');
        alert.innerHTML = "You only have 1 more guess left. Choose wisely!";
    }
    else {
        if(guesses == 0){
            pageGuessContent.innerHTML = guesses;
            pageGuessCard.classList.remove('bg-warning');
            pageGuessCard.classList.add('bg-danger');
            pageAlert.classList.remove('alert-warning');
            pageAlert.classList.add('alert-danger');
            pageAlert.innerHTML = "You lose! Select the Button or press any key to play again!";
        }
        else if(guesses < 0){
            resetGame();
        }
    }
};

function successCheck(){
    if(correctLetters.length == word.length){
        pageAlert.classList.remove('alert-warning');
        pageAlert.classList.remove('alert-danger');
        pageAlert.classList.add('alert-success');
        pageAlert.classList.remove('invisible');
        pageAlert.innerHTML = "Congratulations! You won! Select the Button or press any key to play again!";
        resetGame();
        };
    };