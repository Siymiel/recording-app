export enum ButtonLabels {
    Stop = "Stop",
    Record = "Record",
    Review = "Review",
}

export interface MediaControlButtonsProps {
    activeButton: ButtonLabels | null;
    onButtonClick: (label: ButtonLabels) => void;
  }