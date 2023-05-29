import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json()) // json() function converts json to javascript object
      .then((data) => {
        setCatFact(data.fact);
      });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
