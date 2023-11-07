import { startGame, getRandomInt } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

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

const playBrainGCD = () => {
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = (getGCD(randomNumber1, randomNumber2)).toString();
  return [question, correctAnswer];
};

startGame(gameDescription, playBrainGCD);

export default playBrainGCD;
