import React from 'react';
import moment from 'moment';
import { WeatherSvg } from 'weather-icons-animated';

import { Characteristic, Forecast, LongDate, Marker, ShortDate, SunriseSunsetInfo, Temp, Value, WarningMessage, WeatherCharacteristics, WeatherDescription, WeatherIcon, WeatherInfo, Wrapper } from './WeatherDayCard.styled';

import DegreeCelsius from 'components/DegreeCelsius';
import Sunrise from 'components/Icons/Sunrise';
import Sunset from 'components/Icons/Sunset';

import weatherIconStateMapping from 'constants/weatherIconStateMapping';
import helpers from 'helpers';
import { dailyWeatherDataType, weatherStateType } from 'types';

type Props = {
  dailyWeatherForecast: dailyWeatherDataType,
  utcOffset: number
};

const getWindDirection = (deg: number): string => {
  let direction: string = "Пн";
  if (deg > 15 && deg <= 75) direction = "Пн-сх";
  if (deg > 76 && deg <= 105) direction = "Сх";
  if (deg > 105 && deg <= 165) direction = "Пд-Сх";
  if (deg > 166 && deg <= 195) direction = "Пд";
  if (deg > 195 && deg <= 255) direction = "Пд-Зх";
  if (deg > 255 && deg <= 285) direction = "Зх";
  if (deg > 285 && deg <= 345) direction = "Пн-Зх";
  return direction;
};

const WeatherDayCard: React.FC<Props> = ({ dailyWeatherForecast, utcOffset }) => {
  const { dt, weather, temp, humidity, pop, pressure, wind_deg, wind_speed, sunrise, sunset} = dailyWeatherForecast;
  const shortDate = helpers.makeFirstLetterUppercase(moment(dt * 1000).utcOffset(utcOffset).format('dd, DD.MM'));
  const longDate = helpers.makeFirstLetterUppercase(moment(dt * 1000).utcOffset(utcOffset).format('dddd DD MMMM'));
  const sunriseTime = moment(sunrise * 1000).utcOffset(utcOffset).format('HH:mm');
  const sunsetTime = moment(sunset * 1000).utcOffset(utcOffset).format('HH:mm');
  const [ day, date, month ] = longDate.split(" ");
  const { icon, description } = weather[0];
  const isDayOff = (moment(dt * 1000).utcOffset(utcOffset).format("dd").toLowerCase() === "сб" ||
                  moment(dt * 1000).utcOffset(utcOffset).format("dd").toLowerCase() === "нд");

  return (
    <Wrapper>
      <ShortDate className={isDayOff ? 'isDayOff' : ''}>{shortDate}</ShortDate>
      <LongDate className={isDayOff ? 'isDayOff' : ''}>
        <span>{day}</span>
        <span>{date}</span>
        <span>{month}</span>
      </LongDate>
      <Forecast>
        <WeatherIcon>
          <WeatherSvg state={weatherIconStateMapping[icon] as weatherStateType} />
        </WeatherIcon>
        <WeatherInfo>
          <WeatherDescription>{helpers.makeFirstLetterUppercase(description)}</WeatherDescription>
          <Temp>
            <span><Marker>min </Marker><DegreeCelsius temperature={Math.floor(temp.min)} /></span>
            <span><Marker>max </Marker><DegreeCelsius temperature={Math.ceil(temp.max)} /></span>
          </Temp>
          <WeatherCharacteristics>
            <Characteristic>
              <Marker>Вологість:</Marker>
              <Value>{humidity}%</Value>
            </Characteristic>
            <Characteristic>
              <Marker>Тиск:</Marker>
              <Value>{Math.round(pressure * 0.75006375541921)}мм</Value>
            </Characteristic>
            <Characteristic>
              <Marker>Вітер:</Marker>
              <Value>{getWindDirection(wind_deg)} {Math.round(wind_speed)}м/с</Value>
            </Characteristic>
            <Characteristic>
              <Marker>Ймовірність опадів:</Marker>
              <Value>{Math.ceil(pop * 100)}%</Value>
            </Characteristic>
          </WeatherCharacteristics>
          
          {sunrise && sunset
            ?
            <SunriseSunsetInfo>
              <span><Sunrise />{sunriseTime}</span>
              <span><Sunset />{sunsetTime}</span>
            </SunriseSunsetInfo>
            :
            <WarningMessage>
              Локація знаходиться у полярній області
            </WarningMessage>
          }
        </WeatherInfo>        
      </Forecast>      
    </Wrapper>
  );
}

export default WeatherDayCard;
