import { FormEvent, ChangeEvent, useCallback, useEffect, useState } from "react";
import debounce from 'lodash/debounce';
import axios from "axios";
import { cityType, IError, weatherDataType } from "../types";

const useWeatherForecast = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [city, setCity] = useState<cityType | null>(null);  
  const [term, setTerm] = useState<string>('');  
  const [weatherForecast, setWetherForecast] = useState<weatherDataType | null>(null);
  const [options, setOptions] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<IError | null>(null);
  const [isCoordinatesLoaded, setIsCoordinatesLoaded] = useState<boolean>(false);
  const [isLocationLoaded, setIsLocationLoaded] = useState<boolean>(false);
  const [isForecastLoaded, setIsForecastLoaded] = useState<boolean>(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState<boolean>(false);
   
  const KEY_OPENWEATHER_API = "55670bb2efaf12adf423f24ce8ac3e30";
  const URL_OPENWEATHER_API = "https://api.openweathermap.org";

  const DEBOUNCE_DELAY = 500;
  
  const getCoordinatesByGeolocationAPI = useCallback(async () => {
    setError(null);
    try {
      if ('geolocation' in navigator) {
        const permissionStatus = await navigator.permissions?.query({ name: 'geolocation' });
        alert(permissionStatus.state)
        if (permissionStatus?.state === 'granted') {
          navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          });
        } else {
          console.error('Geolocation permission not granted');
          setError({
            errorMessage: "Ваш браузер блокує дозвіл на отримання поточної геолокації",
            actionMessage: "Будь ласка введіть назву населеного пункту у поле пошуку"
          });
          setIsLoading(false);
        }
      } else {
        console.error('Geolocation is not supported in this browser');
        setError({
          errorMessage: "Геолокація не підтримується в цьому браузері",
          actionMessage: "Будь ласка введіть назву населеного пункту у поле пошуку"
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching geolocation: ", error);
      setError({
        errorMessage: "Не можливо отримати Ваші координати",
        actionMessage: "Будь ласка введіть назву населеного пункту у поле пошуку"
      });
    } finally {
      setIsCoordinatesLoaded(true);
    }
  }, []);

  const getLocationByCoordinates = async (latitude: number | null, longitude: number | null) => {
    setError(null);
    
    try {
      const response = await axios.get(`${URL_OPENWEATHER_API}/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${KEY_OPENWEATHER_API}`);
      const data = response.data;     

      if (data.length > 0) {        
        setCity(data[0]);
      }
      
    } catch (error) {
      console.error("Error fetching geolocation data: ", error);
      setError({
          errorMessage: "Не можливо отримати Вашу геолокацію",
          actionMessage: "Будь ласка введіть назву населеного пункту у поле пошуку"
        })        
      setIsLoading(false);
    } finally {
      setIsLocationLoaded(true);
    }
  };

  const getLocationByCityName = async (cityName: string) => {
    setError(null);

    try {
      const response = await axios.get(`${URL_OPENWEATHER_API}/geo/1.0//direct?q=${cityName}&limit=5&appid=${KEY_OPENWEATHER_API}`);
      const data = response.data;      

      if (data.length > 0) {
        const newCity = data[0];
        if (city === null || newCity.lat !== city.lat || newCity.lon !== city.lon) {
          setCity(newCity);
        }
      } else {
        setCity(null);
        setWetherForecast(null);
        setError({
          errorMessage: `Погоди по цьому пункту (${cityName}), на жаль, на сайті немає`,
          actionMessage: "Будь ласка введіть іншу назву населеного пункту у поле пошуку"
        })
      }
    } catch (error) {
      console.error("Error fetching geolocation data: ", error);
      setError({
          errorMessage: "Під час отримання даних геолокації сталася помилка",
          actionMessage: "Будь ласка спробуйте надіслати запит пізніше"
        });
      setIsLoading(false);
    } finally {
      setIsLocationLoaded(true);
    }
  };

  const getSearchOptions = async (term: string) => {
    try {
      const response = await axios.get(`${URL_OPENWEATHER_API}/geo/1.0/direct?q=${term.trim()}&limit=10&appid=${KEY_OPENWEATHER_API}`);
      const data = response.data;
      if (data.length > 0) {        
        setOptions(data);
        setError(null);
      }
    } catch (error) {
      console.error("Error fetching search options ", error);
      setError({
        errorMessage: "Під час отримання даних сталася помилка",
        actionMessage: "Будь ласка спробуйте ще раз"
      });      
    }
  };

  const getWeatherForecastData = async (latitude: number, longitude: number) => {
    setError(null);
    
    try {
      const response = await axios.get(
        `${URL_OPENWEATHER_API}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=ua&exclude=minutely&appid=${KEY_OPENWEATHER_API}`
      );
      const data = response.data;
     setWetherForecast(data);
    } catch (error) {
      console.error("Error fetching current weather forecast ", error);
      setError({
        errorMessage: "Під час отримання прогнозу погоди сталася помилка",
        actionMessage: "Будь ласка спробуйте ще раз"
      });
      setIsLoading(false);
    } finally {
      setIsForecastLoaded(true);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearchOptions = useCallback(
    debounce((value: string) => {
      getSearchOptions(value);
    }, DEBOUNCE_DELAY),
    []
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setTerm(value);
    if (value !== "") {
      debouncedSearchOptions(value);
    }    
  };

  const handleOptionSelect = (option: cityType) => {    
    getWeatherForecastData(option.lat, option.lon);
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
    getCoordinatesByGeolocationAPI();
  }, [getCoordinatesByGeolocationAPI]);
  
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      getLocationByCoordinates(latitude, longitude);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (city !== null) {      
      getWeatherForecastData(city.lat, city.lon);      
    }
  }, [city]);

  useEffect(() => {
    if (isCoordinatesLoaded && isLocationLoaded && isForecastLoaded && !initialLoadComplete) {
      setIsLoading(false);
      setInitialLoadComplete(true);
    }
  }, [isCoordinatesLoaded, isLocationLoaded, isForecastLoaded, initialLoadComplete]);
 
  return {
    city,    
    term,    
    options,
    weatherForecast,
    isLoading,
    error,
    handleInputChange,
    handleOptionSelect,
    handleClearOptionSelect,
    handleSubmit
  };
};

export default useWeatherForecast;
