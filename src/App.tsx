import React, { useEffect, useState } from "react";
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
import axios from "axios";



const App: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [nameCity, setNameCity] = useState<string>('');
  const [term, setTerm] = useState<string>('');
  const [forecast, setForecast] = useState<{
    main: { temp: number },
    weather: [{description: string}]
  } | null>(null);
  // const [options, setOptions] = useState<[]>([]);

  const IPINFO_TOKEN = "805536fa8da0c5";
  const OPENWEATHER_API_KEY = "ece85ccbe9bef82868f04d46c0d82058";
  const URL_OPENWEATHER_API = "https://api.openweathermap.org";
  
  const getCoordinates = async () => {
    try {
      const response = await axios.get(`https://ipinfo.io/json?token=${IPINFO_TOKEN}`)
      const data = response.data;
      const [latitude, longitude] = data.loc.split(",");
      setLatitude(Number(latitude));
      setLongitude(Number(longitude));
    } catch (error) {
      console.error("Error fetching coordinates ", error);
    }
  };

  const getNameCityByCoordinates = async (latitude: number | null, longitude: number | null) => {
    try {
      const response = await axios.get(`${URL_OPENWEATHER_API}/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${OPENWEATHER_API_KEY}`);
      const data = await response.data;
      const city = data[0]?.local_names?.uk;
      if (city) {
        setNameCity(city);
      } else {
        console.log("Немає інформації про місто за цими координатами...")
      }
      return data;
    } catch (error) {
      console.error("Error fetching geolocation data ", error);
    }
  };

  const getSearchOptions = async (term: string) => {
    try {
      const responce = await axios.get(`${URL_OPENWEATHER_API}/geo/1.0/direct?q=${term.trim()}&limit=5&appid=${OPENWEATHER_API_KEY}`);
      const data = await responce.data;
      // setOptions(data);
      return data;
    } catch (error) {
      console.error("Error fetching search options ", error);
    }
  }

  const getCurrentWeatherForecast = async (latitude: number, longitude: number) => {
    try {
      const recponse = await axios.get(`${URL_OPENWEATHER_API}/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=ua&appid=${OPENWEATHER_API_KEY}`);
      const data = await recponse.data;
      console.log("Weather forecast: ", data);
      setForecast(data);
      return data;
    
    } catch (error) {
      console.error("Error fetching weather forecast ", error);
    }
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      getCoordinates();
    }
  }, []);
  
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      getNameCityByCoordinates(latitude, longitude);
      getCurrentWeatherForecast(latitude, longitude);
    }
  }, [latitude, longitude]); 

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
      {nameCity && forecast && <>
        <div>{nameCity}</div>
        <div>
          <p>
          <span>{ forecast.weather[0].description } </span>
          <span>{Math.round(forecast.main.temp)}<sup>o</sup></span>
          </p>
      </div>
 
      </>
             
      }
      
      <div>
        <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="button" style={{color: "black"}} onClick={() => getSearchOptions(term)}>Search</button>


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

