import React, { useState } from "react";

const Tooltip = ({ text, position, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <div className={`${position}`}>{text}</div>}
    </div>
  );
};

export default Tooltip;
