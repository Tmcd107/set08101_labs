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



    if (question1 == "taylor") {
        correct++;
    }
    if (question2 == "carter") {
        correct++;
    }

    if (question3 == "wishbone") {
        correct++;
    }

    if (question4 == "4-3defense") {
        correct++;
    }

    if (question5 == "cliff") {
        correct++;
    }

    if (question6 == "otto") {
        correct++;
    }

    if (question7 == "steve") {
        correct++;
    }

    if (question8 == "lawernce") {
        correct++;
    }

    if (question9 == "johnny") {
        correct++;
    }

    if (question10 == "sammy") {
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
    var score3 = correct;

    var user = {
        username: username,
        score3: score3,
    };


    highscores3.push(user);

    highscores3.sort((a, b) => b.score1 - a.score1);

    highscores3.splice(10);

    localStorage.setItem("highscores3", JSON.stringify(highscores3));
}

const highscores3 = JSON.parse(localStorage.getItem("highscores3")) || [];
console.log(highscores3);

