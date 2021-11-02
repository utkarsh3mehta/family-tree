import React from "react";
import { Login } from "../../templates/login";
import styles from './auth.module.css';

export const Auth = (props) => {
  return (
    <div className={`d-flex column center align-center r-g-1 vh-100 ${styles.container}`}>
      <h1 className="text-center">Welcome to Mehta Family tree website</h1>
      <Login />
    </div>
  );
};
