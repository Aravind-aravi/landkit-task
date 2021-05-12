import React from "react";

function User(props) {
  const { name, email, phone, address } = props.data;

  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="title">{email}</p>
      <p>{phone}</p>
      <div style={{ margin: "24px 0" }}>{address}</div>
    </div>
  );
}

export default User;
