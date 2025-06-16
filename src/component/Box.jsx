import React from 'react'

const Box = (props) => {
    console.log("props: ",props)
  return (
    <div className='box'>
      {/* title은 가드값이 필요없음, 직접적으로 You 값을 줘서, but, item은 useSelect로 가져오기 때문에 초기값이 null로 설정되어있어서 가드값이 필요한 것 */}
      <h1>{props.title}</h1>
      {/* 에러 방지로 가드값을 쓴다: props.item이다. props.item 이 없으면 false니까 저절로 안되고, 있으면 img 가 있으니까,  */}
      <img className='item-img' src={props.item && props.item.img}/> 
      <p>WIN</p>
    </div>
  )
}

export default Box
