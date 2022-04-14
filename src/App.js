import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries";

function App() {
  const [entires, setEntries] = useState([{ weight: 175, date: "11-23-2022" }]);
  return (
    <div>
      <DisplayEntries parentEntries={entires} />
    </div>
  );
}

export default App;
