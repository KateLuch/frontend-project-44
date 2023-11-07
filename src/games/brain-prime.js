import { startGame, getRandomInt } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  } if (num % 2 === 0 && num > 2) {
    return false;
  }
  const squareRoot = Math.sqrt(num);
  for (let i = 3; i <= squareRoot; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playBrainPrime = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

startGame(gameDescription, playBrainPrime);

export default playBrainPrime;
