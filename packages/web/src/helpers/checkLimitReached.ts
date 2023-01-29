const checkLimitReached = (text: string, maxSymbolsAmount: number): boolean => {
  if (text.length > maxSymbolsAmount) {
    return true;
  }

  return false;
};

export default checkLimitReached;
