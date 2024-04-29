import DegreeCelsius from 'components/DegreeCelsius';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { currentWeaherForecastType, weatherForecastType } from 'types';
import { Section } from './DetailedForecastForDay.styled';
import WeatherParamCard from '../WeatherParamCard/WeatherParamCard';
import helpers from 'helpers';


type Props = {
  forecast: weatherForecastType;
  currentForecast: currentWeaherForecastType;
}

const DetailedForecastForDay: React.FC<Props> = ({ forecast, currentForecast }) => {
  
  const currentWeather = currentForecast;
  const forecastForDay = forecast.list.slice(0, 8);
  const utcOffset = currentWeather.timezone / 60;

  const { pressure, humidity } = currentWeather.main;
  const { wind, visibility } = currentWeather;
  
  const [currentTime, setCurrentTime] = useState<string>(moment(currentWeather.dt * 1000).utcOffset(utcOffset).format('HH:mm'));

  useEffect(() => {
    setCurrentTime(moment().utcOffset(utcOffset).format('HH:mm'));
  }, [utcOffset]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().utcOffset(utcOffset).format('HH:mm'));
    }, 60000 );

    return () => clearInterval(interval);
  }, [utcOffset]); 
  return (
    <>
      <Section>
        <h2>Прогноз на найближчу добу</h2>
        <ul style={{ display: "flex", gap: "10px" }}>
          <li key={currentWeather.dt} style={{ display: "flex", flexDirection: "column", columnGap: "10px", width: "50px" }}>
            <span>{ currentTime }</span>
              
              <img
                alt={`weather-icon-${currentWeather.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            />
            <DegreeCelsius temperature={Math.round(currentWeather.main.temp)} />
            </li>
          {forecastForDay.map((item) => (
            <li key={item.dt} style={{ display: "flex", flexDirection: "column", columnGap: "10px", width: "50px" }}>
               <span>{moment(item.dt * 1000).format("HH:mm")}</span>
              
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <DegreeCelsius temperature={Math.round(item.main.temp)} />
            </li>
          ))}
        </ul>
      </Section>
      <section>
        <h2>Поточні погодні характеристики: </h2>
        <div style={{display: "flex"}}>
          <WeatherParamCard
          icon="pressure"
          title="Тиск"
          value={`${pressure} мм`}
  
          description={helpers.getPressureDescription(pressure)}
        />
        <WeatherParamCard
          icon="humidity"
          title="Вологість"
          value={`${humidity} %`}  
          description={helpers.getHumidityDesription(humidity)}
          />
           <WeatherParamCard
          icon="visibility"
          title="Видимість"
          value={`${visibility} м`}  
          description={helpers.getVisibilityDescription(visibility)}
        />
           <WeatherParamCard
          icon="wind"
          title="Вітер"
          value={`${Math.round(wind.speed)} м/с`}  
          description={helpers.getWindDirection(wind.deg)}
        />
          
        </div>

        
        
      </section>
    </>
  );
}

export default DetailedForecastForDay;
