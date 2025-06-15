import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './component/Box'

//1. 박스 2개(타이틀, 사진정보, 결과)
//2. 가위바위보 버튼
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜텀으로 아이템 선택
//5. 3번 4번의 결과를 가지고 누가 이겼는지 승패 따짐
//6. 이기면 초록색 지면 초록색 비기면 검은색 테두리

function App() {
  const [count, setCount] = useState(0)

  return (
    // 반드시 하나를 리턴해줘야한다.
    <div>
      <div className='main'>
      <Box title = 'You'/>
      <Box title = 'Computer'/>
    </div>
    <div className='main'>
      <button>Scissor</button>
      <button>Rock</button>
      <button>Paper</button>

    </div>
    </div>
    
  )
}

export default App
