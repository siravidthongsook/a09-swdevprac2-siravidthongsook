"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateReserve() {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: 'hsl(0 0% 100% / 0.78)',
      '& fieldset': { borderColor: 'var(--input)' },
      '&:hover fieldset': { borderColor: 'hsl(32 18% 74%)' },
      '&.Mui-focused fieldset': { borderColor: 'var(--ring)', borderWidth: 1 },
    },
    '& .MuiInputLabel-root.Mui-focused': { color: 'var(--foreground)' },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Choose date"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        slotProps={{
          textField: {
            variant: "outlined",
            name: "Event-Date",
            fullWidth: true,
            sx: fieldSx,
          },
        }}
      />
    </LocalizationProvider>
  );
}
