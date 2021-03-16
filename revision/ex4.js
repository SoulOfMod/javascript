function swap(str) {
  var word = [];
  for (var i = 0; i < str.length; i++) {

      if (str[i] == str.toLowerCase()) {
          word[i] = str[i].toUpperCase();
      } else {
          word[i] = str[i].toLowerCase();
      }

 }
 console.log(word.join(""));
} 

swap("HeLlo World");