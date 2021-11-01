import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./single-member.module.css";
import { FAMILY } from "../../family";

export const SingleMember = (props) => {
  const [member, setMember] = useState({});
  const [betterHalf, setBetterHalf] = useState({});

  const SingleMemberElement = (member) => (
    <Link to={`/member/${member.uid}`}>
      <div
        className={`d-flex column align-center r-g-1 relative p-1 h-100 ${
          styles["single-member"]
        } ${styles[member["status"]]}`}
      >
        <img
          src="https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/utkarsh.png"
          alt="single-member"
          className={styles[member["sex"]]}
        />
        <h4>{member["name"]}</h4>
      </div>
    </Link>
  );

  useEffect(() => {
    setMember(FAMILY.find((mem) => mem.uid === props.uid));
  }, [props.uid]);

  useEffect(() => {
    if ("marriedTo" in member) {
      setBetterHalf(FAMILY.find((mem) => mem.uid === member.marriedTo));
    }
  }, [member]);

  if ("marriedTo" in member && !props.single) {
    return (
      <div
        className={`d-flex column md-row align-center g-1 relative p-1 ${styles["double-member"]}`}
      >
        {SingleMemberElement(member)}
        <hr />
        {SingleMemberElement(betterHalf)}
      </div>
    );
  } else {
    return SingleMemberElement(member);
  }
};

SingleMember.propTypes = {
  uid: PropTypes.string.isRequired,
  single: PropTypes.bool,
};
