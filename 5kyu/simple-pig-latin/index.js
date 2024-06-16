// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

const pigIt = (str) => {
  const punctuation = '.,!?"';
  return str
    .split(' ')
    .map((word) => {
      if (punctuation.includes(word)) return word;
      return word.slice(1) + word[0] + 'ay';
    })
    .join(' ');
};


const print = pigIt('Pig latin is cool');
console.log(print);