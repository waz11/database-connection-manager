import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

interface IProps {
  options: string[];
  initialValue?: string;
  onOptionChanged: (option: string) => void;
  disabled?: boolean;
}

const Dropdown = ({
  initialValue,
  options,
  onOptionChanged,
  disabled,
}: IProps) => {
  const [value, setValue] = useState(initialValue || options[0]);

  const onChange = (e: any) => {
    const option = e.target.value;
    setValue(option);
    onOptionChanged(option);
  };

  return (
    <select onChange={onChange} value={value} disabled={disabled}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
