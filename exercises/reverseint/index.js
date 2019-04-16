// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var arr = n.toString().split("").reverse();
  var reversed = "";

  if ( arr[arr.length-1] !== "-") {
    for( var num of arr) {
    reversed += num;
    };
  } else {
    reversed += "-";
    arr.splice(arr.length-1);
    for ( var num of arr) {
      reversed += num;
    };
  };
  return Number(reversed);
};
module.exports = reverseInt;
