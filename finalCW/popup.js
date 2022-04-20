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
