import React, { useState } from "react";

const MultiGame = ({ gameInfo }) => {
  const { player1, player2, rounds } = gameInfo;

  return (
    <div>
      <h2>2인용 가위바위보 게임</h2>
      <p>{rounds}세판 대결</p>
      <p>🐱 {player1.name} vs {player2.name} 🐶</p>

      {/* 나중에 여기에 게임 진행 UI 들어감 */}
    </div>
  );
};

export default MultiGame;
