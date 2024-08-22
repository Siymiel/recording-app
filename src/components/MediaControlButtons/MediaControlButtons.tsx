import React from "react";
import { Grid } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircleIcon from "@mui/icons-material/Circle";
import { ButtonLabels, MediaControlButtonsProps } from "./types";
import { Button } from "../Button";

const MediaControlButtons: React.FC<MediaControlButtonsProps> = ({
  activeButton,
  onButtonClick,
}) => {
  return (
    <Grid
      container
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ marginTop: "20px" }}
    >
      <Grid item>
        <Button
          label={ButtonLabels.Stop}
          color="#C62828"
          bordercolor="#FA8072"
          isactive={activeButton === ButtonLabels.Stop}
          variant="contained"
          symbol={<StopIcon sx={{ fontSize: 30, color: "inherit" }} />}
          onClick={() => onButtonClick(ButtonLabels.Stop)}
          aria-label="Stop recording"
          data-testid="Stop"
        />
      </Grid>
      <Grid item>
        <Button
          label={ButtonLabels.Record}
          color="#009688"
          bordercolor="#20B2AA"
          symbol={<CircleIcon sx={{ fontSize: 25, color: "inherit" }} />}
          isactive={activeButton === ButtonLabels.Record}
          variant="contained"
          onClick={() => onButtonClick(ButtonLabels.Record)}
          aria-label="Start recording"
        />
      </Grid>
      <Grid item>
        <Button
          label={ButtonLabels.Review}
          color="#7B1FA2"
          bordercolor="#DDA0DD"
          symbol={<PlayArrowIcon sx={{ fontSize: 30, color: "inherit" }} />}
          isactive={activeButton === ButtonLabels.Review}
          variant="contained"
          onClick={() => onButtonClick(ButtonLabels.Review)}
          aria-label="Review your recording"
        />
      </Grid>
    </Grid>
  );
};

export default MediaControlButtons;
