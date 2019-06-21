const numberIsEvenAndLessThan = something => {
  const isValidInput = input => {
    if (input == null || !Number.isInteger(input))
      throw "Integer input required";
  };
  isValidInput(something);
  return aNumber => {
    isValidInput(aNumber);
    return aNumber % 2 == 0 && aNumber < something;
  };
};
