import { FormEvent, ChangeEvent, useCallback, useEffect, useState } from "react";
import debounce from 'lodash/debounce';
import axios from "axios";
import { weatherForecastType, cityType } from "../types";

const useWeatherForecast = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [city, setCity] = useState<cityType | null>(null);  
  const [term, setTerm] = useState<string>('');
  const [forecast, setForecast] = useState<weatherForecastType | null>(null);
  const [options, setOptions] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isCoordinatesLoaded, setIsCoordinatesLoaded] = useState<boolean>(false);
  const [isLocationLoaded, setIsLocationLoaded] = useState<boolean>(false);
  const [isForecastLoaded, setIsForecastLoaded] = useState<boolean>(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState<boolean>(false);

  const IPINFO_TOKEN = "805536fa8da0c5";
  const OPENWEATHER_API_KEY = "ece85ccbe9bef82868f04d46c0d82058";
  const URL_OPENWEATHER_API = "https://api.openweathermap.org";

  const DEBOUNCE_DELAY = 300;
  
  const getCoordinates = async () => {
    setErrorMessage("");

    try {
      const response = await axios.get(`https://ipinfo.io/json?token=${IPINFO_TOKEN}`)
      const data = response.data;
      const [latitude, longitude] = data.loc.split(",");
      setLatitude(Number(latitude));
      setLongitude(Number(longitude));
    } catch (error) {
      console.error("Error fetching coordinates: ", error);
      setErrorMessage("Не можливо отримати Ваші координати. Будь ласка введіть назву населеного пункту у поле пошуку");
      setIsLoading(false);
    } finally {
      setIsCoordinatesLoaded(true);
    }
  };

  const getLocationByCoordinates = async (latitude: number | null, longitude: number | null) => {
    setErrorMessage("");
    
    try {
      const response = await axios.get(`${URL_OPENWEATHER_API}/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${OPENWEATHER_API_KEY}`);
      const data = response.data;

      if (data.length > 0) {        
        setCity(data[0]);
      }
      
    } catch (error) {
      console.error("Error fetching geolocation data: ", error);
      setErrorMessage("Не можливо отримати Вашу геолокацію. Будь ласка введіть назву населеного пункту у поле пошуку");
      setIsLoading(false);
    } finally {
      setIsLocationLoaded(true);
    }
  };

  const getLocationByCityName = async (cityName: string) => {
    setErrorMessage("");

    try {
      const response = await axios.get(`${URL_OPENWEATHER_API}/geo/1.0//direct?q=${cityName}&limit=5&appid=${OPENWEATHER_API_KEY}`);
      const data = response.data;

      if (data.length > 0) {
        const newCity = data[0];

        if (city === null || newCity.lat !== city.lat || newCity.lon !== city.lon) {
          setCity(newCity);
        }
      } else {
        setErrorMessage(`Погоди по цьому пункту (${cityName}), на жаль, на сайті немає`);
      }
    } catch (error) {
      console.error("Error fetching geolocation data: ", error);
      setErrorMessage("Під час отримання даних геолокації сталася помилка. Спробуйте надіслати запит пізніше");
      setIsLoading(false);
    } finally {
      setIsLocationLoaded(true);
    }
  };

  const getSearchOptions = async (term: string) => {
    setErrorMessage("");

    try {
      const responce = await axios.get(`${URL_OPENWEATHER_API}/geo/1.0/direct?q=${term.trim()}&limit=10&appid=${OPENWEATHER_API_KEY}`);
      const data = responce.data;
      setOptions(data);
    } catch (error) {
      console.error("Error fetching search options ", error);
      setErrorMessage("Під час отримання даних сталася помилка. Спробуйте ще раз");      
    }
  };

  const getWeatherForecast = async (latitude: number, longitude: number) => {
    setErrorMessage("");

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
      setErrorMessage("Під час отримання даних сталася помилка. Спробуйте ще раз");
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
    getCoordinates();
  }, []);
  
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      getLocationByCoordinates(latitude, longitude);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (city !== null) {
      getWeatherForecast(city.lat, city.lon);
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
    forecast,
    options,
    isLoading,
    errorMessage,
    handleInputChange,
    handleOptionSelect,
    handleClearOptionSelect,
    handleSubmit
  };
};

export default useWeatherForecast;
