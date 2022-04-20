const highscoresList = document.getElementById('highScoresList');
const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

highscoresList.innerHTML = highscores.map(score => {
    return `<li class="high-score">${score.username} - ${score.score1}</li>`;
}).join("");

const highscoresList2 = document.getElementById('highScoresList2');
const highscores2 = JSON.parse(localStorage.getItem('highscores2')) || [];

highscoresList2.innerHTML = highscores2.map(score => {
    return `<li class="high-score">${score.username} - ${score.score2}</li>`;
}).join("");

const highscoresList3 = document.getElementById('highScoresList3');
const highscores3 = JSON.parse(localStorage.getItem('highscores3')) || [];

highscoresList3.innerHTML = highscores3.map(score => {
    return `<li class="high-score">${score.username} - ${score.score3}</li>`;
}).join("");