import { CITIES } from "../constant/cities.ts";
import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent } from "react";

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
  onChange: (v: CityOption | null) => void;
}) => {
  return (
    <Autocomplete
      fullWidth={false}
      options={options}
      renderInput={params => <TextField {...params} label="City" />}
      //
      value={value}
      onChange={(
        _event: SyntheticEvent<Element, Event>,
        newValue: CityOption | null,
      ) => {
        onChange(newValue);
      }}
    />
  );
};

export default CityAutocomplete;
