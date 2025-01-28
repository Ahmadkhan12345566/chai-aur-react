import React, { useContext } from "react";
import UserContext from "../context/Usercontext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!user) return <h1>Please Login</h1>;

  return <div>Welcome : {user.username}</div>;
}

export default Profile;
