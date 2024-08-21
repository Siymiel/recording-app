import React from 'react';
import { Button, Grid } from '@mui/material';

import { SubmitButtonProps } from './types';

const SubmitButton: React.FC<SubmitButtonProps> = ({ isEnabled, onClick }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" mt={2}>
      <Grid item>
        <Button
          variant="contained"
          color="info"
          disabled={!isEnabled}
          onClick={onClick}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default SubmitButton;
