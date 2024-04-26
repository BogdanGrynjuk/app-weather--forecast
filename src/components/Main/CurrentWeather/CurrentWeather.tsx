import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/uk';
import { WeatherSvg } from 'weather-icons-animated';
import { Content, Forecast, Info, Label, LocalDate, SunriseSunsetInfo, TempFeelsLike, Weather, WeatherDescriotion } from './CurrentWeather.styled';
import { currentWeaherForecastType } from 'types';
import DegreeCelsius from 'components/DegreeCelsius';
import Sunrise from 'components/Icons/Sunrise';
import Sunset from 'components/Icons/Sunset';
import helpers from 'helpers';

type Props = {
  currentForecast: currentWeaherForecastType;
}

type WeatherState = 'sunny' | 'clear-night' | 'partlycloudy' | 'cloudy' | 'fog' | 'hail' | 'rainy' | 'snowy' | 'snowy-rainy' | 'pouring' | 'lightning' | 'lightning-rainy' | 'windy';

const CurrentWeather: React.FC<Props> = ({ currentForecast }) => {
  moment.locale('uk');

  const currentWeather = currentForecast;
  const { temp, feels_like } = currentWeather.main;
  const { description, icon } = currentWeather.weather[0];
  const utcOffset = currentWeather.timezone / 60;

  const [currentDate, setCurrentDate] = useState<string>(moment(currentWeather.dt * 1000).utcOffset(utcOffset).format('dd, D MMMM, HH:mm'));

  useEffect(() => {
    setCurrentDate(moment().utcOffset(utcOffset).format('dd, D MMMM, HH:mm'));
  }, [utcOffset]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(moment().utcOffset(utcOffset).format('dd, D MMMM, HH:mm'));
    }, 60000 );

    return () => clearInterval(interval);
  }, [utcOffset]);  

  const sunrise = moment(currentWeather.sys.sunrise * 1000).utcOffset(utcOffset).format('HH:mm');
  const sunset = moment(currentWeather.sys.sunset * 1000).utcOffset(utcOffset).format('HH:mm');
  
  const codeMapping: { [key: string]: string } = {
  '01d': 'sunny',
  '01n': 'clear-night',
  '02d': 'partlycloudy',
  '02n': 'cloudy',
  '03d': 'cloudy',
  '03n': 'cloudy',
  '04d': 'fog',
  '04n': 'fog',
  '09d': 'pouring',
  '09n': 'pouring',
  '10d': 'rainy',
  '10n': 'rainy',
  '11d': 'lightning-rainy',
  '11n': 'lightning-rainy',
  '13d': 'snowy',
  '13n': 'snowy',
  '50d': 'windy',
  '50n': 'windy',
}; 

  return (
    <Content>
      <LocalDate>
        <Label>Місцевий час:</Label>
        <span>{helpers.makeFirstLetterUppercase(currentDate)}</span>       
      </LocalDate>
      
      <Forecast>
        <Weather>
          <DegreeCelsius temperature={Math.round(temp)}/>
          <WeatherSvg state={codeMapping[icon] as WeatherState} width={60} height={60} />
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
          <span><Sunrise />{sunrise}</span>        
          <span><Sunset />{sunset}</span>
        </Info>
      </SunriseSunsetInfo>   
      
    </Content>
  );
}

export default CurrentWeather;
