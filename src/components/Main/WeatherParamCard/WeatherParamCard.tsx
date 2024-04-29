import Humidity from 'components/Icons/Humidity';
import Pressure from 'components/Icons/Pressure';
import Visibility from 'components/Icons/Visibility';
import Wind from 'components/Icons/Wind';
import React from 'react';
import { CardWrapper } from './WeatherParamCard.styled';

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
    <CardWrapper className="w-[140px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-ls rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between">
      <div className="flex items-center text-sm font-bold">
        <Icon /> <h3 className="ml-1">{title}</h3>
      </div>
      <h4 className="mt-2 text-lg">{value}</h4>

      <p className="text-xs font-bold">{description}</p>
    </CardWrapper>
  )
}

export default WeatherParamCard
