function JavascriptBuzz() {
}

JavascriptBuzz.prototype.play = function(number) {
  let result = "";

  if (number%3 === 0) {
    result += "Javascript";
    }
    if (number%5 === 0) {
      result += "Buzz";
    }
    if (result.length === 0 || number === 0) {
      return number;
    }
  return result;
};
