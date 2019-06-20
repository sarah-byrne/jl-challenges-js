describe("numberIsEvenAndLessThan", function() {
  it("returns a function when given a number", function() {
    expect(typeof numberIsEvenAndLessThan(100)).toEqual("function");
  });

  it("returns a function that returns true when given an even number", function() {
    const isEven = numberIsEvenAndLessThan(100);
    expect(isEven(10)).toEqual(true);
  });

  it("returns a function that returns false when given an odd number", function() {
    const isEven = numberIsEvenAndLessThan(100);
    expect(isEven(9)).toEqual(false);
  });

  it("returns a function that returns true when given an even number that is less than its input", function() {
    const isEvenAndLessThan100 = numberIsEvenAndLessThan(100);
    expect(isEvenAndLessThan100(10)).toEqual(true);
  });

  it("returns a function that returns false when given an even number that is greater than its input", function() {
    const isEvenAndLessThan100 = numberIsEvenAndLessThan(100);
    expect(isEvenAndLessThan100(200)).toEqual(false);
  });
});
