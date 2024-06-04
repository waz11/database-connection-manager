import { useEffect } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

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
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        inputProps={{ readOnly: !isEditMode }}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
