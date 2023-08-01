import React, { createContext, useContext, useState } from "react";
import { CityOption } from "../components/CityAutocomplete.tsx";

interface IWeatherContext {
  selectedCity: CityOption | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<CityOption | null>>;
}

const WeatherContext = createContext<IWeatherContext | null>(null);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);

  const initialValue = {
    selectedCity,
    setSelectedCity,
  };

  return (
    <WeatherContext.Provider value={initialValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
