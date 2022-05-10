import React, { Component } from 'react'
import * as R from 'ramda'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler = () => {
        this.setState((prevState) => ({
            message: 'Goodbye!'
        }))
    }

  render() {
    return (
      <div>
          <div>{R.path(['message'], this.state)}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
          {/* <button onClick={ () => this.clickHandler()}>Click</button> */}
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind