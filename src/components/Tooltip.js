import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  const Child = children.type;

  return (
    <Child
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children.props.children}
      {show && <div className="tooltiptext">{text}</div>}
    </Child>
  );
};

export default Tooltip;
