import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

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

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = (getGCD(num1, num2)).toString();
  return [question, correctAnswer];
};

const runBrainGcd = () => {
  startGame(description, generateRound);
};

export default runBrainGcd;
