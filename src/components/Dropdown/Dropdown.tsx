import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

interface IProps {
  options: string[];
  initialValue?: string;
  onOptionChanged: (option: string) => void;
}

const Dropdown = ({ initialValue, options, onOptionChanged }: IProps) => {
  const [value, setValue] = useState(initialValue || options[0]);

  const onChange = (e: any) => {
    const option = e.target.value;
    setValue(option);
    onOptionChanged(option);
  };

  return (
    <select onChange={onChange} value={value}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
