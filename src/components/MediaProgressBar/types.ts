import { ButtonLabels } from "../MediaControlButtons";

export interface MediProgressBarProps {
    activeButton: ButtonLabels | null;
    isPlaying: boolean;
    onCompletion: () => void;
  }

export { ButtonLabels };
