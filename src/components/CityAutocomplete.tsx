import React from "react";
import { CITIES } from "../constant/cities.ts";
import { Autocomplete, TextField } from "@mui/material";

export interface CityOption {
  id: number;
  label: string;
}

const options: CityOption[] = Object.entries(CITIES.tr).map(([id, label]) => ({
  id: parseInt(id),
  label,
}));

const CityAutocomplete = ({
  value,
  onChange,
}: {
  value: CityOption | null;
  onChange: () => void;
}) => {
  return (
    <Autocomplete
      fullWidth={false}
      options={options}
      renderInput={params => <TextField {...params} label="City" />}
      //
      value={value}
      onChange={(event: never, newValue: CityOption | null) => {
        onChange(newValue);
      }}
    />
  );
};

export default CityAutocomplete;
