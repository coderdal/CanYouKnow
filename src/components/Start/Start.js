import React, { useEffect, useState } from "react";
import Game from "../Game/Game";

import styles from "./Start.module.css";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import PendingIcon from "@mui/icons-material/Pending";

import CodeIcon from "@mui/icons-material/Code";

import Button from "@mui/material/Button";

const StartGame = () => {
  const [countDown, setCountDown] = useState(10);

  const [displayGame, setDisplayGame] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setCountDown((prevstate) =>
        prevstate > 0
          ? prevstate - 1
          : 0 & setDisplayGame(true) & clearInterval(timer)
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [setDisplayGame, countDown, displayGame]);

  return displayGame ? (
    <Game />
  ) : (
    <section className={styles.countDown}>
      <h2 className={styles.count}>{countDown}</h2>

      <div className={styles.rules}>
        <Button variant="text" onClick={() => setDisplayGame(true)}>
          Skip Time
        </Button>
        <ListItem>
          <ListItemIcon>
            <PendingIcon color="info" fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="The competition consists of 15 questions." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PendingIcon color="info" fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="You have 30 seconds to answer the questions." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PendingIcon color="info" fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="The questions will come in easy-medium-hard levels." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CodeIcon color="info" fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Muhammed Erdal wishes you success..." />
        </ListItem>
      </div>
    </section>
  );
};

export default StartGame;
