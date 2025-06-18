import { useState } from 'react'
import '../styles/SingleMode.css'
import Box from '../component/Box'
import StartScreen from './StartScreen'

//1. 박스 2개(타이틀, 사진정보, 결과)
//2. 가위바위보 버튼
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜텀으로 아이템 선택
//5. 3번 4번의 결과를 가지고 누가 이겼는지 승패 따짐
//6. 이기면 초록색 지면 초록색 비기면 검은색 테두리

// 가위바위보 객체 생성
const choice = {
  rock:{
    name:"Rock",
    img:"/images/rock.png"
  },
  scissor:{
    name:"Scissor",
    img:"/images/scissor.png"
  },
  paper:{
    name:"Paper",
    img:"/images/paper.png"
  }
}

function SingleMode() {

  // 게임 모드 상태: null / "single" / "multi"
  const [mode, setMode] =useState(null) 


  const [userSelect, setUserSelect] = useState(null) // useSelect 가 바뀔 때마다 UI를 바꿔줄 것이다.
  const [computerSelect, setComputerSelect] = useState("") // 컴퓨터 값이 바뀔 때마다 UI를 바꿔준다.
  const [result, setResult] = useState("")

  // 점수판 만들기
  const [userScore, setUserScore] = useState(0)
  const [comScore, setComScore] = useState(0)

  {mode === null && (
    <StartScreen setMode={setMode}/>
  )}
  {mode === "single" && (
    <SingleMode/>
  )}

  {mode === "multi" && (
    <MultiModeSetup/>
  )}

  // 게임 시작 함수
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]) // 유저가 클릭한 버튼으로 state를 변경

    let computerChoice = randomChoice()
    setComputerSelect(computerChoice) // 컴퓨터의 state를 변경

    //승패를 확인해주는 함수
    let resultForScore = judgement(choice[userChoice], computerChoice)
    setResult(resultForScore)

    if (resultForScore === "win"){
      setUserScore(userScore+1)
    } else if(resultForScore === "lose"){
      setComScore(comScore+1)
    }
  }


  const judgement=(user, computer)=>{

    //로직
    //무승부인 경우
    if(user.name == computer.name) return "tie"
    //삼항연산식
    else if(user.name == "Rock") return computer.name == "Scissor" ? "win": "lose"
    else if(user.name == "Scissor") return computer.name == "Paper" ? "win": "lose"
    else if(user.name == "Paper") return computer.name == "Rock" ? "win": "lose"
    
  }

  // 컴퓨터 값을 랜덤으로 변경
  const randomChoice=()=>{
    let itemArray = Object.keys(choice) // 객체의 키값만 뽑아서 어레이로 만들어주는 함수

    let randomItem = Math.floor(Math.random()*itemArray.length)
    let final = itemArray[randomItem]
    return choice[final]
  }

  return (
    // 반드시 하나를 리턴해줘야한다.

    
    <div>
      <div className='score-board'>
        <div className='score-row'>
          <div className='cell'>YOU</div>
          <div className='cell'>COM</div>
        </div>
        <div className='score-row'>
          <div className='cell'>{userScore}</div>
          <div className='cell'>{comScore}</div>
        </div>
      </div>

      <div className='main'>
      
      
      <Box title = 'You' item={userSelect} result={result}/>
      <Box title = 'Computer' item ={computerSelect} result = {result}/>
    </div>
    <div className='main'>
      {/* 콜백함수를 이용해야함, 안그러면 리액트가 play 함수를 실행시켜버림 */}
      <button onClick={()=>play("scissor")}>Scissor</button>
      <button onClick={()=>play("rock")}>Rock</button>
      <button onClick={()=>play("paper")}>Paper</button>

    </div>
    </div>
    
  )
}

export default SingleMode
