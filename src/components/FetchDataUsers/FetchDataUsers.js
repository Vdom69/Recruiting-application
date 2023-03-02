import React, { useEffect, useState } from "react";

import AddUsers from "../AddUsers/AddUsers";
const FetchDataUsers = () => {
  const [users] = useState([]);
  return (
    <div className="mx-32 py-10">
      <AddUsers />
      {users.map((user) => (
        <div
          id={user.id}
          key={user.id}
          name={user.name}
          email={user.email}
          number={user.number}
          country={user.country}
          city={user.city}
        />
      ))}
    </div>
  );
      }
export default FetchDataUsers;
