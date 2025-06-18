import { useState } from 'react'
import './App.css'
import StartScreen from './pages/StartScreen'
import SingleMode from "./pages/SingleMode"; // 새로 만든 파일 import

import MultiModeSetup from './pages/MultiModeSetup';


function App() {

  const [mode, setMode] = useState(null);
  const [multiGameInfo, setMultiGameInfo] = useState(null);

  return (
    <div className="App">
      {mode === null && <StartScreen setMode={setMode} />}
      {mode === "single" && <SingleMode />}
      {mode === "multi" && !multiGameInfo && (
        <MultiModeSetup onStartGame={(info) => setMultiGameInfo(info)} />
      )}

      {mode === "multi" && multiGameInfo && (
        <h2>이제 여기서 게임 시작! (multiGameInfo: {JSON.stringify(multiGameInfo)})</h2>
      )}
    </div>
  );
}

export default App
