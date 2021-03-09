'use strict';

let randomNumber = Math.floor(Math.random() * 20 + 1);
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let numberDisplayed = document.querySelector('.number');
let currentScore = 20;
let highestScore = 0;



document.querySelector('.check').addEventListener('click', function () {
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess == 0);

   if (guess <= 0) {
      message.textContent = 'Please enter a valid number!';
   } else if (guess === randomNumber) {
      message.textContent = 'You found it!';
      if (highestScore < currentScore) highestScore = currentScore;
      highscore.textContent = highestScore;
      numberDisplayed.textContent = randomNumber;
      document.querySelector('body').style.backgroundColor = '#ff33d7';

   } else if (guess < randomNumber) {
      message.textContent = 'Too low!';
      currentScore -= 1;
      score.textContent = currentScore;
   } else {
      message.textContent = 'Too high!';
      currentScore -= 1;
      score.textContent = currentScore;
   }
});

document.querySelector('.again').addEventListener('click', function () {
   numberDisplayed.textContent = '?';
   document.querySelector('.guess').value = '';
   currentScore = 20;
   score.textContent = '20';
   message.textContent = 'Guess a number between 1 and 20...';
   randomNumber = Math.floor(Math.random() * 20 + 1);
   document.querySelector('body').style.backgroundColor = '#222';

});