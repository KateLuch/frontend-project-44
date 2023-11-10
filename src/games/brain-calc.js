import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown ${operator}!`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomNumber(0, 25);
  const num2 = getRandomNumber(0, 25);
  const index = getRandomNumber(0, operators.length - 1);
  const chosenOperator = operators[index];
  const question = `${num1} ${chosenOperator} ${num2}`;
  const correctAnswer = (calculate(num1, num2, chosenOperator)).toString();
  return [question, correctAnswer];
};

const runBrainCalc = () => {
  startGame(description, generateRound);
};

export default runBrainCalc;
