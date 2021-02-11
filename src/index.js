module.exports = function reverse (n) {
  let arrayOfDigits = n.toString().split('');
  
  if (arrayOfDigits[0] == '-') {
    arrayOfDigits.splice(0, 1);
  }
  
  let reversedNumber = +arrayOfDigits.reverse().join('');
  return reversedNumber;
}
