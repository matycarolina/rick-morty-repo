import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

interface DatePickerProps {
  selected: any;
  onSelectStart: (value: any) => {};
  label: string;
  onFilter: () => {}
}

const BasicDatePicker: FC<DatePickerProps> = ({
  selected,
  onSelectStart,
  label,
    onFilter
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={selected}
        minDate={new Date("2010-01-01")}
        maxDate={new Date("2025-01-01")}
        onChange={(newValue) => {
            onSelectStart(newValue);
            onFilter()
        }}
        renderInput={(params) => (
          <TextField {...params} helperText={params?.inputProps?.placeholder} />
        )}
      />
    </LocalizationProvider>
  );
};
export default BasicDatePicker;
