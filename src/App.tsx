import React, { useState, useRef, ChangeEvent } from "react";
import {
  Button,
  TextArea,
  SubmitButton,
  ProgressBar,
  RadioGroupComponent,
} from "./components";

import { Grid, Typography, Box } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircleIcon from "@mui/icons-material/Circle";
import { toast } from "react-hot-toast";

import recordingImage from "./assets/recording-image.jpg";
import "./App.css";

const App: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [finalAnswer, setFinalAnswer] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(20);
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetMediaState = () => {
    setProgress(0);
    setTimeRemaining(20);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleStop = () => {
    if (isPlaying) {
      (document.getElementById("textarea") as HTMLTextAreaElement).focus();
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    resetMediaState();
    setActiveButton(null);
  };

  const handleButtonClick = (label: string) => {
    if (label === "Stop") {
      handleStop();
    } else {
      resetMediaState();
      setActiveButton(label);
      setIsPlaying(true);
      mockMediaAction();
    }
  };

  const mockMediaAction = () => {
    const totalDuration = 20 * 1000;
    const intervalDuration = 100;

    const startTime = Date.now();

    const progressStartTime = startTime;

    const progressInterval = setInterval(() => {
      const currentTime = Date.now();
      const mediaElapsedTime = currentTime - progressStartTime;
      const newProgress = (mediaElapsedTime / totalDuration) * 100;
      const remainingTime = Math.max(
        0,
        (totalDuration - mediaElapsedTime) / 1000
      );

      setProgress(newProgress);
      setTimeRemaining(remainingTime);

      if (mediaElapsedTime >= totalDuration) {
        clearInterval(progressInterval);
        resetMediaState();
        setIsPlaying(false);
        setActiveButton(null);
      }
    }, intervalDuration);

    intervalRef.current = progressInterval;
  };

  const handleRadioChange = (
    _event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setFinalAnswer(value === "true");
  };

  const handleSubmit = () => {
    console.log(textAreaValue);
    toast.success("Answer submitted!");

    setTextAreaValue("");
    setFinalAnswer(false);
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const millisec = Math.floor((seconds - Math.floor(seconds)) * 100);

    if (hrs > 0) {
      return `${hrs}:${mins < 10 ? "0" : ""}${mins}:${
        secs < 10 ? "0" : ""
      }${secs}:${millisec < 10 ? "0" : ""}${millisec}`;
    } else {
      return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}:${
        millisec < 10 ? "0" : ""
      }${millisec}`;
    }
  };

  return (
    <div className="container">
      <Typography variant="h4" align="center" gutterBottom>
        SAY THE VOCABULARY WORDS
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <img
          src={recordingImage}
          alt="Person recording audio for vocabulary practice"
          style={{ maxWidth: "100%", height: "350px" }}
        />
      </Box>

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
            label="Stop"
            color="#C62828"
            bordercolor="#FA8072"
            isactive={activeButton === "Stop"}
            variant="contained"
            symbol={<StopIcon sx={{ fontSize: 30, color: "inherit" }} />}
            onClick={() => handleButtonClick("Stop")}
            aria-label="Stop recording"
          />
        </Grid>
        <Grid item>
          <Button
            label="Record"
            color="#009688"
            bordercolor="#20B2AA"
            symbol={<CircleIcon sx={{ fontSize: 25, color: "inherit" }} />}
            isactive={activeButton === "Record"}
            variant="contained"
            onClick={() => handleButtonClick("Record")}
            aria-label="Start recording"
          />
        </Grid>
        <Grid item>
          <Button
            label="Review your recording"
            color="#7B1FA2"
            bordercolor="#DDA0DD"
            symbol={<PlayArrowIcon sx={{ fontSize: 30, color: "inherit" }} />}
            isactive={activeButton === "Review"}
            variant="contained"
            onClick={() => handleButtonClick("Review")}
            aria-label="Review your recording"
          />
        </Grid>
      </Grid>

      <ProgressBar
        progress={progress}
        timeRemaining={formatTime(timeRemaining)}
      />
      <TextArea
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
      />
      <RadioGroupComponent
        selectedValue={finalAnswer ? "true" : "false"}
        onChange={handleRadioChange}
      />
      <SubmitButton isEnabled={finalAnswer} onClick={handleSubmit} />
    </div>
  );
};

export default App;
