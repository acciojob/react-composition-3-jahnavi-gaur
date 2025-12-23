import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="tooltip" 
      onMouseEnter={() => setShowTooltip(true)} 
      onMouseLeave={() => setShowTooltip(false)}
      style={{ display: 'inline-block' }}
    >
      {/* This renders the children (h2, p, button, etc.) */}
      {children}

      {/* Conditional rendering for the tooltip text */}
      {showTooltip && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;