import React, { useEffect, useState } from "react";
import AddCandidates from "../AddCandidstes/AddCandidates";
import AddUsers from "../AddUsers/AddUsers";
const FetchDataUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

  const onAdd = async (name, email, number) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        number: number
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id, name, email, number) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        email: email,
        number: number
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        // setUsers((users) => [...users, data]);
        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            user.name = name;
            user.email = email;
            user.number = number;
          }

          return user;
        });

        setUsers((users) => updatedUsers);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status === 200) {
          setUsers(
              users.filter((user) => {
                return user.id !== id;
              })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mx-32 py-10">
      <AddUsers onAdd={onAdd} />
      {users.map((user) => (
        <AddCandidates
          id={user.id}
          key={user.id}
          name={user.name}
          email={user.email}
          number={user.number}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
      }
export default FetchDataUsers;
