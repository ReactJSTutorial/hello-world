import React from 'react'

const FunctionClick = () => {
  
    const clickHandler = () => console.log('Button click')

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
