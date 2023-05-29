import "./App.css";
import { useState } from "react";
import { Text } from "./Text";

function App() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Show/hide Text</button>
      {showText && <Text />}
    </div>
  );
}

export default App;
