export interface ButtonProps {
    label: string;
    color: string;
    isactive: boolean;
    symbol: React.ReactNode;
    onClick: () => void;
    variant: "contained";
    bordercolor: string;
  }