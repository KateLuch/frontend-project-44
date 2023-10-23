#!/usr/bin/env node
import readlineSync from 'readline-sync';

// const getRandomRange = (min = 5, max = 11) => {
//   const randomRangeLength = Math.floor(Math.random() * (max - min) + min);
//   return randomRangeLength;
// };

console.log('Welcome to the Brain Games!');
const askingName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${askingName}!`);
console.log('What number is missing in the progression?');
const correctAnswers = 3;

for (let i = 0; i < correctAnswers; i += 1) {
  const firstNumber = Math.floor((Math.random() * 20) + 1);
  const progression = [firstNumber];
  const progressionLength = Math.floor((Math.random() * 6) + 5);
  const progressionStep = Math.floor((Math.random() * 5) + 1);
  let currentNum = firstNumber + progressionStep;

  for (let j = 1; j < progressionLength; j += 1) {
    progression.push(currentNum);
    currentNum += progressionStep;
  }
  const missingNumIndex = Math.floor((Math.random() * progressionLength));
  const missingNum = progression[missingNumIndex];
  let resultingProgression = '';
  let k = firstNumber;
  let isIndex;
  while (k <= progression[progressionLength - 1]) {
    isIndex = k === missingNum ? '..' : `${k}`;
    k += progressionStep;
    resultingProgression += `${isIndex} `;
  }
  console.log(`Question: ${resultingProgression}`);
  const askingForAnswer = Number(readlineSync.question('Your answer: '));
  if (askingForAnswer === missingNum) {
    console.log('Correct!');
    if (i === correctAnswers - 1) {
      console.log(`Congratulations, ${askingName}!`);
    }
  } else {
    console.log(`'${askingForAnswer}' is wrong answer ;(. Correct answer was '${missingNum}'.\nLet's try again, ${askingName}!`);
    break;
  }
}
