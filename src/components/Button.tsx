import React from 'react';
import { Button as MuiButton, styled, Box, Typography } from '@mui/material';

import { ButtonProps } from './types';

const StyledButton = styled(MuiButton)<{ isActive?: boolean; borderColor?: string }>(({ isActive, borderColor }) => ({
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: isActive ? `0.15em solid ${borderColor || 'gray'}` : 'none',
  backgroundColor: 'inherit',
  color: 'white',
  padding: '0',
  '&:hover': {
    backgroundColor: borderColor || 'gray',
    borderColor: borderColor || 'gray',
    color: 'white',
  },
}));

const StyledTypography = styled(Typography)<{ isActive?: boolean; hoverColor?: string }>(({ isActive, hoverColor }) => ({
  marginTop: '8px',
  marginBottom: '0',
  color: isActive ? `${hoverColor}` : 'inherit',
  fontWeight: isActive ? 'semi-bold' : 'normal',
}));

const Button: React.FC<ButtonProps> = ({ label, symbol, color, isActive, onClick, borderColor }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      padding="16px"
      sx={{
        '&:hover .MuiButton-root': {
          backgroundColor: borderColor || 'gray',
          borderColor: borderColor || 'gray',
          color: 'white',
        },
        '&:hover .MuiTypography-root': {
          color: borderColor || 'gray',
        }
      }}
    >
      <StyledButton
        onClick={onClick}
        isActive={isActive}
        variant="contained"
        sx={{ backgroundColor: color }}
        borderColor={borderColor}
      >
        {symbol}
      </StyledButton>
      <StyledTypography
        isActive={isActive}
        hoverColor={borderColor}
      >
        {label}
      </StyledTypography>
    </Box>
  );
};

export default Button;
