import { ChangeEvent } from "react";

  export interface ProgressBarProps {
    progress: number;
    timeRemaining: string;
  }

  export interface RadioGroupProps {
    selectedValue: string;
    onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  }


  export interface TextAreaProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  }