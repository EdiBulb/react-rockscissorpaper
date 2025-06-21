import React, { useState } from "react";

const MultiGame = ({ gameInfo, onResetGame }) => {
  const { player1, player2, rounds } = gameInfo;

  const [currentTurn, setCurrentTurn] = useState(1);
  const [p1Choice, setP1Choice] = useState(null);
  const [p2Choice, setP2Choice] = useState(null);

  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);

  const [currentRound, setCurrentRound] = useState(1);
  const [result, setResult] = useState("");
  const [isRoundDone, setIsRoundDone] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleChoice = (choice) => {
    if (isRoundDone || isGameOver) return;

    if (currentTurn === 1) {
      setP1Choice(choice);
      setCurrentTurn(2);
    } else {
      setP2Choice(choice);
      const roundResult = judgement(p1Choice, choice);
      setResult(roundResult);
      setIsRoundDone(true);

      // 점수 업데이트
      if (roundResult === "win") {
        setP1Score(p1Score + 1);
      } else if (roundResult === "lose") {
        setP2Score(p2Score + 1);
      }

      // 다음 라운드 예약
      setTimeout(() => {
        const nextRound = currentRound + 1;
        setCurrentRound(nextRound);
        setP1Choice(null);
        setP2Choice(null);
        setCurrentTurn(1);
        setIsRoundDone(false);
        setResult("");

        // 게임 종료 조건
        if (nextRound > rounds) {
          setIsGameOver(true);
        }
      }, 2000); // 결과 보여준 후 2초 쉬고 다음 라운드
    }
  };

  const judgement = (p1, p2) => {
    if (p1 === p2) return "tie";
    if (p1 === "rock") return p2 === "scissor" ? "win" : "lose";
    if (p1 === "scissor") return p2 === "paper" ? "win" : "lose";
    if (p1 === "paper") return p2 === "rock" ? "win" : "lose";
  };

  return (
    <div>
      <h2>🎮 {rounds}세판 가위바위보</h2>
      <p>라운드: {currentRound} / {rounds}</p>
      <p>{player1.name} {player1.avatar} vs {player2.name} {player2.avatar}</p>
      <p>점수: {p1Score} : {p2Score}</p>

      {!isGameOver && !isRoundDone && (
        <div>
          <h3>
            {currentTurn === 1 ? `${player1.name} 차례!` : `${player2.name} 차례!`}
          </h3>
          <button onClick={() => handleChoice("rock")}>✊ Rock</button>
          <button onClick={() => handleChoice("paper")}>✋ Paper</button>
          <button onClick={() => handleChoice("scissor")}>✌️ Scissor</button>
        </div>
      )}

      {isRoundDone && (
        <div>
          <h3>이번 라운드 결과: {result === "win" ? `${player1.name} 승!` : result === "lose" ? `${player2.name} 승!` : "무승부!"}</h3>
          <p>{player1.name}: {p1Choice} / {player2.name}: {p2Choice}</p>
        </div>
      )}

      {isGameOver && (
  <div>
    <h2>🏁 게임 종료!</h2>
    <h3>
      {p1Score > p2Score
        ? `${player1.name} 승리! 🎉`
        : p1Score < p2Score
        ? `${player2.name} 승리! 🎉`
        : "무승부입니다!"}
    </h3>

    <button onClick={onResetGame}>다시 시작하기</button>
  </div>
)}

    </div>
  );
};

export default MultiGame;
