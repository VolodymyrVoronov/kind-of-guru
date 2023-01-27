const reverseDateString = (date: string): string => {
  if (!date) {
    throw new Error("No date provided");
  }

  return date.split("-").reverse().join("-");
};

export default reverseDateString;
