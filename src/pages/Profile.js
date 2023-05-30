import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>This is Profile Page</h1>
      <h3>User: {username}</h3>
      <ChangeProfile />
    </div>
  );
};
