import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h2>
      <Tooltip text="This is a tooltip">
        <div>Hover over me</div>
      </Tooltip>
      </h2>
      <hr />

      <p>
        <Tooltip text="This is another tooltip">
        <div>Hover over me to see another tooltip</div>
      </Tooltip>
      </p>
    </div>
  );
};

export default App;
