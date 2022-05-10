import React, { Component } from 'react'
import * as R from 'ramda'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState((prevState, props) => ({
            count: R.inc(R.path(['count'], prevState))
        }))
    }

    decrement = () => {
        this.setState((prevState) => ({
            count: R.dec(R.path(['count'], prevState))
        }))
    }  
   
    
  render() {
    return (
      <div>
        <p>Counter: {R.path(['count'], this.state)}</p>
        <button onClick={ () => this.increment()}>Increment</button>
        <button onClick={ () => this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default Counter