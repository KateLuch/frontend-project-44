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
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2).toString();
  return [question, answer];
};

const runBrainGcd = () => {
  startGame(description, generateRound);
};

export default runBrainGcd;
