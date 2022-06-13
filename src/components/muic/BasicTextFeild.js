import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function BasicTextFields({
  label,
  userwidth,
  fnGetInput,
  changeVal,
}) {
  const [inputVal, setInputVal] = useState("");
  fnGetInput(inputVal);
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: userwidth },
      }}
      noValidate
      autoComplete="off"
      className="text-field-b"
    >
      <TextField
        sx={{ padding: "0px" }}
        onChange={
          (changeVal,
          (event) => {
            setInputVal(event.target.value);
          })
        }
        id="outlined-basic"
        label={label}
        variant="outlined"
        style={{ paddingTop: "3px" }}
      />
    </Box>
  );
}
