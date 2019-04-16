// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let storage = {};
  let char = "";
  let count = 0;

  for ( var letter of str ) {
    storage[letter]? storage[letter] ++ : storage[letter] = 1;
  }
  for ( var key in storage ) {
    if ( storage[key] > count ) {
      char = key;
      count = storage[key];
    }
  }
  return char;
}

module.exports = maxChar;
