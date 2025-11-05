import { useContext, Context } from "react";
import { ThemeContext } from "./ThemeConvert";
const Paragraph = () => {
  const themeContext = useContext(ThemeContext as Context<{ theme: string }>);
  return (
    <div>
      <div className={themeContext.theme}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel cumque
        iure nulla harum consequuntur assumenda alias aliquid. Magnam libero
        assumenda, rem accusantium at explicabo ducimus soluta quidem nam.
        Mollitia, assumenda!
      </div>
    </div>
  );
};

export default Paragraph;
