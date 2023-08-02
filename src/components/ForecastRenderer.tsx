import { IForecast } from "../types/API.tsx";
import { useMemo } from "react";
import { Avatar, Box } from "@mui/material";
import { getDayName, kelvinToCelcius } from "../utils/utils.ts";

const ForecastDaily = ({ forecast }: { forecast: IForecast }) => {
  const iconUrl = forecast.weather[0].icon
    ? `https://openweathermap.org/img/wn/${forecast.weather[0].icon.slice(
        0,
        2,
      )}d@4x.png`
    : undefined;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      sx={{ minWidth: 50 }}
    >
      <Box>{getDayName(forecast.dt_txt, "en-US", "long")}</Box>
      <Box>
        <Avatar alt="Weather" src={iconUrl} sx={{ width: 100, height: 100 }} />
      </Box>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box>{kelvinToCelcius(forecast.main.temp_max)} °</Box>
        <Box>{kelvinToCelcius(forecast.main.temp_min)} °</Box>
      </Box>
    </Box>
  );
};

const ForecastRenderer = ({ forecastData }: { forecastData: IForecast[] }) => {
  // since OpenWeather API's 5 days forecast data is not FREE,
  // we are getting FREE one which shows 3 hours of interval forecast and we need to filter them
  const suffixToFilter = useMemo(() => {
    return forecastData[0].dt_txt.slice(-8);
  }, [forecastData]);

  const filteredForecastData = forecastData.filter(data =>
    data.dt_txt.endsWith(suffixToFilter),
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {filteredForecastData.map(forecast => (
        <ForecastDaily forecast={forecast} key={forecast.dt} />
      ))}
    </Box>
  );
};

export default ForecastRenderer;
