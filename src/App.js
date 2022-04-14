import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries";
import AddEntryForm from "./Components/AddEntry/AddEntryForm";
import EntriesChartTracker from "./Components/EntriesChartTracker/EntriesChartTracker";
import "./App.css";
function App() {
  const [entires, setEntries] = useState([{ weight: 175, date: "11-23-2022" }]);

  function addNewEntry(entry) {
    let tempEntries = [...entires, entry];
    setEntries(tempEntries);
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <h3 style={{ margin: "1em" }}>
          Weight <small className="text-muted">Tracker</small>
        </h3>
        <div className="col-md-6">
          <div className="border-box">
            <DisplayEntries parentEntries={entires} />
          </div>
          <div className="border-box">
            <AddEntryForm addEntryProperty={addNewEntry} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="border-box">
            <EntriesChartTracker parentEntries={entires} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
