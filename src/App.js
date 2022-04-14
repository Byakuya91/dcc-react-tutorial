import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries";
import AddEntryForm from "./Components/AddEntry/AddEntryForm";

function App() {
  const [entires, setEntries] = useState([{ weight: 175, date: "11-23-2022" }]);

  function addNewEntry(entry) {
    let tempEntries = [...entires, entry];
    setEntries(tempEntries);
  }
  return (
    <div>
      <DisplayEntries parentEntries={entires} />
      <AddEntryForm addEntryProperty={addNewEntry} />
    </div>
  );
}

export default App;
