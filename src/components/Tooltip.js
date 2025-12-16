import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return React.cloneElement(children, {
    className: "tooltip",
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    children: (
      <>
        {children.props.children}
        <div
          className="tooltiptext"
          style={{ display: show ? "block" : "none" }}
        >
          {text}
        </div>
      </>
    )
  });
};

export default Tooltip;
