import propTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { FindMember } from "../../family";
import styles from "./info-modal.module.css";

const Backdrop = (props) => {
  return (
    <div onClick={props.close} className={`absolute ${styles.backdrop}`}></div>
  );
};

export const InfoModal = (props) => {
  const [mem, setMem] = useState(null);

  useEffect(() => {
    setMem(FindMember(props.memId));
  }, [props.memId]);

  return (
    <div
      className={`d-flex center align-center fixed ${styles.container} ${
        props.show && styles.show
      }`}
    >
      <Backdrop {...props} />
      <div className={`relative p-2 ${styles.modal}`}>
        <span
          className={`absolute pointer ${styles.closeIcon}`}
          onClick={props.close}
        >
          &times;
        </span>
        <img src={mem?.photo} alt={mem?.name} width="200px" height="auto" />
        {!!mem &&
          Object.keys(mem)
            .filter(
              (key) => !["id", "childOf", "marriedTo", "photo"].includes(key)
            )
            .map((key, index) => (
              <div key={index} className={`mt-1 ${styles.infoText}`}>
                <span className={`capitalize ${styles.key}`}>{key}</span>
                <hr />
                <span className={styles.value}>{mem[key]}</span>
              </div>
            ))}
      </div>
    </div>
  );
};

InfoModal.propTypes = {
  memId: propTypes.string.isRequired,
  show: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
};
