describe("JavascriptBuzz", function() {

  var jsBuzz;

  beforeEach(function(){
    jsBuzz = new JavascriptBuzz();
  });

  it("Returns 'JavascriptBuzz' when a number is divisible by 15", function() {
    expect(jsBuzz.play(15)).toEqual("JavascriptBuzz");
  });

  it("Returns the number when a number is not divisible by 15", function() {
    expect(jsBuzz.play(16)).not.toEqual("JavascriptBuzz");
    expect(jsBuzz.play(16)).toEqual(16);
  });

  it("Returns 'Buzz' when a number is divisible by 5 unless it is also divisble by 15", function() {
    expect(jsBuzz.play(5)).toEqual("Buzz");
  });

  it("Returns the number when a number is not divisible by 5", function() {
    expect(jsBuzz.play(7)).not.toEqual("Buzz");
    expect(jsBuzz.play(7)).toEqual(7);
  });

  it("Returns 'Javascript' when a number is divisible by 3 unless it is also divisble by 15", function() {
    expect(jsBuzz.play(3)).toEqual("Javascript");
  });

  it("Returns the number when a number is not divisible by 3", function() {
    expect(jsBuzz.play(7)).not.toEqual("Javascript");
    expect(jsBuzz.play(7)).toEqual(7);
  });
});
