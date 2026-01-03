import React from "react";
import { useState } from "react";
const Practice = () => {
  const [users, setUsers] = useState([
    {
      id: crypto.randomUUID(),
      name: "Tuhin Reza",
      address: "kushtia",
    },
  ]);
  function changeUser(id, name) {
    const userCopy = [...users];
    const found = userCopy.find((user) => user.id === id);
    found.name = name;
    setUsers(userCopy);
  }
  function newUser() {
    const newUser = {
      id: crypto.randomUUID(),
      name: "Jakson",
      address: "Rajshshi",
    };
    setUsers([...users, newUser]);
    console.log(users);
  }
  return (
    <div className="flex flex-col">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              {user.name} lives in {user.address}
            </p>
            <button
              className="underline cursor-pointer"
              onClick={() => changeUser(user.id, "Random")}
            >
              Change Name
            </button>
          </li>
        ))}
      </ul>
      <button className="underline cursor-pointer" onClick={newUser}>
        new user
      </button>
    </div>
  );
};

export default Practice;
