import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return React.cloneElement(children, {
    className: "tooltip",
    onMouseEnter: () => setShowTooltip(true),
    onMouseLeave: () => setShowTooltip(false),
    children: (
      <>
        {children.props.children}
        {showTooltip && <div>{text}</div>}
      </>
    )
  });
};

export default Tooltip;
