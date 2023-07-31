import React, { createContext, useContext, useState } from "react";

interface IWeatherContext {
  selectedCity: null;
  setSelectedCity: React.Dispatch<React.SetStateAction<null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  weatherData: null;
  setWeatherData: React.Dispatch<React.SetStateAction<null>>;
}

const WeatherContext = createContext<IWeatherContext | null>(null);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const initialValue = {
    selectedCity,
    setSelectedCity,
    loading,
    setLoading,
    weatherData,
    setWeatherData,
  };

  return (
    <WeatherContext.Provider value={initialValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
