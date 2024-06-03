import { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

interface IProps {
  label: string;
  options: string[];
  initialValue?: string;
  onChange: (value: string) => void;
}

const DropDown = ({
  onChange,
  label,
  options,
  initialValue = options[0],
}: IProps) => {
  useEffect(() => {
    onChange(initialValue);
  }, []);

  return (
    <TextField
      id="standard-select-currency-native"
      select
      label={label}
      defaultValue={initialValue}
      SelectProps={{
        native: true,
      }}
      variant="standard"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </TextField>
  );
};

export default DropDown;
