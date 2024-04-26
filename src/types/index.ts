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

export interface IError {
    errorMessage: string;
    actionMessage: string;
};

