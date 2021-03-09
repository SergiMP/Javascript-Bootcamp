'use strict';

let randomNumber = Math.floor(Math.random() * 20 + 1);
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let numberDisplayed = document.querySelector('.number');
let playAgain = document.querySelector('.again');
let currentScore = 20;
let highestScore = 0;



document.querySelector('.check').addEventListener('click', function () {
   const guess = Number(document.querySelector('.guess').value);
   
   if(guess === randomNumber){
      message.textContent = 'You found it!';
      if(highestScore < currentScore) highestScore = currentScore;
      highscore.textContent = highestScore;
      document.querySelector('body').style.backgroundColor = '#ff33d7';
      
   }else if(guess < randomNumber){
      message.textContent = 'Too low!';
      currentScore -= 1;
      score.textContent = currentScore;
   }else{
      message.textContent = 'Too high!';
      currentScore -= 1;
      score.textContent = currentScore;
   }
});

