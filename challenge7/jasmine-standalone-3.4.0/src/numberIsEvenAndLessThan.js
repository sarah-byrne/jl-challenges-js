const numberIsEvenAndLessThan = something => {
  return aNumber => {
    return aNumber % 2 == 0 && aNumber < something;
  };
};
