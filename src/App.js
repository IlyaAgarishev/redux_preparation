import logo from "./logo.svg";
import { useState } from "react";
import SelectWorkingDays from "./components/SelectWorkingDays";
import TimePicker from "react-time-picker";
import "./App.scss";

function App() {
  const [value, setValue] = useState("10:00");

  const timePicker = (
    <TimePicker
      onChange={setValue}
      value={value}
      disableClock
      clearIcon={null}
      format="hh:mm a"
    />
  );

  return (
    <div className="app">
      <SelectWorkingDays />
    </div>
  );
}

export default App;
