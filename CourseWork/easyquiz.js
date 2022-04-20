/*
var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}


	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick != function(){
		showResults(questions, quizContainer, resultsContainer);

	}

}
*/
/*
var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}


	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick != function(){
		showResults(questions, quizContainer, resultsContainer);

	}

}
*/

var a;
var wronga = " Question 1 was wrong";
var correctanswera = "Los Angeles Rams and the Cincinnati Bengals";

var b;
var wrongb = " Question 2 was wrong";
var correctanswerb = "6";

var c;
var wrongc = " Question 3 was wrong";
var correctanswerc = "the team that loses the coin toss start the game by a kick-off to the other team";

var d;
var wrongd = " Question 4 was wrong";
var correctanswerd ="The game goes on for another quater";

var e;
var wronge = " Question 5 was wrong";
var correctanswere = "When a player grabs an opposing team helmets";

var f;
var wrongf = " Question 6 was wrong";
var correctanswerf= "100 yards";

var g;
var wrongg = " Question 7 was wrong";
var correctanswerg = "When a member of the opposing team catches the ball";

var h;
var wrongh = " Question 8 was wrong";
var correctanswerh = "United States of America";

var i;
var wrongi = " Question 9 was wrong";
var correctansweri = "National Football League";

var j;
var wrongj = " Question 10 was wrong";
var correctanswerj = "between the end of the 2nd and start of the 3rd quater";

var z;

window.onload = function() {
	a = 0;
	message001.innerHTML = question001;
	options001.innerHTML = choices001;
	click001.innerHTML = "<button onclick=set002()>Next</button>";
}

function correct001() {
	a = 1;
}

function incorrect001() {
	a = 0;
	wronga = " Question 1 was wrong.";
}

function set002() {
	b = 0;
	message001.innerHTML = question002;
	options001.innerHTML = choices002;
	click001.innerHTML = "<button onclick=set003()>Next</button>";
}

function correct002() {
	b = 1;
}

function incorrect002() {
	b = 0;
	wrongb = " Question 2 was wrong"
}

function set003() {
	c = 0;
	message001.innerHTML = question003;
	options001.innerHTML = choices003;
	click001.innerHTML = "<button onclick=set004()>Next</button>";
}

function correct003() {
	c = 1;
}

function incorrect003() {
	c = 0;
}

function set004() {
	d = 0;
	message001.innerHTML = question004;
	options001.innerHTML = choices004;
	click001.innerHTML = "<button onclick=set005()>Next</button>";
}

function correct004() {
	d = 1;
}

function incorrect004() {
	d = 0;
}

function set005() {
	e = 0;
	message001.innerHTML = question005;
	options001.innerHTML = choices005;
	click001.innerHTML = "<button onclick=set006()>Next</button>";
}

function correct005() {
	e = 1;
}

function incorrect005() {
	e = 0;
}

function set006() {
	f = 0;
	message001.innerHTML = question006;
	options001.innerHTML = choices006;
	click001.innerHTML = "<button onclick=set007()>Next</button>";
}

function correct006() {
	f = 1;
}

function incorrect006() {
	f = 0;
}

function set007() {
	g = 0;
	message001.innerHTML = question007;
	options001.innerHTML = choices007;
	click001.innerHTML = "<button onclick=set008()>Next</button>";
}

function correct007() {
	g = 1;
}

function incorrect007() {
	g = 0;
}

function set008(){
	h = 0;
	message001.innerHTML = question008;
	options001.innerHTML = choices008;
	click001.innerHTML = "<button onclick=set009()>Next</button>";
}

function correct008() {
	h = 1;
}

function incorrect008() {
	h = 0;
}

function set009(){
	i = 0;
	message001.innerHTML = question009;
	options001.innerHTML = choices009;
	click001.innerHTML = "<button onclick=set010()>Next</button>";
}

function correct009() {
	i = 1;
}

function incorrect009() {
	i = 0;
}

function set010(){
	j = 0;
	message001.innerHTML = question010;
	options001.innerHTML = choices010;
	click001.innerHTML = "<button onclick=result001()>Score</button>";
}

function correct010() {
	j = 1;
}

function incorrect010() {
	j = 0;
}

function result001() {
	z = a + b + c + d + e + f + g + i + j;
	message001.innerHTML = "End of Quiz";
	options001.innerHTML = "";
	comment001.innerHTML = "Your score is: " + z+"/10";

	if (a == 0) {
		comment001.innerHTML += "<br/>" + wronga + "<br/>" + question001 + "<br/>" + "The correct answer was:<br/>" + correctanswera;
	}

	if (b == 0) {
		comment001.innerHTML += "<br/>" + wrongb  + "<br/>" + question002 + "<br/>" + "The correct answer was:<br/>" + correctanswerb;
	}

	if (c == 0) {
		comment001.innerHTML += "<br/>" + wrongc  + "<br/>" + question003 + "<br/>" + "The correct answer was:<br/>" + correctanswerc;
	}

	if (d == 0) {
		comment001.innerHTML += "<br/>" + wrongc  + "<br/>" + question004 + "<br/>" + "The correct answer was:<br/>" + correctanswerd;
	}

	if (e == 0) {
		comment001.innerHTML += "<br/>" + wrongc  + "<br/>" + question005 + "<br/>" + "The correct answer was:<br/>" + correctanswere;
	}

	if (f == 0) {
		comment001.innerHTML += "<br/>" + wrongc  + "<br/>" + question006 + "<br/>" + "The correct answer was:<br/>" + correctanswerf;
	}

	if (g == 0) {
		comment001.innerHTML += "<br/>" + wrongc  + "<br/>" + question007 + "<br/>" + "The correct answer was:<br/>" + correctanswerg;
	}

	if (h == 0) {
		comment001.innerHTML += "<br/>" + wrongc  + "<br/>" + question008 + "<br/>" + "The correct answer was:<br/>" + correctanswerh;
	}

	if (i == 0) {
		comment001.innerHTML += "<br/>" + wrongc  + "<br/>" + question009 + "<br/>" + "The correct answer was:<br/>" + correctansweri;
	}

	if (j == 0) {
		comment001.innerHTML += "<br/>" + wrongc  + "<br/>" + question010 + "<br/>" + "The correct answer was:<br/>" + correctanswerj;
	}

	click001.innerHTML = "<button onclick=repeat001()>Repeat</button>";
	click002.innerHTML = "<button onclick=register()>Regidter to save score</button>"
}

function repeat001() {
	location.reload();
}

function register(){
	
}