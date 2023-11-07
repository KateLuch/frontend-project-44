import { startGame, getRandomInt } from '../index.js';

const gameDescription = 'What is the result of the expression?';

const getCalculation = (num1, num2, action) => {
  switch (action) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'error';
  }
};

const playBrainCalc = () => {
  const actions = ['+', '-', '*'];
  const randomNumber1 = getRandomInt(0, 25);
  const randomNumber2 = getRandomInt(0, 25);
  const randomIndex = getRandomInt(0, actions.length - 1);
  const chosenAction = actions[randomIndex];
  const question = `${randomNumber1} ${chosenAction} ${randomNumber2}`;
  const correctAnswer = (getCalculation(randomNumber1, randomNumber2, chosenAction)).toString();
  return [question, correctAnswer];
};

startGame(gameDescription, playBrainCalc);

export default playBrainCalc;
