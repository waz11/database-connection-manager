import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { connectionTypes } from "../../utils";

const Dropdown = () => {
  const [value, setValue] = useState(connectionTypes[0]);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {connectionTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
