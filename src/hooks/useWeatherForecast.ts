import { FormEvent, ChangeEvent, useCallback, useEffect, useState } from "react";

import debounce from 'lodash/debounce'
import axios from "axios";

import { weatherForecastType, cityType } from "../types";

const useWeatherForecast = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [city, setCity] = useState<cityType | null>(null);  
  const [term, setTerm] = useState<string>('');
  const [forecast, setForecast] = useState<weatherForecastType | null>(null);
  const [options, setOptions] = useState<[]>([]); 

  const IPINFO_TOKEN = "805536fa8da0c5";
  const OPENWEATHER_API_KEY = "ece85ccbe9bef82868f04d46c0d82058";
  const URL_OPENWEATHER_API = "https://api.openweathermap.org";

  const DEBOUNCE_DELAY = 300;
  
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

  const getLocationByCoordinates = async (latitude: number | null, longitude: number | null) => {
    try {
      const response = await axios.get(`${URL_OPENWEATHER_API}/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${OPENWEATHER_API_KEY}`);
      const data = response.data;

      if (data.length > 0) {        
        setCity(data[0]);
      }
      
    } catch (error) {
      console.error("Error fetching geolocation data ", error);
    }
  };

  const getLocationByCityName = async (cityName: string) => {
    try {
      const response = await axios.get(`${URL_OPENWEATHER_API}/geo/1.0//direct?q=${cityName}&limit=5&appid=${OPENWEATHER_API_KEY}`);
      const data = response.data;

      if (data.length > 0) {
        const newCity = data[0];

        if (city === null || newCity.lat !== city.lat || newCity.lon !== city.lon) {
          setCity(newCity);
        }
      } else {
        console.log(`Погоди по цьому пункту (${cityName}), на жаль, на сайті немає`);
      }
    } catch (error) {
      console.error("Error fetching geolocation data ", error);
    }
  };

  const getSearchOptions = async (term: string) => {
    try {
      const responce = await axios.get(`${URL_OPENWEATHER_API}/geo/1.0/direct?q=${term.trim()}&limit=10&appid=${OPENWEATHER_API_KEY}`);
      const data = responce.data;
      setOptions(data);
    } catch (error) {
      console.error("Error fetching search options ", error);
    }
  };

  const getWeatherForecast = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(`${URL_OPENWEATHER_API}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=ua&appid=${OPENWEATHER_API_KEY}`);
      const data = response.data;      
      const forecastData = {
        ...data.city,
        list: data.list.slice(0, 16)
      }
      setForecast(forecastData);
    } catch (error) {
      console.error("Error fetching weather forecast ", error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearchOptions = useCallback(
    debounce((value: string) => {
      getSearchOptions(value);
    }, DEBOUNCE_DELAY),
    [getSearchOptions, DEBOUNCE_DELAY]
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.trim();
    setTerm(value);
    if (value !== "") {
      debouncedSearchOptions(value);
    }    
  };

  const handleOptionSelect = (option: cityType) => {    
    getWeatherForecast(option.lat, option.lon);
    setCity(option);
    handleClearOptionSelect();
  };

  const handleClearOptionSelect = () => {
    setTerm("");
    setOptions([]);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!term) return;
    event.preventDefault();
    getLocationByCityName(term);
    setTerm("");
    setOptions([]);
  };

useEffect(() => {
  const getLocation = async () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      await getCoordinates();
    }
  };

  getLocation();
}, []);
  
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      getLocationByCoordinates(latitude, longitude);
      getWeatherForecast(latitude, longitude);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (city !== null) {
      getWeatherForecast(city.lat, city.lon);
    }
   }, [city]);

  return {
    city,    
    term,
    forecast,
    options,
    handleInputChange,
    handleOptionSelect,
    handleClearOptionSelect,
    handleSubmit
  };
};

export default useWeatherForecast;