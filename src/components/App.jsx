// import React from "react";
// import './../styles/App.css';
// import Tooltip from "./Tooltip";

// const App = () => {
//   return (
//     <div style={{ padding: "40px" }}>
//       <Tooltip text="This is a tooltip">
//         <h2>Hover over me</h2>
//       </Tooltip>

//       <hr />

//       <Tooltip text="This is another tooltip">
//         <p>Hover over me to see another tooltip</p>
//       </Tooltip>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import Tooltip from './Tooltip';
import './../styles/App.css';

function App() {
  return (
    <div style={{ padding: '50px' }}>
      
      <h2>
        <Tooltip text="This is a tooltip">
          Hover over me
        </Tooltip>
      </h2>
      

      <p>
        <Tooltip text="This is another tooltip">
          Hover over me to see another tooltip
        </Tooltip>.
      </p>
    </div>
  );
}

export default App;