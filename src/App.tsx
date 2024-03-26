import React from "react";
import { WeatherSvg } from "weather-icons-animated";
import Loader from "./components/Loader";
import Feels from "components/Icons/Feels";
import Humidity from "components/Icons/Humidity";
import Pop from "components/Icons/Pop";
import Pressure from "components/Icons/Pressure";
import Sunrise from "components/Icons/Sunrise";
import Sunset from "components/Icons/Sunset";
import Visibility from "components/Icons/Visibility";
import Wind from "components/Icons/Wind";

import useWeatherForecast from "hooks/useWeatherForecast";

import { cityType } from "./types/index";

const App: React.FC = () => {
  const {
    city,
    term,
    forecast,
    options,
    handleInputChange,
    handleOptionSelect,
    handleSubmit
  } = useWeatherForecast();

  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#ffffff'
      }}
    >
      {city && forecast &&
        <>
          <div>
            <span>
              {(city && city?.local_names && city.local_names?.uk)
                ? city.local_names.uk
                : city.name
              }
            </span>
            <span> {city.country}</span>
            <span> {city.state}</span>
        </div>
        <div>
          <span>{forecast.list[0].weather[0].description}</span>
          <span> {Math.round(forecast.list[0].main.temp)}<sup>o</sup></span>
        </div>
        
        </>
             
      }
      
      <div>
        <form onSubmit={handleSubmit}>
          
        <input
          type="text"
          value={term}
          onChange={handleInputChange}
          placeholder="Enter city name"
          />
        <button type="submit" style={{ color: "black" }}>Search</button>
          </form>
        <ul style={{ color: "black" }}>
          {options.map((option: cityType, index) => (
            <li key={`option.name-${index}`}>
              <button
                style={{ color: "black" }}          
                onClick={() => handleOptionSelect(option)}
              >
                {option?.local_names?.uk}  {option.name},  {option.country}, {option.state}
              </button>
            </li>
          ))}
        </ul>

      </div>
      
      <div>
        <div style={{ display: 'flex' }}>
          <WeatherSvg state="sunny" width={50} height={50} />
          <WeatherSvg state="clear-night" width={50} height={50} />
          <WeatherSvg state="partlycloudy" width={50} height={50} />
          <WeatherSvg state="cloudy" width={50} height={50} />
          <WeatherSvg state="fog" width={50} height={50} />
          <WeatherSvg state="hail" width={50} height={50} />
          <WeatherSvg state="rainy" width={50} height={50} />
          <WeatherSvg state="snowy" width={50} height={50} />
          <WeatherSvg state="snowy-rainy" width={50} height={50} />
          <WeatherSvg state="pouring" width={50} height={50} />
          <WeatherSvg state="lightning" width={50} height={50} />
          <WeatherSvg state="lightning-rainy" width={50} height={50} />
          <WeatherSvg state="windy" width={50} height={50} />
          <WeatherSvg state="sunny" width={50} height={50} />
        </div>
        <p style={{ color: "white", textAlign: "center" }}>Weather icons</p>
      </div>
      <div style={{ marginTop: 40 }}>
        <Loader />
        <p style={{ color: "white", textAlign: "center" }}>Loader</p>
      </div>
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <Feels /> <Humidity /> <Pop /> <Pressure /> <Sunrise /> <Sunset /> <Visibility /> <Wind />
        <p style={{ color: "white", textAlign: "center" }}>Additional icons</p>

      </div>
    </main>
  );
};

export default App;



