import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { user, signInUsingGoogle, signInWithEmailPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordLogin = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailPasswordLogin = (e) => {
    e.preventDefault();
    signInWithEmailPassword(email, password);
    e.target.value = "";
  };

  return (
    <div className="mx-auto w-50 mt-5 border p-5">
      <form onSubmit={handleEmailPasswordLogin}>
        <h3>LOGIN HERE</h3>
        <div className="row mb-3 w-50 mx-auto mt-5">
          <label htmlFor="inputEmail3" className="col-form-label">
            Email
          </label>
          <div className="col-sm-12">
            <input
              onBlur={handleEmailLogin}
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3 w-50 mx-auto">
          <label htmlFor="inputPassword3" className="col-form-label">
            Password
          </label>
          <div className="col-sm-12">
            <input
              onBlur={handlePasswordLogin}
              type="password"
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-5 col-sm-12 col-lg-6"
        >
          LOGIN
        </button>
      </form>

      <button
        onClick={signInUsingGoogle}
        className="btn btn-success m-2 col-sm-12 col-lg-3"
      >
        <i class="fab fa-google me-2 fs-6"></i>Google
      </button>
      <Link to="/register">
        <button className="btn btn-success col-sm-12 col-lg-3">
          <i class="fas fa-user-circle me-2 fs-6"></i>New User
        </button>
        <br />
      </Link>
    </div>
  );
};

export default Login;
