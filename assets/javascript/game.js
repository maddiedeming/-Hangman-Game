//Variables
const regex = /^[a-zA-Z]+$/;
var constellations = [
    {
        name: "Perseus",
        family: "Perseus",
        hint: "the Greek hero that beheaded Medusa.",
        image: "assets/images/perseus.png"
    },
    {
        name: "Andromeda",
        family: "Perseus",
        hint: "the Princess who was said to be more beautiful than the Nereids.",
        image: "assets/images/andromeda.png"
    },
    {
        name: "Cassiopeia",
        family: "Perseus",
        hint: "the Queen of Aethiopia.",
        image: "assets/images/cassiopeia.png"
    },
    {
        name: "Cetus",
        family: "Perseus",
        hint: "a sea monster.",
        image: "assets/images/cetus.png"
    },
    {
        name: "Cepheus",
        family: "Perseus",
        hint: "the King of Aethiopia.",
        image: "assets/images/cepheus.png"
    },
    {
        name: "Pegasus",
        family: "Perseus",
        hint: "a mythical winged divine stallion.",
        image: "assets/images/pegasus.png"
    },
    {
        name: "Auriga",
        family: "Perseus",
        hint: "the Latin word for charioteer.",
        image: "assets/images/auriga.png"
    },
    {
        name: "Hercules",
        family: "Hercules",
        hint: "the popular Roman God with his own movie.",
        image: "assets/images/hercules.png"
    },
    {
        name: "Sagitta",
        family: "Hercules",
        hint: "the Latin word for arrow.",
        image: "assets/images/sagitta.png"
    },
    {
        name: "Aquila",
        family: "Hercules",
        hint: "the bird that carried Zeus's thunderbolts.",
        image: "assets/images/aquila.png"
    },
    {
        name: "Lyra",
        family: "Hercules",
        hint: "the lyre of Orpheus.",
        image: "assets/images/lyra.png"
    },    
    {
        name: "Cygnus",
        family: "Hercules",
        hint: "the Latinized Greek word for swan.",
        image: "assets/images/cygnus.png"
    },
    {
        name: "Hydra",
        family: "Hercules",
        hint: "the Latin word for sea serpent.",
        image: "assets/images/hydra.png"
    },    
    {
        name: "Crater",
        family: "Hercules",
        hint: "the Latin word for cup.",
        image: "assets/images/crater.png"
    },
    {
        name: "Corvus",
        family: "Hercules",
        hint: "the Latin word for raven.",
        image: "assets/images/corvus.png"
    },
    {
        name: "Ophiuchus",
        family: "Hercules",
        hint: "the Greek word for serpent-bearer.",
        image: "assets/images/ophiuchus.png"
    },
    {
        name: "Serpens",
        family: "Hercules",
        hint: "a snake held by the healer Asclepius.",
        image: "assets/images/serpens.png"
    },    
    {
        name: "Centaurus",
        family: "Hercules",
        hint: "a creature that is half human, half horse.",
        image: "assets/images/centaurus.png"
    },
    {
        name: "Lupus",
        family: "Hercules",
        hint: "the Latin word for wolf.",
        image: "assets/images/lupus.png"
    },    
    {
        name: "Corona Australis",
        family: "Hercules",
        hint: "the Latin word for southern crown.",
        image: "assets/images/corona-australis.png"
    },    
    {
        name: "Ara",
        family: "Hercules",
        hint: "the altar where the gods first made offerings.",
        image: "assets/images/ara.png"
    },
    {
        name: "Orion",
        family: "Orion",
        hint: "a hunter in Greek Mythology.",
        image: "assets/images/orion.png"
    },
    {
        name: "Canis Major",
        family: "Orion",
        hint: "the Latin word for greater dog.",
        image: "assets/images/canis-major.png"
    },
    {
        name: "Lepus",
        family: "Orion",
        hint: "the Latin word for hare.",
        image: "assets/images/lepus.png"
    },
    {
        name: "Monoceros",
        family: "Orion",
        hint: "the Greek word for unicorn.",
        image: "assets/images/monoceros.png"
    },
    {
        name: "Aries",
        family: "Zodiac",
        hint: "the Latin word for ram.",
        image: "assets/images/aries.png"
    },
    {
        name: "Taurus",
        family: "Zodiac",
        hint: "the Latin word for bull.",
        image: "assets/images/taurus.png"
    },    
    {
        name: "Gemini",
        family: "Zodiac",
        hint: "the Latin word for twins.",
        image: "assets/images/gemini.png"
    },
    {
        name: "Cancer",
        family: "Zodiac",
        hint: "the Latin word for crab.",
        image: "assets/images/cancer.png"
    },
    {
        name: "Leo",
        family: "Zodiac",
        hint: "the Latin word for lion.",
        image: "assets/images/leo.png"
    },
    {
        name: "Virgo",
        family: "Zodiac",
        hint: "the Latin word for virgin.",
        image: "assets/images/virgo.png"
    },    
    {
        name: "Libra",
        family: "Zodiac",
        hint: "the Latin word for weighing scales.",
        image: "assets/images/libra.png"
    },
    {
        name: "Scorpius",
        family: "Zodiac",
        hint: "the Latin word for scorpion.",
        image: "assets/images/scorpius.png"
    },    
    {
        name: "Sagittarius",
        family: "Zodiac",
        hint: "the Latin word for archer.",
        image: "assets/images/sagittarius.png"
    },
    {
        name: "Capricornus",
        family: "Zodiac",
        hint: "the Latin word for horned goat.",
        image: "assets/images/capricornus.png"
    },
    {
        name: "Aquarius",
        family: "Zodiac",
        hint: "the Latin word for water-carrier.",
        image: "assets/images/aquarius.png"
    },
    {
        name: "Pisces",
        family: "Zodiac",
        hint: "the Latin word for fish.",
        image: "assets/images/pisces.png"
    },
    {
        name: "Ursa Major",
        family: "Ursa Major",
        hint: "the Latin word for great bear.",
        image: "assets/images/ursa-major.png"
    },
    {
        name: "Ursa Minor",
        family: "Ursa Major",
        hint: "the Latin word for little bear.",
        image: "assets/images/ursa-minor.png"
    },
    {
        name: "Draco",
        family: "Ursa Major",
        hint: "the Latin word for dragon.",
        image: "assets/images/draco.png"
    },
    {
        name: "Canes Venatici",
        family: "Ursa Major",
        hint: "the Latin word for hunting dogs.",
        image: "assets/images/canes-venatici.png"
    },
    {
        name: "Bootes",
        family: "Ursa Major",
        hint: "the Greek word for herdsman.",
        image: "assets/images/bootes.png"
    },
    {
        name: "Corona Borealis",
        family: "Ursa Major",
        hint: "the Latin word for northern crown.",
        image: "assets/images/corona-borealis.png"
    }  
];
var input = "";
var guesses = 6;
var wins = 0;
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
var game = "start";
//Shows an input box to enter letters in if on a mobile phone device
window.addEventListener("resize", windowResize);
function windowResize() {
    if(window.innerWidth <= 600){
        document.getElementById("mobile").classList.remove("invisible");
    }
    else{
        document.getElementById("mobile").classList.add("invisible");
    }
}
//Resets the game if win/lose
function startReset() {
    if(window.innerWidth <= 600){
        document.getElementById("mobile").classList.remove("invisible");
    }
    else{
        document.getElementById("mobile").classList.add("invisible");
    }
    game = "start";
    resetGame();
}
//Resets game defaults
function resetGame(){
    guesses = 6;
    lettersGuessed = [];
    incorrectLetters = [];
    correctLetters = [];
    letterIndex = [];
    document.getElementById("alert").innerHTML = "";
    document.getElementById("alert").classList.remove("alert-warning","alert-danger","alert-success");
    document.getElementById("alert").classList.add("invisible");
    document.getElementById("primaryButton").innerHTML = "Play Again"
    document.getElementById("primaryButton").classList.remove("btn-success");
    document.getElementById("primaryButton").classList.add("btn-dark");
    document.getElementById("buttonGroup").classList.remove("invisible");
    document.getElementById("guessCard").classList.remove("bg-warning","bg-danger","invisible");
    document.getElementById("guessCard").classList.add("bg-dark");
    document.getElementById("wordCard").classList.remove("invisible");
    document.getElementById("letterCard").classList.remove("invisible");
    document.getElementById("winCard").classList.remove("invisible");
    document.getElementById("guessesRemaining").innerHTML = guesses;
    document.getElementById("numberOfWins").innerHTML = wins;
    document.getElementById("lettersGuessed").innerHTML = incorrectLetters;
    newWord();
    pauseAudio();
    document.onkeydown = function(event){        
        input = event.keyCode;
        input = String.fromCharCode(input);
        if(input.match(regex) && game !== "end"){
            validateEntry();
        }
        else if(game == "end"){
            document.getElementById("myForm").reset();
            game = "start";
            startReset();
        }
    };
};
//Creates new word
function newWord(){
    var parent = document.getElementById("currentWord"); 
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    randomNumber = Math.floor(Math.random() * constellations.length);
    word = constellations[randomNumber].name;
    $('#primaryButton').tooltip({title: "Select this button or type any key to play!", trigger: "hover", placement: "left"});     
    
    document.getElementById("constellationImage").classList.remove("invisible");
    document.getElementById("constellationImage").src=constellations[randomNumber].image;
    word = word.toUpperCase();
    console.log(word);
        while (document.getElementById("modalBodyOne").firstChild) {
            document.getElementById("modalBodyOne").removeChild(document.getElementById("modalBodyOne").firstChild);
        }
        while (document.getElementById("modalBodyTwo").firstChild) {
            document.getElementById("modalBodyTwo").removeChild(document.getElementById("modalBodyTwo").firstChild);
        }
        var modalOneParent = document.getElementById("modalBodyOne");
        var modalOneElement = document.createElement("p");
        modalOneParent.appendChild(modalOneElement); 
        var modalOneText = document.createTextNode("This is a constellation of the " + constellations[randomNumber].family + ".");
        modalOneElement.appendChild(modalOneText); 
        var modalTwoParent = document.getElementById("modalBodyTwo");
        var modalTwoElement = document.createElement("p");
        modalTwoParent.appendChild(modalTwoElement); 
        var modalTwoText = document.createTextNode("This constellation is named after " + constellations[randomNumber].hint);
        modalTwoElement.appendChild(modalTwoText); 
    wordLength = Array.from(new Set(word));
    wordLength = wordLength.length;
    for(var w = 0; w < word.length; w++){
        newLetter = document.createElement("span");
        newLetter.classList.add("badge","badge-dark","mr-1");
        newLetter.style.width = "32px";
        newLetter.style.minHeight = "19px";
        parent.appendChild(newLetter);
        text = document.createElement("p");
        text.classList.add("mr-1");
        t = document.createTextNode(word[w]);
        text.appendChild(t);
        newLetter.appendChild(text);  
        text.classList.add("invisible");
        text.style.fontSizeAdjust = "0.58";
        text.setAttribute("ID", w);
        //Gets rid of spaces
        if((word[w] == ' ') || (word[w] == '\t') || (word[w] == '\n')){
             newLetter.classList.remove("badge-dark");
             newLetter.style.backgroundColor = "black";
             wordLength = wordLength - 1;
        }
    }
};
//Determines if guess is wrong/right, duplicate, valid, etc.
function validateEntry(){
    var letter = input.toUpperCase();
    document.getElementById("myForm").reset();
    var correctGuess = false;
    var duplicate = false;
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
            document.getElementById(letterIndex[i]).classList.remove("invisible");
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
//Determine alert displays on a failed guess
function failCheck(guesses){
    if(guesses >= 2){
        document.getElementById("guessesRemaining").innerHTML = guesses;
    }
    else if(guesses == 1){
        document.getElementById("guessesRemaining").innerHTML = guesses;
        document.getElementById("guessCard").classList.remove("bg-dark");
        document.getElementById("guessCard").classList.add("bg-warning");
        document.getElementById("alert").classList.remove("invisible");
        document.getElementById("alert").classList.add("alert-warning");
        document.getElementById("alert").innerHTML = "You only have 1 more guess left. Choose wisely!";
    }
    else{
            document.getElementById("guessesRemaining").innerHTML = guesses;
            document.getElementById("guessCard").classList.remove("bg-warning");
            document.getElementById("guessCard").classList.add("bg-danger");
            document.getElementById("alert").classList.remove("alert-warning");
            document.getElementById("alert").classList.add("alert-danger");
            document.getElementById("alert").innerHTML = "You lose! Select the Button or press any key to play again!";
            game = "end"
    }
};
//Determine alert display on winning guess
function successCheck(){
    if(correctLetters.length == wordLength){
        document.getElementById("alert").classList.remove("alert-warning","alert-danger","invisible");
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("alert").innerHTML = "Congratulations! You won! Select the Button or press any key to play again!";
        wins++;
        playAudio();
        game = "end"
        delete constellations[randomNumber];
        };
    };
//Play song on winning guess
function playAudio() { 
    document.getElementById("winningSong").load();
    document.getElementById("winningSong").play(); 
} 
//Stop song on reset   
function pauseAudio() { 
    document.getElementById("winningSong").pause(); 
}

$(document).ready(function(){ 
    $("#primaryButton").click(function(){
        startReset();
    });      
});