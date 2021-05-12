import React, { useState } from "react";
import User from "./User";

function AddUser() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");

  const [UserData, setUserData] = useState("");

  const onhandleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: Name,
      email: Email,
      phone: Phone,
      address: Address,
    };
    setUserData(data);
    setName("");
    setPhone("");
    setAddress("");
    setEmail("");
  };

  return (
    <div style={{ padding: "10px", paddingLeft: "30px" }}>
      <div className="column">
        <h2>Contact</h2>

        <form onSubmit={onhandleSubmit}>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            value={Name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your Email Id.."
            value={Email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label for="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your phone number.."
            value={Phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />

          <label for="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Your address .."
            value={Address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="column">
        <User data={UserData}></User>
      </div>
    </div>
  );
}

export default AddUser;
