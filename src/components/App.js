
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{ padding: "40px" }}>
      {/* <h2>React Tooltip Demo</h2> */}


      <Tooltip text="This is a tooltip">
        <span>Hover over me</span>
      </Tooltip>


      <hr /><br />


      <Tooltip text="This is another tooltip">
        <button>Hover over me to see another tooltip</button>
      </Tooltip>
      <hr/>

    </div>
  );
};

export default App
