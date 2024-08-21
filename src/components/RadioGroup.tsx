import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  Box
} from "@mui/material";

import { RadioGroupProps } from "./types";

const RadioGroupComponent: React.FC<RadioGroupProps> = ({
  selectedValue,
  onChange,
}) => {
  return (
    <FormControl component="fieldset" style={{ marginTop: '20px', width: '300px' }}>
      <FormLabel component="legend">Is this your final answer?</FormLabel>
      <Box display="flex" justifyContent="center">
        <RadioGroup
          row
          aria-label="final-answer"
          name="final-answer-group"
          value={selectedValue}
          onChange={onChange}
        >
          <FormControlLabel value="true" control={<Radio />} label="True" />
          <FormControlLabel value="false" control={<Radio />} label="False" />
        </RadioGroup>
      </Box>
    </FormControl>
  );
};

export default RadioGroupComponent;
