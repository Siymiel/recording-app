import React, { useState, useRef, ChangeEvent } from "react";
import {
  TextArea,
  SubmitButton,
  RadioGroupComponent,
  MediaControlButtons, 
  MediaProgressBar
} from "./components";

import { Typography } from "@mui/material";
import { toast } from "react-hot-toast";

import { MediaActionState, ButtonLabels } from "./types";

import "./App.css";


const initialState: MediaActionState = {
  activeButton: null,
  isPlaying: false,
  finalAnswer: false,
  progress: 0,
  timeRemaining: 20,
  textAreaValue: "",
};

const App: React.FC = () => {
  const [state, setState] = useState<MediaActionState>(initialState);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetMediaState = (): void => {
    setState((prevState) => ({
      ...prevState,
      progress: 0,
      timeRemaining: 20,
    }));

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleStop = (): void => {
    if (state.isPlaying) {
      (document.getElementById("textarea") as HTMLTextAreaElement).focus();
      setState((prevState) => ({
        ...prevState,
        isPlaying: false,
      }));

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    resetMediaState();
    setState((prevState) => ({
      ...prevState,
      activeButton: null,
    }));

    if (state.isPlaying === true) {
      toast("Recording/Review stopped.", { icon: '⚠️' });
    }
  };

  const handleButtonClick = (label: ButtonLabels): void => {
    if (label === ButtonLabels.Stop) {
      handleStop();
    } else {
      resetMediaState();
      setState((prevState) => ({
        ...prevState,
        activeButton: label,
        isPlaying: true,
      }));
      mockMediaAction(label);

      if (label === ButtonLabels.Record) {
        toast("Recording started!", { icon: "🎙️" });
      } else if (label === ButtonLabels.Review) {
        toast("Review started!", { icon: "🎧" });
      }
    }
  };

  const mockMediaAction = (label: ButtonLabels): void => {
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

      setState((prevState) => ({
        ...prevState,
        progress: newProgress,
        timeRemaining: remainingTime,
      }));

      if (mediaElapsedTime >= totalDuration) {
        clearInterval(progressInterval);
        resetMediaState();
        setState((prevState) => ({
          ...prevState,
          isPlaying: false,
          activeButton: null,
        }));

        if (label === ButtonLabels.Record) {
          toast.success("Time's up! Recording complete.");
        } else if (label === ButtonLabels.Review) {
          toast.success("Time's up! Review complete.");
        }
      }
    }, intervalDuration);

    intervalRef.current = progressInterval;
  };

  const handleProgressCompletion = (): void => {
    setState((prevState) => ({
      ...prevState,
      isPlaying: false,
      activeButton: null,
    }));
  };

  const handleRadioChange = (
    _event: ChangeEvent<HTMLInputElement>,
    value: string
  ): void => {
    if (value === "true" && !state.textAreaValue.trim()) {
      (document.getElementById("textarea") as HTMLTextAreaElement).focus();
      toast.error("Please enter a response to proceed!");
    } else {
      setState((prevState) => ({
        ...prevState,
        finalAnswer: value === "true",
      }));
    }
  };

  const handleSubmit = (): void => {
    toast.success("Answer submitted!");

    setState((prevState) => ({
      ...prevState,
      textAreaValue: "",
      finalAnswer: false,
    }));
  };

  return (
    <div className="container">
      <Typography
        align="center"
        gutterBottom
        sx={{
          fontSize: {
            xs: "1.50rem",
            sm: "0.65rem",
            md: "0.85rem",
            lg: "1.0rem",
            xl: "1.5rem",
          },
        }}
      >
        SAY THE VOCABULARY WORDS
      </Typography>

      <MediaControlButtons
        activeButton={state.activeButton}
        onButtonClick={handleButtonClick}
      />

      <MediaProgressBar
       activeButton={state.activeButton}
       isPlaying={state.isPlaying}
       onCompletion={handleProgressCompletion}
      />

      <TextArea
        value={state.textAreaValue}
        onChange={(e) =>
          setState((prevState) => ({
            ...prevState,
            textAreaValue: e.target.value,
          }))
        }
      />
      <RadioGroupComponent
        selectedValue={state.finalAnswer ? "true" : "false"}
        onChange={handleRadioChange}
      />
      <SubmitButton isEnabled={state.finalAnswer} onClick={handleSubmit} />
    </div>
  );
};

export default App;
