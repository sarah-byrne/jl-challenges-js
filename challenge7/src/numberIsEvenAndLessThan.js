const numberIsEvenAndLessThan = something => {
  if (something == null || !Number.isInteger(something))
    throw "Integer input required";
  return aNumber => {
    if (aNumber == null || !Number.isInteger(aNumber))
      throw "Integer input required";
    return aNumber % 2 == 0 && aNumber < something;
  };
};
