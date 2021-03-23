let targetWord = '';
let dArray = [];
let essai = 0;

const mot = ['Manchester United', 'Barcelona', 'Real Madrid', 'Bayern Munich', 
    'Manchester City', 'Arsenal', 'Chelsea', 'Liverpool', 'Juventus', 'Tottenham Hotspur',
    'Borussia Dortmund', 'Atletico Madrid', 'Inter Milan', 'West Ham United', 'Roma',
    'Napoli', 'Everton', 'Newcastle United','New York', 'Los Angeles', 'California', 'Chicago', 'Illinois',  
    'Houston', 'Texas', 'Philadelphia', 'Pennsylvania', 'Phoenix', 'Arizona', 'San Antonio', 
    'San Diego', 'Dallas', 'San Jose', 'Austin', 'Texas', 'Jacksonville', 'Florida', 
    'San Francisco', 'Indianapolis', 'Indiana', 'Massachusetts', 'Mississippi']


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'guess> '
});

rl.on('line', (line) => {
  checkword(line);
}).on('close', () => {
  process.exit(0);
});

function pendu() {
  console.log('entré un mot');

  targetWord = mot[getRandom(getRandom(mot.length))];
  dArray = Array(targetWord.length);
  essai = 0;

  rl.prompt();  
}

function checkword(letter) {
  let tick;
  for (let i = 0; i < targetWord.length; i++) {
    if (targetWord[i].toLowerCase() === letter) {
      dArray[i] = targetWord[i];
      tick = true;
    } else if (dArray[i] === undefined) {
      dArray[i] = '_';
    }
  }

  tick ? tick = false : essai++;
  
  if (essai === 10) {
    console.log('Perdu');
    console.log('Le mot est ', targetWord);
    pendu();
    return;
  } else {
  }
  dArray.includes('_') ? rl.prompt() : console.log('You have won, you won! yea');
  console.log(dArray.join(' '));
}

//for getting random things
function getRandom(max) {
  return Math.floor(Math.random() * (max));
}

pendu();