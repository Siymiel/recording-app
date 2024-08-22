import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { MediProgressBarProps } from "./types";
import { ButtonLabels } from "../../types";
import ProgressBar from "../ProgressBar";

const MediaProgressBar: React.FC<MediProgressBarProps> = ({
  activeButton,
  isPlaying,
  onCompletion,
}) => {
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(20);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startProgress = () => {
    const totalDuration = 20 * 1000;
    const intervalDuration = 100;
    const startTime = Date.now();

    intervalRef.current = setInterval(() => {
      const currentTime = Date.now();
      const mediaElapsedTime = currentTime - startTime;
      const newProgress = (mediaElapsedTime / totalDuration) * 100;
      const remainingTime = Math.max(
        0,
        (totalDuration - mediaElapsedTime) / 1000
      );

      setProgress(newProgress);
      setTimeRemaining(remainingTime);

      if (mediaElapsedTime >= totalDuration) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        onCompletion();

        if (activeButton === ButtonLabels.Record) {
          toast.success("Time's up! Recording complete.");
        } else if (activeButton === ButtonLabels.Review) {
          toast.success("Time's up! Review complete.");
        }
      }
    }, intervalDuration);
  };

  useEffect(() => {
    if (isPlaying && activeButton) {
      startProgress();
    } else {
      resetProgress();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, activeButton]);

  const resetProgress = () => {
    setProgress(0);
    setTimeRemaining(20);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <ProgressBar
      progress={progress}
      timeRemaining={formatTime(timeRemaining)}
    />
  );
};

const formatTime = (seconds: number): string => {
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

export default MediaProgressBar;
