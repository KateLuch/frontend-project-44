import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const isEven = question % 2 === 0 ? 'yes' : 'no';
  return [question, isEven];
};

startGame(description, generateRound);

export default generateRound;
