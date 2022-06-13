import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

const CheckBoxBasic = ({ getCheckVal }) => {
  const [companyValue, setCompanyValue] = useState(false);
  getCheckVal(companyValue);
  return (
    <FormGroup>
      <FormControlLabel
        onChange={() => {
          setCompanyValue(!companyValue);
          console.log(companyValue);
        }}
        control={<Checkbox size="small" />}
        className="check-label"
        label={
          <Typography fontSize={12} color="textSecondary">
            Company
          </Typography>
        }
      />
    </FormGroup>
  );
};

export default CheckBoxBasic;
