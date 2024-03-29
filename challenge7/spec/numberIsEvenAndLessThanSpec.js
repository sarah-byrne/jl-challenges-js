describe("numberIsEvenAndLessThan", function() {
  it("returns a function when given a number", function() {
    expect(typeof numberIsEvenAndLessThan(100)).toEqual("function");
  });

  it("returns a function that returns true when given an even number that is less than its input", function() {
    const isEvenAndLessThan100 = numberIsEvenAndLessThan(100);
    expect(isEvenAndLessThan100(10)).toEqual(true);
  });

  it("returns a function that returns false when given an even number that is greater than or equal to its input", function() {
    const isEvenAndLessThan100 = numberIsEvenAndLessThan(100);
    expect(isEvenAndLessThan100(200)).toEqual(false);
    expect(isEvenAndLessThan100(100)).toEqual(false);
  });

  it("returns a function that returns false when given an odd number that is less than its input", function() {
    const isEvenAndLessThan100 = numberIsEvenAndLessThan(100);
    expect(isEvenAndLessThan100(9)).toEqual(false);
  });

  it("returns a function that returns false when given an odd number that is greater than or equal to its input", function() {
    const isEvenAndLessThan99 = numberIsEvenAndLessThan(99);
    expect(isEvenAndLessThan99(201)).toEqual(false);
    expect(isEvenAndLessThan99(99)).toEqual(false);
  });

  it("throws an error when given no input", function() {
    expect(function() {
      numberIsEvenAndLessThan();
    }).toThrow("Integer input required");
  });

  it("throws an error when given a non-integer input", function() {
    expect(function() {
      numberIsEvenAndLessThan("a");
    }).toThrow("Integer input required");
    expect(function() {
      numberIsEvenAndLessThan(7.1);
    }).toThrow("Integer input required");
  });

  it("returns a function that throws an error if given no input", function() {
    const isEvenAndLessThan100 = numberIsEvenAndLessThan(100);
    expect(function() {
      isEvenAndLessThan100();
    }).toThrow("Integer input required");
  });

  it("returns a function that throws an error if given non-integer input", function() {
    const isEvenAndLessThan100 = numberIsEvenAndLessThan(100);
    expect(function() {
      isEvenAndLessThan100("b");
    }).toThrow("Integer input required");
    expect(function() {
      isEvenAndLessThan100(1.2);
    }).toThrow("Integer input required");
  });
});
