
import React from 'react'
import * as R from 'ramda'

const ChildComponent = (props) => {
  return (
    <div>
        <button onClick={ () => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent