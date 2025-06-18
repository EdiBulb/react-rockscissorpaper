import React from "react"

// StartScreen.jsx
function StartScreen({ setMode }) {
  return (
    <div className="start-screen">
      <h1>가위 바위 보 게임 🎮</h1>
      <button onClick={() => setMode("single")}>🧠 1인용 (컴퓨터와 대결)</button>
      <button onClick={() => setMode("multi")}>👥 2인용 (친구와 대결)</button>
    </div>
  );
}

export default StartScreen