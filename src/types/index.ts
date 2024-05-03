import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      textPrimaryLight: string;
      textPrimaryDark: string;
      textSecondary: string;
      bgDark: string;
      bgLight: string;      
      bgDropdownOptions: string;
      bgBtnSearch: string;
      bgBtnClose: string;
      bgInputSearch: string;
      error: string;
      

    };
    ff: {
      inconsolata: string;
    };
    fw: {
      regular: number;
      semiBold: number;
      bold: number;
    };
    fs: {
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    mq: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
};

export type weatherForecastType = {
  country: string
  sunrise: number
  sunset: number
  timezone: number

  list: [{
    clouds: {
      all: number
    }
    dt: number
    main: {
      feels_like: number
      humidity: number
      pressure: number
      temp: number
      temp_max: number
      temp_min: number
    }
    pop: number
    visibility: number
    weather: [{
      icon: string
      description: string
    }]
    wind: {
      speed: number
      gust: number
      deg: number
    }
  }]
};

export type currentWeaherForecastType = {
  weather: [{
    icon: string
    description: string
  }]
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  visibility: number
  wind: {
    speed: number
    gust: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {    
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
};

export type weatherDataType = {
  current: currentWeatherDataType;
  daily: dailyWeatherDataType[];
  hourly: hourlyWeatherDataType[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
};

type currentWeatherDataType = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: weatherConditionType[];
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
};

type weatherConditionType = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type dailyWeatherDataType = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
  uvi: number;
  weather: weatherConditionType[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
};

type hourlyWeatherDataType = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: weatherConditionType[];
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
};

export type cityType = {
  name: string
  country: string
  local_names?: {
    uk?: string
  }
  lat: number
  lon: number
  state?: string
};

export type optionType = {
  name: string
  country: string
  local_names?: {
    uk?: string
  }
  lat: number
  lon: number
  state: string
};

export type weatherStateType = 'sunny' | 'clear-night' | 'partlycloudy' | 'cloudy' | 'fog' | 'hail' | 'rainy' | 'snowy' | 'snowy-rainy' | 'pouring' | 'lightning' | 'lightning-rainy' | 'windy';

export interface IError {
    errorMessage: string;
    actionMessage: string;
};

