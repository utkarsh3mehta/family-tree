import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import { Link } from "react-router-dom";
import { ROOT_UID, FindMember, FindParents } from "../../family";
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
        className={`d-flex column space-between col-8 col-md-4 col-lg-2 vh-100 fixed ${
          styles.container
        } ${show && styles.show}`}
      >
        <div className="d-flex column r-g-1">
          <span
            className={`pointer self-align-end ${styles.close}`}
            onClick={onToggle}
          >
            &times;
          </span>
          {props.memid !== ROOT_UID
            ? "childOf" in props.member &&
              FindParents(props.member["id"]).map((par) => (
                <Link key={par["id"]} to={`/member/${par["id"]}`}>
                  <div className={`${styles.item} d-flex column`}>
                    <p>Parent:</p>
                    <p>{par["name"]}</p>
                  </div>
                </Link>
              ))
            : null}
          {props.memid !== ROOT_UID
            ? "marriedTo" in props.member && (
                <Link to={`/member/${props.member.marriedTo}`}>
                  <div className={`${styles.item} d-flex column`}>
                    <p>Better half:</p>
                    <p>{FindMember(props.member.marriedTo)["name"]}</p>
                  </div>
                </Link>
              )
            : null}
        </div>
        <Link to="/">
          <div className={`${styles.item}`}>Home</div>
        </Link>
      </div>
      <span className={`pointer absolute ${styles.open}`} onClick={onToggle}>
        &hellip;
      </span>
    </div>
  );
};

Navbar.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    sex: PropTypes.string,
    status: PropTypes.string,
    DOB: PropTypes.string,
    DOD: PropTypes.string,
    marriedTo: PropTypes.string,
    childOf: PropTypes.arrayOf(string),
    nickname: PropTypes.string,
  }),
  memid: PropTypes.string.isRequired,
};
