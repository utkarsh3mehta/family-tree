import React from "react";
import { SingleMember } from "../../molecules/single-member";
import styles from './home.module.css';

export const Home = (props) => {
  return (
    <div className={`d-flex column center align-center r-g-1 ${styles.container}`}>
      <h1 className="text-center col-8">Welcome to the Mehta Family tree</h1>
      <SingleMember id="spm-19xx" />
    </div>
  );
};
