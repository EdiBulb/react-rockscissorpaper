import React from 'react'

const Box = (props) => {

  // 결과값 저장
  let result

  // 컴퓨터거나 무승부거나 값이 있는 경우, 컴퓨터에 값을 준다.
  if(props.title === "Computer" && props.result !== "tie" && props.result !== ""){
    result = props.result === "win" ? "lose" : "win"
  }
  // 그게 아닌 경우 유저에 값을 준다.
  else{
    result = props.result
  }

  return (
    // result 값에 따라서 
    <div className={`box ${result}`}>
      
      {/* title은 가드값이 필요없음, 직접적으로 You 값을 줘서, but, item은 useSelect로 가져오기 때문에 초기값이 null로 설정되어있어서 가드값이 필요한 것 */}
      <h1 className='main'>{props.title}</h1>
      <h2 className='main'>{props.item && props.item.name}</h2>
      {/* 에러 방지로 가드값을 쓴다: props.item이다. props.item 이 없으면 false니까 저절로 안되고, 있으면 img 가 있으니까,  */}
      <img className='item-img' src={props.item && props.item.img}/> 
      <h2 className='main'>{result}</h2>
    </div>
  )
}

export default Box
