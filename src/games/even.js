import startEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  startEngine(description, generateRound);
};

export default startGame;
