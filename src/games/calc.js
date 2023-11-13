import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown ${operator}!`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(0, 25);
  const number2 = getRandomNumber(0, 25);
  const index = getRandomNumber(0, operators.length - 1);
  const operator = operators[index];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, number2, operator).toString();
  return [question, answer];
};

const runBrainCalc = () => {
  startEngine(description, generateRound);
};

export default runBrainCalc;
