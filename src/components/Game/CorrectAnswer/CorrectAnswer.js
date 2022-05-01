import React from "react";

import styles from "./CorrectAnswer.module.css";

import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const CorrectAnswer = () => {
  return (
    <div className={styles.correctAnswer}>
      <div className={styles.message}>
        <DoneOutlineIcon sx={{ fill: "#66bb6a", fontSize: "4em" }} />

        <h1>Correct Answer</h1>
      </div>
    </div>
  );
};

export default CorrectAnswer;
