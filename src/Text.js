import { useEffect, useState } from "react";

export const Text = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []); // Pass the states in the [] which if changes, useEffect would trigger
  // You notice that components mounts then unmounts and again mounts, this is because
  // of <React.StrictMode> in index.js which checks if we're using useEffect properly or not
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <h1>{text}</h1>
    </div>
  );
};
