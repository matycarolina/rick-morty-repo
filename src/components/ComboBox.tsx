import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface ComboBoxProps {
  options: string[];
  onSelect: (value: any) => {};
  onFilter: (value: any) => {};
  label: string;
}

const ComboBox: FC<ComboBoxProps> = ({
  options,
  onSelect,
  onFilter,
  label,
}) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={(event, value) => {
        onSelect(value);
        onFilter(value);
      }}
    />
  );
};

export default ComboBox;
