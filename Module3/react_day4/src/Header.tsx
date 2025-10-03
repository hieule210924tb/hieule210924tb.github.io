import React, { useState } from "react";
import Button from "./Button";
import Footer from "./Footer";

const Header = () => {
  const [count, setCount] = useState<{ name: string; age: number }>({
    name: "Hiếu",
    age: 18,
  });
  const handleChangeText = () => {
    setCount({ ...count, name: "Nam" });
  };
  const [dataFromChild, setDataFromChild] = useState<string>("");
  const handleGetDataFromChild = (value: string) => {
    setDataFromChild(value);
  };
  return (
    <div>
      {count.name}
      <Footer title={count.name} getData={handleGetDataFromChild} />
      <Button onClick={handleChangeText} text={"Click to change value"} />
      get data from child {dataFromChild}
    </div>
  );
};

export default Header;
