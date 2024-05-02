import Humidity from 'components/Icons/Humidity';
import Pressure from 'components/Icons/Pressure';
import Visibility from 'components/Icons/Visibility';
import Wind from 'components/Icons/Wind';
import React from 'react';
import { CardWrapper, Description, Header, Title, Value } from './WeatherParamCard.styled';

type Props = {
  icon: 'wind' | 'humidity' | 'visibility' | 'pressure'
  title: string
  value: string
  description?: string
}

const icons = {
  wind: Wind,  
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,  
}

const WeatherParamCard: React.FC<Props> = ({ icon, title, value, description }) => {
  const Icon = icons[icon]


  return (
    <CardWrapper>
      <Header>
        <Icon /> <Title>{title}</Title>
      </Header>
      <Value>{value}</Value>

      <Description>{description}</Description>
    </CardWrapper>
  )
}

export default WeatherParamCard
