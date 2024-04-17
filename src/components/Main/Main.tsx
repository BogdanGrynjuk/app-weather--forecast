import React from 'react'
import { Wrapper } from './Main.styled'
import DailyForecast from './DailyForecast';
import CurrentWeather from './CurrentWeather';
import { weatherForecastType } from 'types';

type Props = {
  forecast: weatherForecastType;
}

const Main: React.FC<Props> = ({ forecast }) => {
  
  return (
    <Wrapper>
      <CurrentWeather forecast={forecast} />
        
      
      <DailyForecast/>
      
    </Wrapper>
  )
}

export default Main;
