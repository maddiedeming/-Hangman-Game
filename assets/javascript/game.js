//Variables
var input = ""
var regex = /^[a-zA-Z]+$/;
var listOfWords = ["ARIES", "TAURUS", "GEMINI", "CANCER", "LEO", "VIRGO", "LIBRA", "SCORPIO", "SAGITTARIUS", "CAPRICORN", "AQUARIUS", "PISCES"]
var guesses = 6;
var lettersGuessed = [];
var incorrectLetters = [];
var correctLetters = [];
var letterIndex = [];
var newLetter = "";
var text = "";
var t = "";
var word = "";
var randomNumber = 0;
var wordLength = 0;
var game = "start"

function resetGame(){
    guesses = 6;
    lettersGuessed = [];
    incorrectLetters = [];
    correctLetters = [];
    letterIndex = [];
    document.getElementById("alert").innerHTML = "";
    document.getElementById("alert").classList.remove('alert-warning','alert-danger','alert-success');
    document.getElementById("alert").classList.add('invisible');
    document.getElementById("primaryButton").innerHTML = "Play Again"
    document.getElementById("primaryButton").classList.remove('btn-success');
    document.getElementById("primaryButton").classList.add('btn-info');
    document.getElementById("guessCard").classList.remove('bg-warning','bg-danger','invisible');
    document.getElementById("guessCard").classList.add('bg-secondary');
    document.getElementById("wordCard").classList.remove('invisible');
    document.getElementById("letterCard").classList.remove('invisible');
    document.getElementById("guessesRemaining").innerHTML = guesses;
    document.getElementById("lettersGuessed").innerHTML = incorrectLetters;
    newWord();
    document.onkeydown = function(event){
        input = event.keyCode;
        input = String.fromCharCode(input);
        console.log(game);
        if(input.match(regex) && game !== "end"){
            validateEntry();
        }
        else if(game == "end"){
            game = "start";
            resetGame();
        }
    };
};

function newWord(){
    var parent = document.getElementById("currentWord"); 
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    randomNumber = Math.floor(Math.random() * listOfWords.length);
    word = listOfWords[randomNumber];
    console.log(word);
    wordLength = Array.from(new Set(word));
    wordLength = wordLength.length;
    for(var w = 0; w < word.length; w++){
        newLetter = document.createElement("span");
        newLetter.classList.add('badge');
        newLetter.classList.add('badge-dark');
        newLetter.classList.add('m-1');
        parent.appendChild(newLetter);
        text = document.createElement("p");
        text.classList.add('m-1');
        t = document.createTextNode(word[w]);
        text.appendChild(t);
        newLetter.appendChild(text);  
        text.classList.add('invisible');
        text.style.width = "25px";
        text.setAttribute("ID", w);
    }
};

function validateEntry(){
    var letter = input.toUpperCase();
    var correctGuess = false;
    var duplicate = false;
    console.log(letter);
    for(var cl = 0; cl < correctLetters.length; cl++){
        if(letter == correctLetters[cl]){
            duplicate = true;
        }
    }
    for(var il = 0; il < incorrectLetters.length; il++){
        if(letter == incorrectLetters[il]){
            duplicate = true;
        }
    }
    if(duplicate == false){
        for (var i = word.indexOf(word); i < word.length; i++){
            if(word.charAt(i) == letter){
                letterIndex.push(i);              
                correctGuess = true  
            }  
        }       
        for(var i = 0; i < letterIndex.length; i++){
            document.getElementById(letterIndex[i]).classList.remove('invisible');
            correctLetters.push(word.charAt(letterIndex[i]));
        }
        correctLetters = Array.from(new Set(correctLetters));
        incorrectLetters = Array.from(new Set(incorrectLetters));
        if(correctGuess == false){
            guesses--;
            incorrectLetters.push(letter);
            document.getElementById("lettersGuessed").innerHTML = incorrectLetters;
            failCheck(guesses);
        }
        else if(correctGuess == true){
            successCheck();
        }
    }
};

function failCheck(guesses){
    if(guesses >= 2){
        document.getElementById("guessesRemaining").innerHTML = guesses;
    }
    else if(guesses == 1){
        document.getElementById("guessesRemaining").innerHTML = guesses;
        document.getElementById("guessCard").classList.remove('bg-secondary');
        document.getElementById("guessCard").classList.add('bg-warning');
        document.getElementById("alert").classList.remove('invisible');
        document.getElementById("alert").classList.add('alert-warning');
        document.getElementById("alert").innerHTML = "You only have 1 more guess left. Choose wisely!";
    }
    else{
            document.getElementById("guessesRemaining").innerHTML = guesses;
            document.getElementById("guessCard").classList.remove('bg-warning');
            document.getElementById("guessCard").classList.add('bg-danger');
            document.getElementById("alert").classList.remove('alert-warning');
            document.getElementById("alert").classList.add('alert-danger');
            document.getElementById("alert").innerHTML = "You lose! Select the Button or press any key to play again!";
            game = "end"
    }
};

function successCheck(){
    if(correctLetters.length == wordLength){
        document.getElementById("alert").classList.remove('alert-warning','alert-danger','invisible');
        document.getElementById("alert").classList.add('alert-success');
        document.getElementById("alert").innerHTML = "Congratulations! You won! Select the Button or press any key to play again!";
        game = "end"
        console.log(game);
        };
    };