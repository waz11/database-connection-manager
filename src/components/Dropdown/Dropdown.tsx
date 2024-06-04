import { useEffect } from "react";
import { MenuItem, TextField } from "@mui/material";

interface IProps {
  label: string;
  options: string[];
  defaultValue?: string;
  onChange: (value: string) => void;
  isEditMode?: boolean;
  value?: string;
}

const DropDown = ({
  onChange,
  label,
  options,
  value,
  isEditMode,
  defaultValue = options[0],
}: IProps) => {
  useEffect(() => {
    onChange(defaultValue);
    console.log(defaultValue);
  }, [defaultValue]);

  return (
    <TextField
      id="standard-select-currency-native"
      select
      label={label}
      SelectProps={{
        native: true,
        readOnly: true,
      }}
      variant="standard"
      inputProps={{ readOnly: !isEditMode }}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DropDown;
