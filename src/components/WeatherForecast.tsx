import { useEffect, useState } from "react";
import { useWeather } from "../context/WeatherContext.tsx";
import { Alert } from "@mui/material";
import SkeletonLoading from "./SkeletonLoading.tsx";
import { IForecast } from "../types/API.tsx";
import ForecastRenderer from "./ForecastRenderer.tsx";

const WEATHER_FORECAST_API_URL = import.meta.env.VITE_WEATHER_FORECEST_API_URL;
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

const WeatherForecast = () => {
  const weatherContext = useWeather();

  const [loading, setLoading] = useState(false);
  const [forecastData, setForecastData] = useState<IForecast[]>([]);

  useEffect(() => {
    if (!weatherContext?.selectedCity) {
      setForecastData([]);
      return;
    }

    // first, we need to get lat-lng coordinates of the city by name
    const fetchWeatherData = async () => {
      setLoading(true);

      await fetch(
        `${WEATHER_FORECAST_API_URL}?q=${
          weatherContext.selectedCity!.label
        },tr&appid=${API_KEY}`,
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
  }, [weatherContext?.selectedCity]);

  // RENDER RESULTS
  if (loading) {
    return <SkeletonLoading />;
  }

  if (!weatherContext?.selectedCity) {
    return <Alert severity="info">PLease select a city!</Alert>;
  }

  if (!forecastData.length) {
    return (
      <Alert severity="warning">
        Forecast data is not available for the selected city.
      </Alert>
    );
  }

  return <ForecastRenderer forecastData={forecastData} />;
};

export default WeatherForecast;
