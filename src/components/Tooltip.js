import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return React.cloneElement(
    children,
    {
      className: "tooltip",
      onMouseOver: () => setShow(true),
      onMouseOut: () => setShow(false),
    },
    [
      children.props.children,
      show ? <div className="tooltiptext">{text}</div> : null
    ]
  );
};

export default Tooltip;
