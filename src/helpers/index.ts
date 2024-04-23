const makeFirstLetterUppercase = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
};

const addPositiveSign = (number: number): string => {
  if (number <= 0) return number.toString();
  return "+" + number.toString();
};


export const helpers = {
  makeFirstLetterUppercase,
  addPositiveSign
};

export default helpers;