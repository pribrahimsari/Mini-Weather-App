import { useEffect, useState } from "react";
import { useWeather } from "../context/WeatherContext.tsx";
import { Alert } from "@mui/material";
import SkeletonLoading from "./SkeletonLoading.tsx";
import { IForecast } from "../types/API.tsx";

const WEATHER_FORECAST_API_URL = import.meta.env.VITE_WEATHER_FORECEST_API_URL;
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

const WeatherForecast = () => {
  const { selectedCity } = useWeather();

  const [loading, setLoading] = useState(false);
  const [forecastData, setForecastData] = useState<IForecast[]>([]);

  useEffect(() => {
    if (!selectedCity) {
      setForecastData([]);
      return;
    }

    // first, we need to get lat-lng coordinates of the city by name
    const fetchWeatherData = async () => {
      setLoading(true);

      await fetch(
        `${WEATHER_FORECAST_API_URL}?q=${selectedCity.label},tr&appid=${API_KEY}`,
      )
        .then(data => data.json())
        .then(async data => {
          if (data && data.list) {
            setForecastData(data.list as IForecast[]);
          }
        })
        .catch(e => console.error(e))
        .finally(() => setLoading(false));
    };

    fetchWeatherData();
  }, [selectedCity]);

  // RENDER RESULTS
  if (loading) {
    return <SkeletonLoading />;
  }

  if (!selectedCity) {
    return <Alert severity="info">PLease select a city!</Alert>;
  }

  return <div>TODO: {selectedCity?.label}</div>;
};

export default WeatherForecast;
