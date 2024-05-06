import React from 'react'
import { Wrapper } from './Main.styled'
import DailyForecast from './DailyForecast';
import CurrentWeather from './CurrentWeather';
import { cityType, weatherDataType } from 'types';

type Props = {
  weatherForecast: weatherDataType,
  city: cityType
}

const Main: React.FC<Props> = ({ weatherForecast, city }) => {
  
  return (
    <Wrapper>
      <CurrentWeather weatherForecast={weatherForecast} city={city} />
      <DailyForecast  weatherForecast={ weatherForecast }/>
    </Wrapper>
  );
}

export default Main;
