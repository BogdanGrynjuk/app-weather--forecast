import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Mousewheel, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Wrapper } from './DailyForecast.styled';
import DetailedForecastForDay from '../DetailedForecastForDay';
import { weatherDataType } from 'types';

type Props = {
  weatherForecast: weatherDataType
}

const DailyForecast: React.FC<Props> = ({ weatherForecast}) => {
  return (
    <Wrapper>
      <Swiper
        effect={'creative'}
        speed={1000}
        creativeEffect={{
          prev: {
            shadow: true,
            opacity: 0,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            shadow: true,
            opacity: 0,
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        loop={false}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        keyboard={{ enabled: true }}        
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        mousewheel={{ invert: true }}
        modules={[Keyboard, Pagination, Mousewheel, EffectCreative]}       
      >
        <SwiperSlide><DetailedForecastForDay weatherForecast={weatherForecast} /></SwiperSlide>
        <SwiperSlide>Прогноз на наступні дні</SwiperSlide>         
      </Swiper>
    </Wrapper>
  );
}

export default DailyForecast;
