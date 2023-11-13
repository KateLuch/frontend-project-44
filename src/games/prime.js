import startEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  } if (number % 2 === 0 && number > 2) {
    return false;
  }
  const squareRoot = Math.sqrt(number);
  for (let i = 3; i <= squareRoot; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  startEngine(description, generateRound);
};

export default startGame;
