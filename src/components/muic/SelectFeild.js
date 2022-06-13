import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectFeild = ({ optionData, label, getOptionValue }) => {
  const [optionValue, setOptionValue] = React.useState("");

  const handleChange = (event) => {
    setOptionValue(event.target.value);
  };

  getOptionValue(optionValue);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={optionValue}
          label={label}
          style={{ fontSize: "12px", padding: "3px" }}
          onChange={handleChange}
        >
          {optionData.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val.val} style={{ fontSize: "12px" }}>
                {val.val}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectFeild;
