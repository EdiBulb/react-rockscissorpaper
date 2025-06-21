import { useState } from 'react'
import './App.css'
import StartScreen from './pages/StartScreen'
import SingleMode from "./pages/SingleMode"; // 새로 만든 파일 import

import MultiModeSetup from './pages/MultiModeSetup';


function App() {

  const [mode, setMode] = useState(null);
  const [multiGameInfo, setMultiGameInfo] = useState(null);

  const resetGame = () => {
  setMode(null);            // 시작 화면으로 돌아가기
  setMultiGameInfo(null);   // 이전 정보 초기화
};


  return (
    <div className="App">
      {mode === null && <StartScreen setMode={setMode} />}
      {mode === "single" && <SingleMode />}
      {mode === "multi" && !multiGameInfo && (
        <MultiModeSetup onStartGame={(info) => setMultiGameInfo(info)} />
      )}

      {mode === "multi" && multiGameInfo && (
        <MultiGame gameInfo={multiGameInfo} onResetGame={resetGame} />
      )}
    </div>
  );
}

export default App
