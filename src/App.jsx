import { useState } from "react";
import Tooltip from "./Tooltip";

function App() {
  const [position, setPosition] = useState("bottom");

  const handleTopButtonClick = () => {
    setPosition("top");
  };
  const handleRightButtonClick = () => {
    setPosition("right");
  };
  const handleLeftButtonClick = () => {
    setPosition("left");
  };
  const handleBottomButtonClick = () => {
    setPosition("bottom");
  };
  return (
    <>
      <div className="main">
        <h1>Tooltip Test Project</h1>
        <Tooltip position={position} text="Thanks for Hovering! I'm a tooltip">
          <button>Hover on me</button>
        </Tooltip>
      </div>

      <div className="position-buttons">
        <button onClick={handleTopButtonClick}>Top</button>
        <button onClick={handleRightButtonClick}>Right</button>
        <button onClick={handleBottomButtonClick}>Bottom</button>
        <button onClick={handleLeftButtonClick}>Left</button>
      </div>
    </>
  );
}

export default App;
