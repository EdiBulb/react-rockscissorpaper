import React from "react";
import "../styles/PlayerCard.css";

const PlayerCard = ({ name, avatar, score, choice, isTurn }) => {
  return (
    <div className={`player-card ${isTurn ? "active" : ""}`}>
      <h3>{avatar} {name}</h3>
      <p>점수: {score}</p>
      <p>선택: {choice ? emojiMap[choice] : "❓"}</p>
    </div>
  );
};

const emojiMap = {
  rock: "✊",
  paper: "✋",
  scissor: "✌️",
};

export default PlayerCard;
