import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const fetchAge = () => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then((res) => res.json()) // json() function converts json to javascript object
      .then((data) => {
        setAge(data); // always check the structure of the object before storing its values
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Ex. Aditya.."
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchAge}>Predict Age</button>
      <h1>Name : {age?.name}</h1>
      <h1>Age : {age?.age}</h1>
      {/* age?.name says that if age object is not null then access name */}
    </div>
  );
}

export default App;
