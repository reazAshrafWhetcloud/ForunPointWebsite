import * as React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";

const TextAreaSize = ({ fnGetInput }) => {
  const [inputVal, setInputVal] = useState("");
  fnGetInput(inputVal);
  return (
    <TextareaAutosize
      onChange={(event) => setInputVal(event.target.value)}
      aria-label="minimum height"
      minRows={3}
      placeholder="Description"
      style={{
        width: "100%",
        fontSize: "12px",
        paddingTop: "8px",
        paddingLeft: "15px",
      }}
    />
  );
};

export default TextAreaSize;
