const countSymbolsAmount = (text: string, maxSymbolsAmount: number): number => {
  let limit = 0;

  limit = Math.floor((text.length * 100) / maxSymbolsAmount);

  if (text.length > maxSymbolsAmount) {
    limit = 100;
  }

  return limit;
};

export default countSymbolsAmount;
