import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 20);
  const progression = [firstNumber];
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 5);
  let currentNum = firstNumber + progressionStep;

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(currentNum);
    currentNum += progressionStep;
  }
  const missingNumIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[missingNumIndex].toString();
  progression[missingNumIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runBrainProgression = () => {
  startGame(description, generateRound);
};

export default runBrainProgression;
