import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries";
import AddEntryForm from "./Components/AddEntry/AddEntryForm";

function App() {
  const [entires, setEntries] = useState([{ weight: 175, date: "11-23-2022" }]);
  return (
    <div>
      <DisplayEntries parentEntries={entires} />
      <AddEntryForm />
    </div>
  );
}

export default App;
