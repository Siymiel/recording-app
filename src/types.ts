export enum ButtonLabels {
    Stop = "Stop",
    Record = "Record",
    Review = "Review",
  }
  
export interface MediaActionState {
    activeButton: ButtonLabels | null;
    isPlaying: boolean;
    finalAnswer: boolean;
    progress: number;
    timeRemaining: number;
    textAreaValue: string;
  }
  