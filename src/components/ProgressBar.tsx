import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { ProgressBarProps } from './types';

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, timeRemaining }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      <Box width="100%" maxWidth="600px">
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              borderRadius: 5,
              backgroundColor: '#3f51b5',
            },
          }}
        />
      </Box>
      <Typography variant="body2" color="textSecondary" mt={1}>
        {timeRemaining}
      </Typography>
    </Box>
  );
};

export default ProgressBar;
