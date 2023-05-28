import "./App.css";
import { useState } from "react";

function App() {
  // Syntax const [variable, functionToChangeVariable] = useState(initialValue);
  const [age, setAge] = useState(0);
  const [text, setText] = useState("Hi");
  const [color, setColor] = useState("black");

  const increaseAge = () => {
    setAge(age + 1);
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <div>{age}</div>
      <button onClick={increaseAge}>Increase Age</button>
      <hr />
      <input type="text" onChange={handleInput} />
      <div>{text}</div>
      <hr />
      <button
        onClick={() => {
          setColor(color == "black" ? "red" : "black");
        }}
      >
        Show/Hide
      </button>
      <h1 style={{ color: color }}>Hi this is Aditya</h1>
    </div>
  );
}

export default App;
