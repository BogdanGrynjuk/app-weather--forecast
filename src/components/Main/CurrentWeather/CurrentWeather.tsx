import React from 'react'
import { Content } from './CurrentWeather.styled';
import { weatherForecastType } from 'types';
import moment from 'moment';
import 'moment/locale/uk';
import Sunrise from 'components/Icons/Sunrise';
import Sunset from 'components/Icons/Sunset';
import { WeatherSvg } from 'weather-icons-animated';


type Props = {
  forecast: weatherForecastType;
}

const CurrentWeather: React.FC<Props> = ({ forecast }) => {
  moment.locale('uk')
  const today = forecast.list[0];
  const { temp, temp_max, temp_min } = today.main;
  const { description } = today.weather[0];
  const codeIcon = today.weather[0].icon

  const averageTemp = Math.round(temp);
  const maxTemp = Math.ceil(temp_max);
  const minTemp = Math.floor(temp_min);

  const sunrise = moment(forecast.sunrise * 1000).format('hh:mm');
  const sunset = moment(forecast.sunset * 1000).format('hh:mm');


  const date = moment().format('D MMMM YYYY');
  const time = moment().format('hh:mm');
  const day = moment().format('dddd');

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

  type WeatherState = 'sunny' | 'clear-night' | 'partlycloudy' | 'cloudy' | 'fog' | 'hail' | 'rainy' | 'snowy' | 'snowy-rainy' | 'pouring' | 'lightning' | 'lightning-rainy' | 'windy';

 

  return (
    <Content>
      <div>{day}</div>
      <div>{date}, {time}</div>
      <div style={{ fontSize: 24 }}>
        <WeatherSvg state={codeMapping[codeIcon] as WeatherState} width={50} height={50}/>
        {averageTemp}<sup>o</sup>
      </div>
      <div style={{fontSize: 24}}>{description}</div>
      <div>
        схід сонця <Sunrise /> {sunrise}
        <br />
        захід сонця <Sunset /> {sunset}
      </div>
      <div>мін. {minTemp} макс. { maxTemp }</div>
      
    </Content>
  )
}

export default CurrentWeather
