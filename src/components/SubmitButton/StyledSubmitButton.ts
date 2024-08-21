import { Button as MuiButton, styled } from "@mui/material";
import { Theme } from '@mui/material/styles';

export const StyledSubmitButton = styled(MuiButton)(({ theme }: { theme: Theme }) => ({
    borderRadius: '4px',
    padding: '8px 16px',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 0 0 0.75em ${theme.palette.primary.main}50`,
    },
    '&:focus': {
      outline: `0.75em solid ${theme.palette.primary.main}50`,
      outlineOffset: '2px',
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  }));
