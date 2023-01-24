const extractFirstLetter = (word: string): string => {
  if (!word) {
    throw new Error("No word provided");
  }

  return word.slice(0, 1).toUpperCase();
};

export default extractFirstLetter;
