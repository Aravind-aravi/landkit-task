import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="table">
      <h2>List of Users</h2>
      <div style={{ overflowX: "auto" }}>
        <table id="customers">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((d) => {
              return (
                <tr key={d.id}>
                  <td>{d.name}</td>
                  <td>{d.username}</td>
                  <td>{d.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
