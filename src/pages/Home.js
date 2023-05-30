import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>This is home page</h1>
      <h3>The username is {username}</h3>
    </div>
  );
};
