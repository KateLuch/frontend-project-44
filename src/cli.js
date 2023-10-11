import readlineSync from 'readline-sync';

const userName = () => {
    var askingName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + askingName + '!');
};
export default userName;