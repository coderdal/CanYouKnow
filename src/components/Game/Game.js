import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import styles from "./Game.module.css";

import Button from "@mui/material/Button";

import Countdown from "react-countdown";

import GameOver from "./GameOver/GameOver";

import CorrectAnswer from "./CorrectAnswer/CorrectAnswer";

import CompletedGame from "./CompletedGame/CompletedGame";

import successSound from "../../sounds/success.mp3";

import failSound from "../../sounds/fail.mp3";

import ReactAudioPlayer from "react-audio-player";

function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const Game = () => {
  const questions = useSelector((state) => state.questions.value);

  const [questionCount, setQuestionCount] = useState(0);

  const [answers, setAnswers] = useState([]);

  const [finishGame, setFinishGame] = useState(false);

  const [correctAnswer, setCorrectAnswer] = useState(false);

  const [completedGame, setcompletedGame] = useState(false);

  useEffect(() => {
    setAnswers(
      shuffleArray([
        questions[questionCount].correct_answer,
        questions[questionCount]["incorrect_answers"][0],
        questions[questionCount]["incorrect_answers"][1],
        questions[questionCount]["incorrect_answers"][2],
      ])
    );
  }, [questionCount, questions]);

  const gameOver = () => {
    setFinishGame(true);
  };

  function decodeBase64(base64String) {
    if (base64String) {
      return atob(base64String);
    } else {
      return "Undefined";
    }
  }

  function encodeBase64(base64String) {
    if (base64String) {
      return btoa(base64String);
    } else {
      return "Undefined";
    }
  }

  const fifteen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const catchMark = async (e) => {
    if (
      encodeBase64(e.target.textContent) ===
      questions[questionCount]["correct_answer"]
    ) {
      await setCorrectAnswer(true);

      if (questionCount === 14) {
        setcompletedGame(true);
      } else {
        await setQuestionCount((prevstate) => prevstate + 1);
      }

      await delay(1000);
      setCorrectAnswer(false);
    } else {
      await delay(200);
      await setFinishGame(true);
    }
  };

  return (
    <section className={styles.game}>
      <div className={styles.hidden}>
        {correctAnswer && (
          <ReactAudioPlayer src={successSound} volume={0.1} autoPlay />
        )}
        {finishGame & !completedGame && (
          <ReactAudioPlayer src={failSound} volume={0.1} autoPlay />
        )}
      </div>
      <div className={styles.questionCount}>
        {fifteen.map((question, index) => {
          return (
            <div
              key={index}
              className={`${styles.count} ${
                index + 1 === questionCount + 1 && styles.current
              } ${index + 1 < questionCount + 1 && styles.true} ${
                completedGame && styles.true
              }`}
            >
              {index + 1}
            </div>
          );
        })}
      </div>

      {completedGame && <CompletedGame />}

      {finishGame && <GameOver />}

      {correctAnswer && <CorrectAnswer />}

      <div className={styles.question}>
        <h2 className={styles.qcount}>
          <Countdown date={Date.now() + 30000} onComplete={() => gameOver()} />
        </h2>
        <h3 className={styles.levelText}>
          Level:{" "}
          <span className={styles.level}>
            {decodeBase64(questions[questionCount].difficulty)}
          </span>
        </h3>

        <div className={styles.questionBox}>
          <p className={styles.questionText}>
            {decodeBase64(questions[questionCount].question)}
          </p>
        </div>

        <div className={styles.answers}>
          <Button
            onClick={(e) => catchMark(e)}
            variant="contained"
            sx={{
              clipPath:
                "polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
              padding: "10px 30px",
              background: "#0755ad",
            }}
            disabled={finishGame && true}
          >
            {decodeBase64(answers[3])}
          </Button>
          <Button
            onClick={(e) => catchMark(e)}
            variant="contained"
            sx={{
              clipPath:
                "polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
              padding: "10px 30px",
              background: "#0755ad",
            }}
            disabled={finishGame && true}
          >
            {decodeBase64(answers[0])}
          </Button>
          <Button
            onClick={(e) => catchMark(e)}
            variant="contained"
            sx={{
              clipPath:
                "polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
              padding: "10px 30px",
              background: "#0755ad",
            }}
            disabled={finishGame && true}
          >
            {decodeBase64(answers[2])}
          </Button>
          <Button
            onClick={(e) => catchMark(e)}
            variant="contained"
            sx={{
              clipPath:
                "polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
              padding: "10px 30px",
              background: "#0755ad",
            }}
            disabled={finishGame && true}
          >
            {decodeBase64(answers[1])}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Game;
