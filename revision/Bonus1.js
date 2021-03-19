function makeItSpongeBob(text) {
  change = [];
  for (i = 0; i < text.length; i++) {
    change[i] = text[i].toUpperCase();
    for (j = 0; j < text.length; j+=2) {
      change[j] = text[j].toLowerCase();
    }
  }
  
console.log(change.join(""));
  }

makeItSpongeBob("Javascript is easy")