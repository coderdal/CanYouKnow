import React from "react";

import styles from "./GameOver.module.css";

import Button from "@mui/material/Button";

import CloudOffIcon from "@mui/icons-material/CloudOff";

const GameOver = () => {
  return (
    <div className={styles.gameOver}>
      <div className={styles.message}>
        <CloudOffIcon color="secondary" sx={{ fontSize: "4em" }} />
        <h1>Game Over</h1>
        <p>Nice try...</p>
        <Button variant="outlined" onClick={() => window.location.reload()}>
          Play Again
        </Button>
      </div>
    </div>
  );
};

export default GameOver;
