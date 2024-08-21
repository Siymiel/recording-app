import { Button as MuiButton, styled } from "@mui/material";

export const StyledButton = styled(MuiButton)<{
  isactive?: boolean;
  bordercolor?: string;
}>(({ isactive, bordercolor }) => ({
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: isactive ? `0.15em solid ${bordercolor || "gray"}` : "none",
  backgroundColor: "inherit",
  color: "white",
  padding: "0",
  "&:hover": {
    backgroundColor: bordercolor || "gray",
    borderColor: bordercolor || "gray",
    color: "white",
  },
}));
