import { Typography, styled } from '@mui/material';

export const StyledTypography = styled(Typography)<{ isactive?: boolean; hovercolor?: string }>(({ isactive, hovercolor }) => ({
  marginTop: '8px',
  marginBottom: '0',
  color: isactive ? `${hovercolor}` : 'inherit',
  fontWeight: isactive ? 'semi-bold' : 'normal',
}));
