import Humidity from 'components/Icons/Humidity';
import Pressure from 'components/Icons/Pressure';
import Visibility from 'components/Icons/Visibility';
import Wind from 'components/Icons/Wind';
import Uvi from 'components/Icons/Uvi';
import Clouds from 'components/Icons/Clouds';

import React from 'react';
import { CardWrapper, Description, Header, Title, Unit, Value } from './WeatherParamCard.styled';

type Props = {
  icon: 'wind' | 'humidity' | 'visibility' | 'pressure' | 'uvi' | 'clouds'
  title: string
  value: number
  unit: string
  description: string
  className?: string 
}

const icons = {
  wind: Wind,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  uvi: Uvi,
  clouds: Clouds
};

const WeatherParamCard: React.FC<Props> = ({ icon, title, value, unit, description, className }) => {
  const Icon = icons[icon];

  return (
    <CardWrapper className={className}>
      <Header>
        <Icon /> <Title>{title}</Title>
      </Header>
      <Value>
        {value} <Unit>{unit}</Unit>
      </Value>
      <Description>{description}</Description>
    </CardWrapper>
  );
}

export default WeatherParamCard;
