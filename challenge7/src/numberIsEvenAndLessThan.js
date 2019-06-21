const numberIsEvenAndLessThan = something => {
  if (something == null || !Number.isInteger(something))
    throw "Integer input required";
  return aNumber => aNumber % 2 == 0 && aNumber < something;
};
