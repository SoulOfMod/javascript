function sortLetters(word) {
  word = word.split('')
  word.sort( (a, b) => a.localeCompare(b));
  console.log(word.join(''))
}

sortLetters('kOneXio')
