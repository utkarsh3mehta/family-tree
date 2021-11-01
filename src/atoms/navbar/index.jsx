import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROOT_UID, FindFamily } from "../../family";
import styles from "./navbar.module.css";

export const Navbar = (props) => {
  const [show, setShow] = useState(false);

  const onToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <div
        className={`fixed col-12 vh-100 ${styles.background} ${
          show && styles.show
        }`}
      ></div>
      <div
        className={`d-flex column space-between col-8 vh-100 fixed ${
          styles.container
        } ${show && styles.show}`}
      >
        <div>
          <span className={`sticky ${styles.close}`} onClick={onToggle}>
            &times;
          </span>
          {props.memuid !== ROOT_UID ? (
            "childOf" in props.member ? (
              <Link to={`/member/${props.member.childOf}`}>
                <div className={`${styles.item} d-flex column`}>
                  <p>Parent:</p>
                  <p>{FindFamily(props.member.childOf)["name"]}</p>
                </div>
              </Link>
            ) : "marriedTo" in props.member ? (
              <Link to={`/member/${props.member.marriedTo}`}>
                <div className={`${styles.item} d-flex column`}>
                  <p>Other half:</p>
                  <p>{FindFamily(props.member.marriedTo)["name"]}</p>
                </div>
              </Link>
            ) : (
              <span>Loading...</span>
            )
          ) : null}
        </div>
        <Link to="/">
          <div className={`${styles.item}`}>Home</div>
        </Link>
      </div>
      <span className={`absolute ${styles.open}`} onClick={onToggle}>
        &hellip;
      </span>
    </div>
  );
};

Navbar.propTypes = {
  member: PropTypes.shape({
    uid: PropTypes.string,
    name: PropTypes.string,
    sex: PropTypes.string,
    status: PropTypes.string,
    DOB: PropTypes.string,
    DOD: PropTypes.string,
    marriedTo: PropTypes.string,
    childOf: PropTypes.string,
    nickname: PropTypes.string,
  }),
  memuid: PropTypes.string.isRequired,
};