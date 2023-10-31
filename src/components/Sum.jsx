import React from 'react'

const Sum = (props) => {

    const OneHandler = ()=>{
        const num = 1
        props.onClickHandler(num)
    }
    const TwoHandler = ()=>{
        const num = 5
        props.onClickHandler(num)
    }
    const TenHandler = ()=>{
        const num = 10
        props.onClickHandler(num)
    }



  return (
    <div>
      <button onClick={OneHandler}>one</button>
      <button onClick={TwoHandler}>five</button>
      <button onClick={TenHandler} >ten</button>
    </div>
  )
}

export default Sum
