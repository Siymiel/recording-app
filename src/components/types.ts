import { ChangeEvent } from "react";

export interface ButtonProps {
    label: string;
    color: string;
    isActive: boolean;
    symbol: React.ReactNode;
    onClick: () => void;
    variant: "contained";
    borderColor: string;
  }

  export interface ProgressBarProps {
    progress: number;
    timeRemaining: string;
  }

  export interface RadioGroupProps {
    selectedValue: string;
    onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  }

  export interface SubmitButtonProps {
    isEnabled: boolean;
    onClick: () => void;
  }

  export interface TextAreaProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  }