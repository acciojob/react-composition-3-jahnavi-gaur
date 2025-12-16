
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h2>React Tooltip Demo</h2>


      <Tooltip text="This is a tooltip for text">
        <span>Hover over this text</span>
      </Tooltip>


      <br /><br />


      <Tooltip text="Tooltip for a button">
        <button>Hover over button</button>
      </Tooltip>


      <br /><br />


      <Tooltip text="Another tooltip example">
        <strong>Hover over bold text</strong>
      </Tooltip>
    </div>
  );
};

export default App
