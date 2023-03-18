import React from "react";

import { useSelector } from "react-redux";


export const UserInfo = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h2>User Info</h2>
      <p>User: {user.Username}</p>
      <p>Email: {user.Email}</p>
    </div>
  );
};
