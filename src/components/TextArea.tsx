import React from "react";
import { TextField } from "@mui/material";

import { TextAreaProps } from "./types";

const TextArea: React.FC<TextAreaProps> = ({ value, onChange }) => {
  return (
    <TextField
      id="textarea"
      label="Your Response"
      variant="outlined"
      fullWidth
      multiline
      rows={4}
      value={value}
      onChange={onChange}
      placeholder="Please enter your response here."
      style={{ marginTop: "20px" }}
    />
  );
};

export default TextArea;
