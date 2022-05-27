import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";

interface DatePickerProps {
  selected: any;
  onSelect: (value: any) => {};
}

const BasicDateRangePicker: FC<DatePickerProps> = ({ selected, onSelect }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Inicio"
        endText="Fin"
        value={selected}
        onChange={({newValue}:any) => {
          onSelect(newValue);
        }}
        renderInput={({startProps, endProps}:any) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> hasta </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};

export default BasicDateRangePicker;
