function JavascriptBuzz() {
}

JavascriptBuzz.prototype.play = function(number) {
  if (number%15 === 0) {
    return "JavascriptBuzz";
  }
  else if (number%5 === 0) {
    return "Buzz";
  }
  else if (number%3 === 0) {
    return "Javascript";
  }
  else {
    return number;
  }
};
