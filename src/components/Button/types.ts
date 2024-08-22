export interface ButtonProps {
    label: string;
    color: string;
    isactive: string;
    symbol: React.ReactNode;
    onClick: () => void;
    variant: "contained";
    bordercolor: string;
  }