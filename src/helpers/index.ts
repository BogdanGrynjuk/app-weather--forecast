const makeFirstLetterUppercase = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
};

const addPositiveSign = (number: number): string => {
  if (number <= 0) return number.toString();
  return "+" + number.toString();
};

const getPressureDescription = (value: number): string => {
  if (Math.round(value * 0.75006375541921) < 760) return "Менше норми";
  if (Math.round(value * 0.75006375541921) > 760) return "Більше норми";
  return "У межах норми"
};

export const getHumidityDescription = (level: number): string => {
  if (level < 30) return "Сухо і некомфортно";
  if (level >= 30 && level <= 60) return "Комфортно";
  return "Висока вологість";
};

export const getVisibilityDescription = (value: number): string => {
  if (value <= 50) return 'Небезпечно';
  if (value > 50 && value <= 500) return 'Cильний туман';
  if (value > 500 && value <= 2000) return 'Легкий туман';
  if (value > 2000 && value <= 9000) return 'Bидимість хороша';
  return 'Дуже ясний день';
};

export const getWindDescription = (deg: number, gust: number): string => {
  let direction: string = "Пн";
  let gusts: string = "немає";
  
  if (gust) {
    gusts = `${Math.round(gust)}м/с`;
  }

  if (deg > 15 && deg <= 75) direction = "Пн-сх";
  if (deg > 76 && deg <= 105) direction = "Сх";
  if (deg > 105 && deg <= 165) direction = "Пд-Сх";
  if (deg > 166 && deg <= 195) direction = "Пд";
  if (deg > 195 && deg <= 255) direction = "Пд-Зх";
  if (deg > 255 && deg <= 285) direction = "Зх";
  if (deg > 285 && deg <= 345) direction = "Пн-Зх";
  return `${direction}, пориви ${gusts}`;
};


export const helpers = {
  makeFirstLetterUppercase,
  addPositiveSign,
  getPressureDescription,
  getHumidityDescription,
  getVisibilityDescription,
  getWindDescription
};

export default helpers;