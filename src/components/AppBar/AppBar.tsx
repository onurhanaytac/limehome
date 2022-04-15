import clsx from "clsx";
import React from "react";

import { BurgerIcon, Logo } from "@/components/Icons";
import { IBase } from "@/types";

import useStyles from "./AppBar.styles";
import { AppBarProps } from "./AppBar.types";

const AppBar: React.FC<AppBarProps & IBase> = ({
  testId,
  style,
  className,
  children,
}: AppBarProps & IBase) => {
  const classes = useStyles();

  return (
    <>
      <div
        data-testid={testId}
        style={style}
        className={clsx(classes.root, className)}
      >
        <Logo />
        {children}
        <div style={{ flex: 1 }}></div>
        <BurgerIcon />
      </div>
    </>
  );
};

export default AppBar;
