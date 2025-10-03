import React, { type ComponentProps } from "react";

type ButtonType = ComponentProps<"button"> & {
  text: string;
};
const Button = ({ text, ...props }: ButtonType) => {
  return <button {...props}>{text}</button>;
};

export default Button;
