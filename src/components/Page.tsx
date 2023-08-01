import { Box, Paper } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import CityAutocomplete from "./CityAutocomplete.tsx";

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
  return (
    <Paper sx={paperSxProps} elevation={3} square={false}>
      <Box sx={cityAutocompleteWrapperSxProps}>
        <CityAutocomplete />
      </Box>

      <Box>todo</Box>
    </Paper>
  );
};

export default Page;
