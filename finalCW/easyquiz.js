
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
	click001.innerHTML = "<button class = 'nextbtn' onclick=set002()>Next</button>";
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
	click001.innerHTML = "<button class = 'nextbtn' onclick=set003()>Next</button>";
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
	click001.innerHTML = "<button class = 'nextbtn' onclick=set004()>Next</button>";
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
	click001.innerHTML = "<button class = 'nextbtn' onclick=set005()>Next</button>";
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
	click001.innerHTML = "<button class = 'nextbtn' onclick=set006()>Next</button>";
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
	click001.innerHTML = "<button class = 'nextbtn' onclick=set007()>Next</button>";
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
	click001.innerHTML = "<button class = 'nextbtn' onclick=set008()>Next</button>";
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
	click001.innerHTML = "<button class = 'nextbtn' onclick=set009()>Next</button>";
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
	click001.innerHTML = "<button class = 'nextbtn' onclick=set010()>Next</button>";
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
	click001.innerHTML = "<button class = 'scorebtn' onclick=result001()>Score</button>";
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
		comment001.innerHTML += `<div class= "resultsquestion">${wronga} </div>
		<p class = "questioninfo">${question001}</p> 
		<p class = "answertext">${correctanswera}</p> `
	}

	if (b == 0) {
		comment001.innerHTML += `<div class= "resultsquestion">${wrongb} </div>
		<p class = "questioninfo">${question002}</p> 
		<p class = "answertext">${correctanswerb}</p> `
	}

	if (c == 0) {
		comment001.innerHTML += `<div class= "resultsquestion">${wrongc} </div>
		<p class = "questioninfo">${question003}</p> 
		<p class = "answertext">${correctanswerc}</p> `
	}

	if (d == 0) {
		comment001.innerHTML += `<div class= "resultsquestion">${wrongd} </div>
		<p class = "questioninfo">${question004}</p> 
		<p class = "answertext">${correctanswerd}</p> `
	}

	if (e == 0) {
		comment001.innerHTML += `<div class= "resultsquestion">${wronge} </div>
		<p class = "questioninfo">${question005}</p> 
		<p class = "answertext">${correctanswere}</p> `
	}

	if (f == 0) {
		comment001.innerHTML += `<div class= "resultsquestion">${wrongf} </div>
		<p class = "questioninfo">${question006}</p> 
		<p class = "answertext">${correctanswerf}</p> `
	}

	if (g == 0) {
		comment001.innerHTML += `<div class= "resultsquestion">${wrongg} </div>
		<p class = "questioninfo">${question007}</p> 
		<p class = "answertext">${correctanswerg}</p> `
	}

	if (h == 0) {
		comment001.innerHTML += `<div class= "resultsquestion">${wrongh} </div>
		<p class = "questioninfo">${question008}</p> 
		<p class = "answertext">${correctanswerh}</p> `
	}

	if (i == 0) {
		comment001.innerHTML += `<div class= "resultsquestion">${wrongi} </div>
		<p class = "questioninfo">${question009}</p> 
		<p class = "answertext">${correctansweri}</p> `
	}

	if (j == 0) {
		comment001.innerHTML += `<div class= "resultsquestion">${wrongj} </div>
		<p class = "questioninfo">${question010}</p> 
		<p class = "answertext">${correctanswerj}</p> `
	}

	click001.innerHTML = '<button class = "rptbutton" onclick=repeat001()>Repeat</button>'
}

function repeat001() {
	location.reload();
}


//Start of pop up js

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const MAX_NUM_OF_SCORES = 10;

function signup(e) {
  event.preventDefault();
  //console.log('working')


  var username = document.getElementById('username').value;
  var score1 = document.getElementById('score1').value;

  var user = {
      username: username,
      score1: score1,
  };
  highscores.push(user);

  highscores.sort((a,b) => b.score1 - a.score1);

  highscores.splice(10);
  
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
console.log(highscores);
