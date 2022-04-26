var correct = 0;
var question1 = ""
var question4 = ""
var question8 = ""
//fot question 1 image select

function q1option1() {
    question1 = "tombrady";
}

function q1option2() {
    question1 = "drebrees";
}

function q1option3() {
    question1 = "matt ryan";
}

function q1option4() {
    question1 = "Dak prescott";
}




function q4option1() {
    question4 = "donald";
}

function q4option2() {
    question4 = "kelce";
}

function q4option3() {
    question4 = "jr";
}

function q4option4() {
    question4 = "jones";
}


function q8option1() {
    question8 = "staley";
}

function q8option2() {
    question8 = "allen";
}

function q8option3() {
    question8 = "vrabel";
}

function q8option4() {
    question8 = "hackett";
}



function check() {

    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;



    if (question1 == "tombrady") {
        correct++;
    }
    if (question2 == "newyork") {
        correct++;
    }

    if (question3 == "dallas") {
        correct++;
    }

    if (question4 == "donald") {
        correct++;
    }

    if (question5 == "falcons") {
        correct++;
    }

    if (question6 == "chicago") {
        correct++;
    }

    if (question7 == "dallas") {
        correct++;
    }

    if (question8 == "vrabel") {
        correct++;
    }

    if (question9 == "screen") {
        correct++;
    }

    if (question10 == "setback") {
        correct++;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";

}


//Start of pop up js

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const MAX_NUM_OF_SCORES = 10;

function signup(e) {
    event.preventDefault();
    //console.log('working')


    var username = document.getElementById('username').value;
    var score2 = correct;

    var user = {
        username: username,
        score2: score2,
    };


    highscores2.push(user);

    highscores2.sort((a, b) => b.score1 - a.score1);

    highscores2.splice(10);

    localStorage.setItem("highscores2", JSON.stringify(highscores2));
}

const highscores2 = JSON.parse(localStorage.getItem("highscores2")) || [];
console.log(highscores2);

