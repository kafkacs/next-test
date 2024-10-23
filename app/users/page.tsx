import React from "react";
import NavBar from "../compoments/NavBar/NavBar";

interface User {
  id: number;
  username: string;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <>
      <NavBar />
      <div>
        <h1>Users:</h1>
        <ul className="users-card">
          {users.map((users) => (
            <li className="users-item" key={users.id}>
              <p> User Name: {users.username}</p>
              <p> Name: {users.name}</p>
              <p>E-mail: {users.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default UsersPage;
