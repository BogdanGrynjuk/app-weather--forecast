import React from 'react';
import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/react';
import DegreeCelsius from 'components/DegreeCelsius';
import { Date, Section, SectionTitle, TempItem, WeatherParamList, Wrapper } from './DetailedForecastForDay.styled';
import WeatherParamCard from '../WeatherParamCard/WeatherParamCard';
import helpers from 'helpers';
import { weatherDataType } from 'types';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import { FreeMode, Scrollbar } from 'swiper/modules';

type Props = { 
  weatherForecast: weatherDataType
};

const DetailedForecastForDay: React.FC<Props> = ({ weatherForecast }) => {
  const hourlyForecastWeather = weatherForecast.hourly.slice(0, 24); 
  const {humidity, pressure, wind_speed, wind_deg, wind_gust, visibility} = weatherForecast.current
  const utcOffset = weatherForecast.timezone_offset / 60;
  
  return (
    <Wrapper>
      <Section>
        <SectionTitle>Погодинний прогноз погоди на добу:</SectionTitle>
        <Swiper
          slidesPerView={9}
          breakpoints={{
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
          {hourlyForecastWeather.map((item) => (
            <React.Fragment key={item.dt}>
              {
                moment(item.dt * 1000).format("HH:mm") === "00:00" &&
                <SwiperSlide key={`${item.dt}-date`}>
                  <Date className={
                    (
                      moment(item.dt * 1000).utcOffset(utcOffset).format("dd").toLowerCase() === "сб"
                      ||
                      moment(item.dt * 1000).utcOffset(utcOffset).format("dd").toLowerCase() === "нд"
                    )
                      ? 'isDayOff'
                      : ''
                  }>
                    <span>{helpers.makeFirstLetterUppercase(moment(item.dt * 1000).utcOffset(utcOffset).format("dd"))}</span>
                    <span>{moment(item.dt * 1000).utcOffset(utcOffset).format("DD")}</span>
                    <span>{moment(item.dt * 1000).utcOffset(utcOffset).format("MMM")}</span>
                  </Date>
                </SwiperSlide>
              }
              <SwiperSlide key={`${item.dt}-temp`}>
                <TempItem>
                  <span>{moment(item.dt * 1000).format("HH:mm")}</span>
                  <img
                    alt={`weather-icon-${item.weather[0].description}`}
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  />
                  <DegreeCelsius temperature={Math.round(item.temp)} />
                </TempItem>
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>        
      </Section>
      <Section>
        <SectionTitle>Поточні погодні характеристики: </SectionTitle>
        <WeatherParamList>
          <WeatherParamCard
            icon="pressure"
            title="Тиск"
            value={Math.round(pressure * 0.75006375541921)}
            unit="мм"
            description={helpers.getPressureDescription(pressure)}
          />
          <WeatherParamCard
            icon="humidity"
            title="Вологість"
            value={humidity}
            unit="%"
            description={helpers.getHumidityDescription(humidity)}
          />
          <WeatherParamCard
            icon="visibility"
            title="Видимість"
            value={visibility}
            unit="м"
            description={helpers.getVisibilityDescription(visibility)}
          />
          <WeatherParamCard
            icon="wind"
            title="Вітер"
            value={Math.round(wind_speed)}
            unit="м/с"
            description={helpers.getWindDescription(wind_deg, wind_gust)}
          />
        </WeatherParamList>
      </Section>
    </Wrapper>
  );
}

export default DetailedForecastForDay;
