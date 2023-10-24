#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  } if (num % 2 === 0 && num > 2) {
    return false;
  }
  const squareRoot = Math.sqrt(num);
  for (let j = 3; j <= squareRoot; j += 2) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};

console.log('Welcome to the Brain Games!');
const askingName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${askingName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const correctAnswers = 3;
let answer = '';

for (let i = 0; i < correctAnswers; i += 1) {
  const randomNumber = Math.floor((Math.random() * 100) + 1);
  if (isPrime(randomNumber)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  console.log(`Question: ${randomNumber}`);
  const askingYesOrNo = readlineSync.question('Your answer: ');
  const compareAnswers = askingYesOrNo.localeCompare(answer);
  if (compareAnswers === 0) {
    console.log('Correct!');
    if (i === correctAnswers - 1) {
      console.log(`Congratulations, ${askingName}!`);
    }
  } else if (compareAnswers !== 0) {
    if (askingYesOrNo === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${askingName}!`);
      break;
    } else if (askingYesOrNo === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${askingName}!`);
      break;
    }
  }
}
