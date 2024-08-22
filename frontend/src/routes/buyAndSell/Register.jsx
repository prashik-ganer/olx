import React, { useContext, useState } from "react";

import { UserContext } from "../../context/UserContext";
import ErrorMessage from "./ErrorMessage";

const Register = () => {


  const [user_name, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [hall_id, setHallid] = useState("");
  const [contact_no, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);

  const submitRegistration = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_name: user_name,email: email, hall_id: hall_id,contact_no: contact_no,password: password}),
    };

    const response = await fetch("http://127.0.0.1:8000/sign_up", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length > 5) {
      submitRegistration();
    } else {
      setErrorMessage(
        "Ensure that the passwords is greater than 5 characters"
      );
    }
  };

  return (
    <div className="column">
      <form className="box" onSubmit={handleSubmit}>
        <h1 className="title has-text-centered">Register</h1>
        
        
        <div className="field">
          <label className="label">User Name</label>
          <div className="control">
            <input
              type="text"
              placeholder="Enter User Name"
              value={user_name}
              onChange={(e) => setuserName(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Enter hall id</label>
          <div className="control">
            <input
              type="number"
              placeholder="Enter hall Id"
              value={hall_id}
              onChange={(e) => setHallid(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Contact Number</label>
          <div className="control">
            <input
              type="number"
              placeholder="Enter Contact no."
              value={contact_no}
              onChange={(e) => setContactNo(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Enter Password</label>
          <div className="control">
            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>


        <ErrorMessage message={errorMessage} />
        <br />
        <button className="button is-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;