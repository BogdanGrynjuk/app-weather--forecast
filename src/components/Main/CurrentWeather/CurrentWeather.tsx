import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/uk';
import { WeatherSvg } from 'weather-icons-animated';
import { Content, Forecast, Info, Label, LocalDate, SunriseSunsetInfo, TempFeelsLike, WarningMessage, Weather, WeatherDescriotion } from './CurrentWeather.styled';
import DegreeCelsius from 'components/DegreeCelsius';
import Sunrise from 'components/Icons/Sunrise';
import Sunset from 'components/Icons/Sunset';
import helpers from 'helpers';
import { cityType, weatherDataType, weatherStateType } from 'types';
import weatherIconStateMapping from 'constants/weatherIconStateMapping';

type Props = {
  weatherForecast: weatherDataType,
  city: cityType
}

const CurrentWeather: React.FC<Props> = ({ weatherForecast, city }) => {
  moment.locale('uk');

  const currentWeaterForecast = weatherForecast.current;
  const { temp, feels_like, dt, sunrise, sunset } = currentWeaterForecast; 
  const { description, icon } = currentWeaterForecast.weather[0];
  const utcOffset = weatherForecast.timezone_offset / 60;
  const sunriseTime = moment(sunrise * 1000).utcOffset(utcOffset).format('HH:mm');
  const sunsetTime = moment(sunset * 1000).utcOffset(utcOffset).format('HH:mm');
  let cityName: string = '';
  
  if (city && city?.local_names && city.local_names?.uk) {
    cityName = city.local_names.uk;
  } else {
    cityName = city.name;
  }

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
          <DegreeCelsius temperature={Math.round(temp)} />
          <WeatherSvg state={weatherIconStateMapping[icon] as weatherStateType} width={60} height={60} />
        </Weather>
        <WeatherDescriotion >{helpers.makeFirstLetterUppercase(description)}</WeatherDescriotion>
        <TempFeelsLike>
          <Label>Відчувається як: </Label>
          <DegreeCelsius temperature={Math.ceil(feels_like)} />
        </TempFeelsLike>
      </Forecast>
      
      {sunrise && sunset
        ?
        <SunriseSunsetInfo>
          <Label>Схід-захід сонця:</Label>        
          <Info>
            <span><Sunrise />{sunriseTime}</span>
            <span><Sunset />{sunsetTime}</span>
          </Info>          
        </SunriseSunsetInfo>
        :
        <WarningMessage>
          <span>{cityName}</span>
          <span>знаходиться у полярній області</span>
        </WarningMessage>
      }      
    </Content>
  );
}

export default CurrentWeather;
