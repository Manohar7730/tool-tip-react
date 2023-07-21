import React, { useState } from "react";

const Tooltip = ({ text, position, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`tooltip-container tooltip-${position}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <div className={`tooltip-text`}>{text}</div>}
    </div>
  );
};

export default Tooltip;
