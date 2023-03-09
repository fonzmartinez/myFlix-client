import React from "react";


export const UserInfo = ({ user }) => {

  return (
    <div>
      <h2>User Info</h2>
      <p>User: {user.Username}</p>
      <p>Email: {user.Email}</p>
    </div>
  );
};

