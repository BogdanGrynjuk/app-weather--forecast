import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Wrapper } from './DailyForecast.styled';
import { Pagination, Keyboard, Mousewheel } from 'swiper/modules';


const DailyForecast: React.FC = () => {
  return (
    <Wrapper>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        keyboard={{ enabled: true }}
        loop={true}
        modules={[Keyboard, Pagination, Mousewheel]}
        spaceBetween={50}
        slidesPerView={1}
        mousewheel={{ invert: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: {}) => console.log(swiper)}
      >
        <SwiperSlide>Детальний прогноз на сьогодні</SwiperSlide>
        <SwiperSlide>Прогноз на наступні дні</SwiperSlide>
         
      </Swiper>
    </Wrapper>
  );
}

export default DailyForecast;
