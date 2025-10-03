import React, { type ComponentProps } from "react";
import Button from "./Button";
type FooterType = ComponentProps<"div"> & {
  title: string;
  getData: (value: string) => void;
};
const Footer = ({ title, getData }: FooterType) => {
  return (
    <>
      <div>
        {title}
        <br />
        <Button
          text="pass data to root component"
          onClick={() => getData("Hello mn")}
        />
      </div>
      ;
    </>
  );
};

export default Footer;
