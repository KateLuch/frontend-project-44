import { startGame, getRandomInt } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const playBrainEven = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

startGame(gameDescription, playBrainEven);

export default playBrainEven;
