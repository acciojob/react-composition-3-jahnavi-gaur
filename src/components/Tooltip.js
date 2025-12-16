import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  const showTooltip = () => setShow(true);
  const hideTooltip = () => setShow(false);

  return React.cloneElement(children, {
    className: "tooltip",
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
    children: (
      <>
        {children.props.children}
        {show && (
          <div
            className="tooltiptext"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
          >
            {text}
          </div>
        )}
      </>
    )
  });
};

export default Tooltip;
