import { useState, useEffect } from "react";

import styles from "./Main.module.css";

import Start from "../Start/Start";

import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import IconButton from "@mui/material/IconButton";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import GitHubIcon from "@mui/icons-material/GitHub";

import axios from "axios";

import { useDispatch } from "react-redux";

import { setQuestions } from "../../redux/questionsSlice";

import Brightness7Icon from "@mui/icons-material/Brightness7";

import Brightness3Icon from "@mui/icons-material/Brightness3";

const Main = ({ setTheme, theme }) => {
  const dispatch = useDispatch();

  const [start, setStart] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const [easyData, setEasyData] = useState([]);
  const [mediumData, setMediumData] = useState([]);
  const [hardData, setHardData] = useState([]);

  useEffect(() => {
    const fetchEasy = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=3&difficulty=easy&type=multiple&encode=base64"
        );
        await setEasyData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchMedium = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=7&difficulty=medium&type=multiple&encode=base64"
        );
        await setMediumData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchHard = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple&encode=base64"
        );
        await setHardData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchData = async () => {
      await fetchHard();
      await fetchMedium();
      await fetchEasy();
      await setLoading(false);
    };

    fetchData();
  }, []);

  dispatch(setQuestions([...easyData, ...mediumData, ...hardData]));

  return (
    <section className={styles.main}>
      {start ? (
        <Start />
      ) : (
        <>
          <div className={styles.theme}>
            <IconButton
              color="primary"
              aria-label="Switch Theme"
              size="large"
              onClick={() => setTheme(!theme)}
            >
              {theme ? <Brightness3Icon /> : <Brightness7Icon />}
            </IconButton>
          </div>

          <div className={styles.startGame}>
            <h3 className={styles.welcome}>Welcome To CanYouKnow !</h3>
            <p className={styles.info}>
              If you are ready, just click the button below...
            </p>
            {isLoading ? (
              <h2>Please wait...</h2>
            ) : (
              <Button
                variant="contained"
                onClick={() => setStart(true)}
                endIcon={<KeyboardArrowRightIcon />}
                sx={{ margin: "15px" }}
              >
                Let's Start
              </Button>
            )}

            <div className={styles.developer}>
              <p className={styles.developerDetails}>
                Developed by{" "}
                <span className={styles.boldText}>
                  <a href="https://www.linkedin.com/in/muhammederdal/">
                    Muhammed ERDAL
                  </a>
                </span>
              </p>

              <div className={styles.social}>
                <a
                  href="https://www.linkedin.com/in/muhammederdal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton aria-label="linkedin">
                    <LinkedInIcon color="primary" fontSize="large" />
                  </IconButton>
                </a>
                <a
                  href="https://github.com/coderdal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton aria-label="github">
                    <GitHubIcon color="secondary" fontSize="large" />
                  </IconButton>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Main;
