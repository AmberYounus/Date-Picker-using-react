import "./App.css";
import { useState } from "react";
import { DatePicker } from "./DatePicker.js";

function App() {
  const [value, setValue] = useState();
  return(
  <DatePicker value={value} onChange={setValue}></DatePicker>
  )
}

export default App;
