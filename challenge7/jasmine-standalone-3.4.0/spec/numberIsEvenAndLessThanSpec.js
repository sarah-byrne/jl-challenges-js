describe("numberIsEvenAndLessThan", function() {
  it("returns a function when given a number", function() {
    expect(typeof numberIsEvenAndLessThan(100)).toEqual("function");
  });

  it("returns a function that returns true when given an even number", function() {
    const isEven = numberIsEvenAndLessThan(100);
    expect(isEven(10)).toEqual(true);
  });
});
