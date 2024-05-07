import moment from 'moment';
import React from 'react'
import { weatherDataType } from 'types';
import { Item, List, Section, SectionTitle } from './DailyWeatherForecast.styled';

import WeatherDayCard from '../WeatherDayCard';

type Props = {
  weatherForecast: weatherDataType
};

const DailyWeatherForecast: React.FC<Props> = ({ weatherForecast }) => {
  moment.locale('uk');

  const dailyForecast = weatherForecast.daily.slice(1, 6);
  const utcOffset = weatherForecast.timezone_offset / 60;  

  return (
    <Section>
      <SectionTitle>Прогноз погоди на найблищі дні</SectionTitle>
      <List>
        {dailyForecast.map((forecast) => {
          return (
            <Item key={forecast.dt}>
              <WeatherDayCard dailyWeatherForecast={forecast} utcOffset={utcOffset} />
            </Item>
          );          
        })}
      </List>
    </Section>
  );
}

export default DailyWeatherForecast;
