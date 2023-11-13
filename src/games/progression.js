import startEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [start];
  let currentNumber = start + step;
  for (let i = 1; i < length; i += 1) {
    progression.push(currentNumber);
    currentNumber += step;
  }
  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 20);
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 5);
  const progression = generateProgression(firstNumber, progressionStep, progressionLength);

  const missingNumIndex = getRandomNumber(0, progressionLength - 1);
  const answer = progression[missingNumIndex].toString();
  progression[missingNumIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startGame = () => {
  startEngine(description, generateRound);
};

export default startGame;
