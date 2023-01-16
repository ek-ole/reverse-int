module.exports = function reverse (n) {
  const numAbs = Math.abs(n)
    const string = numAbs.toString();
    const splitString = string.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;

}
