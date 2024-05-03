import React from 'react'
import { Wrapper } from './Main.styled'
import DailyForecast from './DailyForecast';
import CurrentWeather from './CurrentWeather';
import { weatherDataType } from 'types';

type Props = {
  weatherForecast: weatherDataType
}

const Main: React.FC<Props> = ({ weatherForecast }) => {
  
  return (
    <Wrapper>
      <CurrentWeather weatherForecast={ weatherForecast } />
      <DailyForecast  weatherForecast={ weatherForecast }/>
    </Wrapper>
  );
}

export default Main;
