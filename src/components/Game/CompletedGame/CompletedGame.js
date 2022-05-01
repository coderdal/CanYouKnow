import React from "react";

import styles from "./CompletedGame.module.css";

import DoneAllIcon from "@mui/icons-material/DoneAll";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import GitHubIcon from "@mui/icons-material/GitHub";

const CorrectAnswer = () => {
  return (
    <div className={styles.completedGame}>
      <div className={styles.message}>
        <DoneAllIcon sx={{ fill: "#66bb6a", fontSize: "8em" }} />

        <h1>Game Completed</h1>

        <p>You got all the questions right!</p>

        <p>You are the chosen one! Congratulations.</p>

        <p>
          If you like us, you can follow us on LinkedIn and Github via buttons
          below.
        </p>

        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/muhammederdal/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon color="primary" sx={{ fontSize: "3em" }} />
          </a>
          <a
            href="https://github.com/coderdal"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon color="secondary" sx={{ fontSize: "3em" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CorrectAnswer;
