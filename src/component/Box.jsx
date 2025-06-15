import React from 'react'

const Box = (props) => {
    console.log("title: ",props)
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img className='item-img' src='https://m.media-amazon.com/images/I/51QtmdQD-sL.jpg'/>
      <p>result</p>
    </div>
  )
}

export default Box
