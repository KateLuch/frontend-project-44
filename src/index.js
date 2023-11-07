import readlineSync from 'readline-sync';

const correctAnswers = 3;

export const getRandomInt = (min, max) => {
  const result = Math.floor(Math.random() * (Math.floor(max) - Math.floor(min) + 1)) + min;
  return result;
};

const getAnswer = () => readlineSync.question('Your answer: ').toLowerCase();

export const startGame = (gameDescription, gameName) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);
  for (let i = 0; i < correctAnswers; i += 1) {
    const [question, correctAnswer] = gameName();
    console.log(`Question: ${question}`);
    const UsersAnswer = getAnswer();
    const compareAnswers = UsersAnswer.localeCompare(correctAnswer);
    if (compareAnswers === 0) {
      console.log('Correct!');
      if (i === correctAnswers - 1) {
        console.log(`Congratulations, ${playerName}!`);
      }
    } else {
      console.log(`'${UsersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
      break;
    }
  }
};
