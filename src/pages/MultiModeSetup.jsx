import React, {useState} from 'react'

const MultiModeSetup = ({onStartGame}) => {
    const [player1Name, setPlayer1Name] = useState("")
    const [player2Name, setPlayer2Name] = useState("")
    const [rounds, setRounds] = useState(1)
    const [player1Avatar, setPlayer1Avatar] = useState("🐱")
    const [player2Avatar, setPlayer2Avatar] = useState("🐶");

    const handleStart = () => {
        if (!player1Name || !player2Name) {
            alert("두 플레이어 이름을 모두 입력해주세요.")
            return
        }

        onStartGame({
            player1: {name: player1Name, avatar: player1Avatar},
            player2: {name: player2Name, avatar: player2Avatar},
            rounds: rounds,
        })
    }
  return (
    <div>
        <h2>2인용 게임 설정</h2>
        {/* 닉네임 입력 */}
        <div>
            <label>Player 1 name:</label>
            <input value={player1Name} onChange={(e) => setPlayer1Name(e.target.value)} />
        </div>
        <div>
            <label>Player 2 name:</label>
            <input value={player2Name} onChange={(e) => setPlayer2Name(e.target.value)} />
        </div>

        {/* 캐릭터 선택 */}
        <div>
        <label>플레이어 1 캐릭터:</label>
        <select value={player1Avatar} onChange={(e) => setPlayer1Avatar(e.target.value)}>
          <option>🐱</option>
          <option>🐵</option>
          <option>🐰</option>
        </select>
      </div>
      <div>
        <label>플레이어 2 캐릭터:</label>
        <select value={player2Avatar} onChange={(e) => setPlayer2Avatar(e.target.value)}>
          <option>🐶</option>
          <option>🐯</option>
          <option>🐼</option>
        </select>
      </div>

      {/* 라운드 수 선택 */}
      <div>
        <label>몇 세판으로 할까요?</label>
        <select value={rounds} onChange={(e) => setRounds(parseInt(e.target.value))}>
          <option value={1}>1세판</option>
          <option value={3}>3세판</option>
          <option value={5}>5세판</option>
        </select>
      </div>

      <button onClick={handleStart}>게임 시작!</button>
    </div>
  )
}

export default MultiModeSetup
