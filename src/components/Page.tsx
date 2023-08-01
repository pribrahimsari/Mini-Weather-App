import { Box, Paper } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import CityAutocomplete, { CityOption } from "./CityAutocomplete.tsx";
import { useWeather } from "../context/WeatherContext.tsx";
import WeatherForecast from "./WeatherForecast.tsx";

const paperSxProps: SxProps<Theme> = {
  width: "50vw",
  minHeight: "20vh",
  padding: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: 2,
};

const cityAutocompleteWrapperSxProps: SxProps<Theme> = {
  minWidth: "15rem",
};

const Page = () => {
  const { selectedCity, setSelectedCity } = useWeather();

  const onChangeHandler = (newValue: CityOption | null) => {
    setSelectedCity(newValue);
  };

  return (
    <Paper sx={paperSxProps} elevation={3} square={false}>
      <Box sx={cityAutocompleteWrapperSxProps}>
        <CityAutocomplete value={selectedCity} onChange={onChangeHandler} />
      </Box>

      <Box
        sx={{
          minWidth: "100%",
        }}
      >
        <WeatherForecast />
      </Box>
    </Paper>
  );
};

export default Page;
