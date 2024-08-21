import React, { useState, useRef, ChangeEvent } from "react";
import {
  Button,
  TextArea,
  SubmitButton,
  ProgressBar,
  RadioGroupComponent,
} from "./components";

import { Grid, Typography } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircleIcon from "@mui/icons-material/Circle";

import { toast } from "react-hot-toast";
import "./App.css";

const App: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [finalAnswer, setFinalAnswer] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(5);
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [mediaStartTime, setMediaStartTime] = useState<number | null>(null);
  const [lastStoppedTime, setLastStoppedTime] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleStop = () => {
    if (isPlaying) {
      (document.getElementById("textarea") as HTMLTextAreaElement).focus();
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setLastStoppedTime(Date.now() - (mediaStartTime || 0));
      setProgress(0);
      setTimeRemaining(5);
    }
    setActiveButton(null);
  };

  const handleButtonClick = (label: string) => {
    if (label === "Stop") {
      handleStop();
    } else {
      if (!isPlaying) {
        setActiveButton(label);
        setIsPlaying(true);
        mockMediaAction();
      }
    }
  };

  const mockMediaAction = () => {
    const totalDuration = 5 * 1000;
    const intervalDuration = 100;

    const startTime = Date.now() - lastStoppedTime;
    setMediaStartTime(startTime);

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
        setProgress(0);
        setTimeRemaining(5);
        setIsPlaying(false);
        setActiveButton(null);
        setLastStoppedTime(0);
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
        Say The Vocabulary Words.
      </Typography>

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        style={{ marginTop: "20px" }}
      >
        <Button
          label="Stop"
          color="#C62828"
          bordercolor="#FA8072"
          isactive={activeButton === "Stop"}
          variant="contained"
          symbol={<StopIcon sx={{ fontSize: 30, color: "inherit" }} />}
          onClick={() => handleButtonClick("Stop")}
        />
        <Button
          label="Record"
          color="#009688"
          bordercolor="#20B2AA"
          symbol={<CircleIcon sx={{ fontSize: 25, color: "inherit" }} />}
          isactive={activeButton === "Record"}
          variant="contained"
          onClick={() => handleButtonClick("Record")}
        />
        <Button
          label="Review your recording"
          color="#7B1FA2"
          bordercolor="#DDA0DD"
          symbol={<PlayArrowIcon sx={{ fontSize: 30, color: "inherit" }} />}
          isactive={activeButton === "Review"}
          variant="contained"
          onClick={() => handleButtonClick("Review")}
        />
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
