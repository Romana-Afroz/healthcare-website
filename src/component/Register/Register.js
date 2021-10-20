import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Register = () => {
  const { registerWithEmailPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailRegister = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordRegister = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
    }
    registerWithEmailPassword(email, password);
  };
  return (
    <div className="w-50 mx-auto mt-5 border p-5 rounded">
      <form onSubmit={handleRegistration}>
        <h3>REGISTER HERE</h3>
        <div className="row mb-3 w-50 mx-auto mt-5">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmailRegister}
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3 w-50 mx-auto">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePasswordRegister}
              type="password"
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>
        {password.length < 6 && <div className="mb-2 text-danger">{error}</div>}

        {password.length >= 6 && (
          <div className="mb-2">
            <span>Successfully registered!</span>
          </div>
        )}
        <button type="submit" className="btn btn-primary mt-5">
          REGISTER
        </button>
      </form>
      <div className="text-center">
        Already have an account?{" "}
        <NavLink as={Link} to="/login">
          Login here
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
