
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{ padding: "40px" }}>
      <Tooltip text="This is a tooltip">
        <h2 class="tooltip">
          Hover over me
          <div class="tooltiptext">This is a tooltip</div>
        </h2>
      </Tooltip>

      <hr />

      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App
