import clsx from "clsx";
import React from "react";

import { IBase } from "@/types";

import useStyles from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps & IBase> = ({
  type,
  children,
  testId,
  className,
  label,
  wide,
  style,
  onClick,
  onMouseDown,
  onMouseUp,
}: ButtonProps & IBase) => {
  const classes = useStyles({});

  return (
    <button
      data-testid={testId}
      type={type}
      style={style}
      className={clsx(classes.button, wide && classes.wide, className)}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {children || label}
    </button>
  );
};

export default Button;
