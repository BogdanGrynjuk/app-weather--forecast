import React from 'react';
import moment from 'moment';
import { WeatherSvg } from 'weather-icons-animated';

import DegreeCelsius from 'components/DegreeCelsius';

import weatherIconStateMapping from 'constants/weatherIconStateMapping';
import helpers from 'helpers';
import { dailyWeatherDataType, weatherStateType } from 'types';
import { Date, Forecast, Marker, Temp, WeatherDescription, WeatherIcon, WeatherInfo, Wrapper } from './WeatherDayCard.styled';

type Props = {
  dailyWeatherForecast: dailyWeatherDataType,
  utcOffset: number
};

const WeatherDayCard: React.FC<Props> = ({ dailyWeatherForecast, utcOffset }) => {
  const { dt, weather, temp } = dailyWeatherForecast;
  const date = helpers.makeFirstLetterUppercase(moment(dt * 1000).utcOffset(utcOffset).format('dd, DD.MM'));
  const { icon, description } = weather[0]
  return (
    <Wrapper>
      <Date>{date}</Date>
      <Forecast>
        <WeatherIcon>
          <WeatherSvg state={weatherIconStateMapping[icon] as weatherStateType} />              
        </WeatherIcon>
        <WeatherInfo>
        <WeatherDescription>{helpers.makeFirstLetterUppercase(description) }</WeatherDescription>
        <Temp>
          <span><Marker>мін.</Marker><DegreeCelsius temperature={Math.floor(temp.min)} /></span>
          <span><Marker>макс.</Marker><DegreeCelsius temperature={Math.ceil(temp.max)} /></span>                            
        </Temp>

        </WeatherInfo>
        
      </Forecast>
      
      
    </Wrapper>
  );
}

export default WeatherDayCard;
