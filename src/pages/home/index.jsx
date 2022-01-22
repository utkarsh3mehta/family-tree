import React, { useState } from "react";
import { InfoModal } from "../../molecules/info-modal";
import { SingleMember } from "../../molecules/single-member";
import styles from "./home.module.css";

export const Home = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const [infoMem, setInfoMem] = useState(null);

  const onInfoOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowInfo(true);
    setInfoMem(e.target.id);
  };

  const onInfoClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowInfo(false);
    setInfoMem(null);
  };

  return (
    <div
      className={`d-flex column center align-center r-g-1 relative ${styles.container}`}
    >
      <InfoModal memId={infoMem} show={showInfo} close={onInfoClose} />
      <h1 className="text-center col-8">Welcome to the Mehta Family tree</h1>
      <SingleMember id="spm-19xx" infoOpen={onInfoOpen} />
    </div>
  );
};
