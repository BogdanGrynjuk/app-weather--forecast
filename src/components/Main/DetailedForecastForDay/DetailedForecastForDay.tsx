import DegreeCelsius from 'components/DegreeCelsius';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { currentWeaherForecastType, weatherForecastType } from 'types';
import { Data, Section, SectionTitle, TempItem } from './DetailedForecastForDay.styled';
import WeatherParamCard from '../WeatherParamCard/WeatherParamCard';
import helpers from 'helpers';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import { FreeMode, Scrollbar } from 'swiper/modules';


type Props = {
  forecast: weatherForecastType;
  currentForecast: currentWeaherForecastType;
}

const DetailedForecastForDay: React.FC<Props> = ({ forecast, currentForecast }) => {
  
  const currentWeather = currentForecast;
  const forecastForThreeDays = forecast.list.slice(0, 24);
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
        <SectionTitle>Прогноз погоди на три дні:</SectionTitle>
        <Swiper
          slidesPerView={9}        
          breakpoints = {{            
            320: {
              slidesPerView: 5,
              spaceBetween: 10
            },            
            768: {
              slidesPerView: 7,
              spaceBetween: 20
            },            
            1280: {
              slidesPerView: 9,
              spaceBetween: 30
            }
          }}
          freeMode={true}
          scrollbar={{
            draggable: true,
            hide: true,    
          }}
          modules={[FreeMode, Scrollbar]}
          nested={true}
          grabCursor={false}
        >
          <SwiperSlide>              
            <TempItem>
              <span>{currentTime}</span>              
              <img
                alt={`weather-icon-${currentWeather.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              />
              <DegreeCelsius temperature={Math.round(currentWeather.main.temp)} />
            </TempItem>
          </SwiperSlide>
          {forecastForThreeDays.map((item) => (
            <>
              {moment(item.dt * 1000).format("HH:mm") === "00:00" &&
                <SwiperSlide>
                  <Data>
                    <span>{ helpers.makeFirstLetterUppercase( moment(item.dt * 1000).utcOffset(utcOffset).format("dd"))}</span>
                    <span>{ moment(item.dt * 1000).utcOffset(utcOffset).format("DD")}</span>
                    <span>{ moment(item.dt * 1000).utcOffset(utcOffset).format("MMM")}</span>
                  </Data>
                </SwiperSlide>}
            <SwiperSlide>
              <TempItem>
                <span>{moment(item.dt * 1000).format("HH:mm")}</span>
              
                <img
                  alt={`weather-icon-${item.weather[0].description}`}
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                />
                <DegreeCelsius temperature={Math.round(item.main.temp)} />
              </TempItem>
              </SwiperSlide>
              </>
          ))}

        </Swiper>
        
      </Section>
      <section>
        <SectionTitle>Поточні погодні характеристики: </SectionTitle>
        <div style={{ display: "flex" }}>
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
            description={helpers.getWindDirection(wind.deg, wind.gust)}
          />
          
        </div>

        
        
      </section>
    </>
  );
}

export default DetailedForecastForDay;
