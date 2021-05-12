var gameWords = [
    ["pepsi", ["p", "z", "b", "b", "y", "a", "e", "p", "s", "i"], "svg1"],
    ["amazon", ["a", "x", "n", "m", "b", "p", "a", "z", "o", "n"], "svg2"],
    ["pizzahut", ["h", "p", "b", "i", "t", "d", "z", "u", "a", "z", "f", "a", "t"], "Layer_1"]
];
var whichGame = 0;
var theChosenWord = "";

document.getElementById("svg1").onmouseover = function () {
    document.getElementById("path22").style.fill = "#26285d";
    document.getElementById("path22").style.opacity = "0.3";
};
document.getElementById("svg1").onmouseout = function () {
    document.getElementById("path22").style.fill = "#ffffff";
    document.getElementById("path22").style.opacity = "1";
};
document.getElementById("svg2").onmouseover = function () {
    document.getElementById("path12").style.fill = "#000000";
    document.getElementById("path12").style.opacity = "0.3";

    document.getElementById("path141").style.fill = "#000000";
    document.getElementById("path141").style.opacity = "0.3";

    document.getElementById("path181").style.fill = "#000000";
    document.getElementById("path181").style.opacity = "0.3";
};
document.getElementById("svg2").onmouseout = function () {
    document.getElementById("path12").style.fill = "#ffffff";
    document.getElementById("path12").style.opacity = "1";

    document.getElementById("path141").style.fill = "#ffffff";
    document.getElementById("path141").style.opacity = "1";

    document.getElementById("path181").style.fill = "#ffffff";
    document.getElementById("path181").style.opacity = "1";
};
document.getElementById("Layer_1").onmouseover = function () {
    document.getElementById("pizza").style.fill = "#26285d";
    document.getElementById("pizza").style.opacity = "0.3";
};
document.getElementById("Layer_1").onmouseout = function () {
    document.getElementById("pizza").style.fill = "#ffffff";
    document.getElementById("pizza").style.opacity = "1";
};

var letters;
var divs;
var whichDiv;

CreateGame(whichGame);

function CreateGame(game) {
    if(game > gameWords.length - 1) {
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "none";
        document.getElementById("theTxt").innerHTML = "Congratulations for finishing all the quiz.<br>Refresh to play again.";
    }
    theChosenWord = "";
    document.getElementById(gameWords[game][2]).style.display = "block";
    var emptySpaces = document.getElementById('emptySpaces');
    for (var i = 0; i < gameWords[game][0].length; i++) {
        //console.log(gameWords[game][0][i]);
        var child = document.createElement("div");
        child.setAttribute("class", "myDiv");
        emptySpaces.appendChild(child);
    }
    var allLetters = document.getElementById('letters');
    for (var i = 0; i < gameWords[game][1].length; i++) {
        //console.log(gameWords[game][0][i]);
        var child = document.createElement("div");
        child.setAttribute("class", "letter");
        child.setAttribute("id", gameWords[game][1][i]);
        child.setAttribute("btnPressed", "no");
        child.innerHTML = gameWords[game][1][i].toUpperCase();
        allLetters.appendChild(child);
    }
    letters = document.getElementsByClassName("letter");
    divs = document.getElementsByClassName("myDiv");
    whichDiv = 0;
    var myFunction = function (e) {
        if (this.getAttribute("btnPressed") == "no") {
            x = divs[whichDiv].offsetLeft;
            y = divs[whichDiv].offsetTop;
            var newposX = x - this.offsetLeft;
            var newposY = y - this.offsetTop;
            this.style.transform = "translate3d(" + newposX + "px," + newposY + "px,0px)";
            whichDiv++;
            this.setAttribute("btnPressed", "yes");
            theChosenWord += this.innerHTML;
        }
    };
    Array.from(letters).forEach(function (element) {
        element.addEventListener('mousedown', myFunction);
    });
}

function Check() {
    data = theChosenWord.toLowerCase();
    if (data == gameWords[whichGame][0]) {
        document.getElementById(gameWords[whichGame][2]).style.display = "none";
        whichGame++;
        ResetGame(whichGame);
    } else {
        alert("Not Right!");
        ResetGame();
    }
}

function ResetGame(game) {
    document.getElementById('emptySpaces').innerHTML = '';
    document.getElementById('letters').innerHTML = '';
    if (arguments.length == 0) {
        CreateGame(whichGame);
    } else {
        CreateGame(game);
    }
}

/////////////////////////////////