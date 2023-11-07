import { startGame, getRandomInt } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const playBrainProgression = () => {
  const firstNumber = getRandomInt(1, 20);
  const progression = [firstNumber];
  const progressionLength = getRandomInt(5, 10);
  const progressionStep = getRandomInt(1, 5);
  let currentNum = firstNumber + progressionStep;

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(currentNum);
    currentNum += progressionStep;
  }
  const missingNumIndex = getRandomInt(0, progressionLength);
  const missingNum = progression[missingNumIndex];
  let resultingProgression = '';
  let j = firstNumber;
  let isIndex;
  while (j <= progression[progressionLength - 1]) {
    isIndex = j === missingNum ? '..' : `${j}`;
    j += progressionStep;
    resultingProgression += `${isIndex} `;
  }
  const question = resultingProgression.toString();
  const correctAnswer = missingNum.toString();

  return [question, correctAnswer];
};

startGame(gameDescription, playBrainProgression);

export default playBrainProgression;
