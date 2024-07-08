'use strict';
// declarition
const message = document.querySelector('.message');
let stateNumber = Math.trunc((Math.random()*20)+1)
console.log(stateNumber)
let stateScore = 20;
const score = document.querySelector('.score');
let lastScore = 0;
const highScore = document.querySelector('.highscore');
const number = document.querySelector('.number');


document.querySelector('.check').addEventListener('click',function (){
    const guess = Number(document.querySelector('.guess').value)
    if(!guess){
    message.textContent = 'No Number entered';
    }else if(guess === stateNumber){
        message.textContent = '🎉 Correct Number';
        score.textContent = stateScore.toString();
        document.querySelector('body').style.backgroundColor ='#60b347';
        number.textContent = stateNumber;
        number.style.width = '30rem';
        if(stateScore > lastScore){
            lastScore = stateScore;
            highScore.textContent = lastScore;
        }
    }else if(guess !== stateNumber){
        message.textContent = guess > stateNumber ? 'too high': 'too low';
        stateScore--;
        score.textContent = stateScore.toString();
        if(stateScore < 1){
            score.textContent = '0';
            message.textContent = 'You lose';
        }
    }
})


document.querySelector('.again').addEventListener('click',function (){
    message.textContent = 'Start guessing...';
    number.textContent = '?';
    number.style.width = '15rem';
    document.querySelector('.guess').value = ''
    score.textContent = '20';
    document.querySelector('body').style.backgroundColor ='#222';
    stateScore = 20;
    stateNumber = Math.trunc((Math.random()*20)+1)
})