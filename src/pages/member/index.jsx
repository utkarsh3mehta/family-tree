import React, { useState, useEffect } from "react";
import { FindChildren, FindFamily } from "../../family";
import { Navbar } from "../../atoms/navbar";
import { SingleMember } from "../../molecules/single-member";
import styles from "./member.module.css";

export const Member = (props) => {
  const [member, setMember] = useState({});

  useEffect(() => {
    setMember(FindFamily(props.match.params.memuid));
  }, [props.match.params.memuid]);

  return (
    <div className="d-flex column start align-center relative">
      <Navbar member={member} memuid={props.match.params.memuid} />
      <h2 className={`self-align-end col-8 col-md-4 text-right m-half ${styles.name}`}>
        {"name" in member ? member["name"] : "loading..."}
      </h2>
      <h1 className="mt-half">Children</h1>
      <div className="d-flex column center md-row wrap col-8 margin-center r-g-1 c-g-2 py-1">
        {FindChildren(props.match.params.memuid).map((child) => {
          return (
            <SingleMember key={child["uid"]} uid={child["uid"]} single={true} />
          );
        })}
      </div>
    </div>
  );
};
