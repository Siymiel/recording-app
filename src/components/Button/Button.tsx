import React from 'react';
import { Box } from '@mui/material';

import { ButtonProps } from './types';

import { StyledButton } from './StyledButton';
import { StyledTypography } from './StyledTypography';

const Button: React.FC<ButtonProps> = ({ label, symbol, color, isactive, onClick, bordercolor }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      padding="16px"
      sx={{
        '&:hover .MuiButton-root': {
          backgroundColor: bordercolor || 'gray',
          borderColor: bordercolor || 'gray',
          color: 'white',
        },
        '&:hover .MuiTypography-root': {
          color: bordercolor || 'gray',
        }
      }}
    >
      <StyledButton
        onClick={onClick}
        isactive={isactive}
        variant="contained"
        sx={{ backgroundColor: color }}
        bordercolor={bordercolor}
      >
        {symbol}
      </StyledButton>
      <StyledTypography
        isactive={isactive}
        hovercolor={bordercolor}
      >
        {label}
      </StyledTypography>
    </Box>
  );
};

export default Button;
