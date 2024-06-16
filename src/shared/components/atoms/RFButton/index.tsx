// "use client";

import { Button } from "@mui/material";

interface ButtonProps {
  text: string;
  styles?: { [key: string]: any };
  buttonType?: "primary" | "tertiary" | "secondary" | "error" | "disabled";
  startIcon?: any;
  endIcon?: any;
  iconMarginX?: string;
  isWidthFull?: boolean;
  type?: "submit" | "reset" | "button" | null;
  onClick?: () => void;
  dataAttr?: any;
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | string;
    size?:'small'
| 'medium'
| 'large'| string;
}

const RFButton = ({
  text,
  buttonType = "primary",
  styles,
  endIcon = null,
  startIcon = null,
  iconMarginX = "12px",
  isWidthFull,
  type = null,
  onClick,
  dataAttr = null,
  disabled,
  variant = "contained",
  color,
  size,
}: ButtonProps) => {
  return (
    <Button
      {...dataAttr}
      variant={variant}
      // disableElevation
      fullWidth={isWidthFull}
      sx={{
        ...styles,
      }}
      startIcon={startIcon}
      endIcon={endIcon}
      buttontype={buttonType}
      iconmarginx={iconMarginX}
      type={type}
      onClick={onClick}
      disabled={disabled}
      color={color}
      size={size}
    >
      {text}
    </Button>
  );
};

export default RFButton;
