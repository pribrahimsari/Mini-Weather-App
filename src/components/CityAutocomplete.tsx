import React, { useMemo } from "react";
import { CITIES } from "../constant/cities.ts";
import { Autocomplete, TextField } from "@mui/material";

const CityAutocomplete = () => {
  const options = useMemo(() => {
    return Object.entries(CITIES.tr).map(([id, label]) => ({ id, label }));
  }, []);

  return (
    <Autocomplete
      fullWidth={false}
      options={options}
      renderInput={params => <TextField {...params} label="City" />}
    />
  );
};

export default CityAutocomplete;
