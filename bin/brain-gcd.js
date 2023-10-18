#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getGCD = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

console.log('Welcome to the Brain Games!');
const askingName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${askingName}!`);
console.log('Find the greatest common divisor of given numbers.');
const correctAnswers = 3;
for (let i = 0; i < correctAnswers; i += 1) {
  const randomNumber1 = Math.floor((Math.random() * 100) + 1);
  const randomNumber2 = Math.floor((Math.random() * 100) + 1);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  const askingForGcd = Number(readlineSync.question('Your answer: '));
  const correctAnswer = getGCD(randomNumber1, randomNumber2);
  if (askingForGcd === correctAnswer) {
    console.log('Correct!');
    if (i === correctAnswers - 1) {
      console.log(`Congratulations, ${askingName}!`);
    }
  } else {
    console.log(`'${askingForGcd}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${askingName}!`);
    break;
  }
}
