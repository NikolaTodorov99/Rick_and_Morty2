import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const handleUsername = (e) => {
    
    setUsername(e.target.value);
    setSubmitted(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      setError(true);
    } else {
      setError(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <Navigate to="/episodes"/>;
  }

 /*useEffect(() => {
    localStorage.setItem('Username', JSON.stringify(username))
  }, [username]);*/
  
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter Username</h1>
      </div>
    );
  };
  return (
    <div className="form container d-flex justify-content-center "><div>
      <div className="d-flex flex-column gap-3" >
        <h1 className="text-center ">User Registration</h1>
      </div>
      <form>
        <label className="label me-2">Username:</label>
        <input
          onChange={handleUsername}
          className="input"
          value={username}
          type="text"
        />
        <button onClick={handleSubmit} className="btn btn-primary ms-2" type="submit">
          Submit
        </button>
      </form>
      <div className="messages text-danger">{errorMessage()}</div>
      </div>
    </div>
  );
}

export default Login;
