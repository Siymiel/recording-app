import React from 'react';
import { Grid } from '@mui/material';

import { SubmitButtonProps } from './types';
import { StyledSubmitButton } from './StyledSubmitButton';

const SubmitButton: React.FC<SubmitButtonProps> = ({ isEnabled, onClick }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" mt={5}>
      <Grid item>
        <StyledSubmitButton
          variant="contained"
          color="info"
          disabled={!isEnabled}
          onClick={onClick}
        >
          Submit
        </StyledSubmitButton>
      </Grid>
    </Grid>
  );
};

export default SubmitButton;
