import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/uk';
import { WeatherSvg } from 'weather-icons-animated';
import { Content, Forecast, Info, Label, LocalDate, SunriseSunsetInfo, TempFeelsLike, Weather, WeatherDescriotion } from './CurrentWeather.styled';
import DegreeCelsius from 'components/DegreeCelsius';
import Sunrise from 'components/Icons/Sunrise';
import Sunset from 'components/Icons/Sunset';
import helpers from 'helpers';
import { weatherDataType, weatherStateType } from 'types';
import weatherIconStateMapping from 'constants/weatherIconStateMapping';

type Props = {
  weatherForecast: weatherDataType
}

const CurrentWeather: React.FC<Props> = ({ weatherForecast }) => {
  moment.locale('uk');

  const currentWeaterForecast = weatherForecast.current;
  const { temp, feels_like, dt, sunrise, sunset } = currentWeaterForecast; 
  const { description, icon } = currentWeaterForecast.weather[0];
  const utcOffset = weatherForecast.timezone_offset / 60;
  const sunriseTime = moment(sunrise * 1000).utcOffset(utcOffset).format('HH:mm');
  const sunsetTime = moment(sunset * 1000).utcOffset(utcOffset).format('HH:mm');

  const [currentDate, setCurrentDate] = useState<string>(moment(dt * 1000).utcOffset(utcOffset).format('dd, D MMMM, HH:mm'));

  useEffect(() => {
    setCurrentDate(moment().utcOffset(utcOffset).format('dd, D MMMM, HH:mm'));
  }, [utcOffset]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(moment().utcOffset(utcOffset).format('dd, D MMMM, HH:mm'));
    }, 60000 );

    return () => clearInterval(interval);
  }, [utcOffset]);  

  return (
    <Content>
      <LocalDate>
        <Label>Місцевий час:</Label>
        <span>{helpers.makeFirstLetterUppercase(currentDate)}</span>       
      </LocalDate>
      
      <Forecast>
        <Weather>
          <DegreeCelsius temperature={Math.round(temp)}/>
          <WeatherSvg state={weatherIconStateMapping[icon] as weatherStateType} width={60} height={60} />
        </Weather>
        <WeatherDescriotion >{helpers.makeFirstLetterUppercase(description)}</WeatherDescriotion>        
        <TempFeelsLike>
          <Label>Відчувається як: </Label>
          <DegreeCelsius temperature={Math.ceil(feels_like)} />
        </TempFeelsLike>      
      </Forecast>
      
      <SunriseSunsetInfo>
        <Label>Схід-захід сонця:</Label>
        <Info>
          <span><Sunrise />{sunriseTime}</span>        
          <span><Sunset />{sunsetTime}</span>
        </Info>
      </SunriseSunsetInfo>   
      
    </Content>
  );
}

export default CurrentWeather;
