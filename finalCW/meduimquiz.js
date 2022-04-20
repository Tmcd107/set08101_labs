var correct = 0;

function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
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

    if (question8 == "titans") {
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

