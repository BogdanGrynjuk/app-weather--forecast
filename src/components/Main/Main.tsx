import React from 'react'
import { Wrapper } from './Main.styled'
import DailyForecast from './DailyForecast';
import CurrentWeather from './CurrentWeather';
import { currentWeaherForecastType, weatherForecastType } from 'types';

type Props = {
  forecast: weatherForecastType;
  currentForecast: currentWeaherForecastType
}

const Main: React.FC<Props> = ({ forecast, currentForecast }) => {
  
  return (
    <Wrapper>
      <CurrentWeather currentForecast={currentForecast} />
      <DailyForecast forecast={forecast} currentForecast={currentForecast} />
    </Wrapper>
  );
}

export default Main;
