'use strict';

let num = Math.random();
num = Math.trunc(num * 20) + 1;
// console.log(num);
let score = 20;
// document.querySelector('.number').textContent = num;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // console.log(typeof guess);

  if (!guess) console.log('no number');
  else if (guess == num) {
    document.querySelector('.message').textContent = '🎉Correct answer';

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').textContent = num;

    let res = document.querySelector('.highscore').textContent;

    if (score > Number(res)) {
      document.querySelector('.highscore').textContent = score;
    }

    document.querySelector('.number').style.width = '30rem';
  } else if (guess > num) {
    if (score == 1) {
      document.querySelector('.message').textContent = '😒You lost the game';

      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < num) {
    if (score == 1) {
      document.querySelector('.message').textContent = '😒You lost the game';

      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  num = Math.trunc(Math.random() * 20) + 1;
  // console.log(num);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = 'rem';
});
