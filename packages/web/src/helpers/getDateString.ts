const getDateString = (date: Date = new Date()): string => {
  return date.toLocaleDateString();
};

export default getDateString;
