import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styles from "./login.module.css";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const onChange = (e) => {
    if (e.target.name === "username") setUsername(e.target.value);
    else setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "mehta" && password === "mehta") setIsValid(true);
    else setError(true);
  };

  return isValid ? (
    <Redirect to="/" exact />
  ) : (
    <form
      method="post"
      onSubmit={onSubmit}
      className={`d-flex column align-center r-g-1 col-12 px-2 ${styles.form}`}
    >
      <input
        value={username}
        name="username"
        placeholder="Username"
        type="text"
        onChange={onChange}
        required
        autoComplete="current-username"
      />
      <input
        value={password}
        name="password"
        placeholder="Password"
        type="password"
        onChange={onChange}
        required
        autoComplete="current-password"
      />
      <input className="p-1" type="submit" value="Login" />
      {error && (
        <span className={`${styles.error}`}>Invalid username or password</span>
      )}
    </form>
  );
};
