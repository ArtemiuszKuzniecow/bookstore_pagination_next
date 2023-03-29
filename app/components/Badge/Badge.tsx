import * as React from "react";
import style from "./Badge.module.css";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  color: "red" | "blue";
};

const Badge = ({ children, color }: Props) => {
  return (
    <div className={color === "red" ? style.red_badge : style.blue_badge}>
      {children}
    </div>
  );
};

export default Badge;
