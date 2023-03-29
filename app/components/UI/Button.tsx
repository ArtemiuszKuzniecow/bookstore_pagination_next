import * as React from "react";
import style from "./Button.module.css";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  color: "default" | "danger" | "success";
  disabled?: boolean;
};

const Button = ({ children, color, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      className={[style.button, style[`button_${color}`]].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
