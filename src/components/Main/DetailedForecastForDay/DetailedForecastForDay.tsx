import DegreeCelsius from 'components/DegreeCelsius';
import Humidity from 'components/Icons/Humidity';
import Pop from 'components/Icons/Pop';
import Pressure from 'components/Icons/Pressure';
import Visibility from 'components/Icons/Visibility';
import Wind from 'components/Icons/Wind';
import moment from 'moment';
import React from 'react';
import { weatherForecastType } from 'types';

type Props = {
  forecast: weatherForecastType;
}

const DetailedForecastForDay: React.FC<Props> = ({ forecast }) => {
  
  // const currentForecast = forecast.list[0];
  const forecastForDay = forecast.list.slice(0, 9);  

  return (
    <>
      <section>
        <ul style={{ display: "flex", gap: "10px" }}>
          {forecastForDay.map((item, index) => (
            <li key={index} style={{ display: "flex", flexDirection: "column", columnGap: "10px", width: "50px" }}>
              {index === 0
                ? <span>зараз</span>
                : <span>{moment(item.dt * 1000).format("HH:mm")}</span>
              }
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <DegreeCelsius temperature={Math.round(item.main.temp)} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <p><Pressure /> Тиск, мм</p>
        <p><Humidity /> Вологість, %</p>
        <p><Wind /> Вітер, м/с</p>
        <p><Pop /> Ймовірність опадів, %</p>
        <p><Visibility /> Видимість, м</p>
      </section>
    </>
  );
}

export default DetailedForecastForDay;
