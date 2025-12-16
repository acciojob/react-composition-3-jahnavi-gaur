import React, { useState } from "react";


const Tooltip = ({ text, children }) => {
const [show, setShow] = useState(false);


return (
<div
className="tooltip"
onMouseEnter={() => setShow(true)}
onMouseLeave={() => setShow(false)}
style={{ display: "inline-block", position: "relative" }}
>
{children}
{show && (
<span className="tooltiptext">
{text}
</span>
)}
</div>
);
};


export default Tooltip;