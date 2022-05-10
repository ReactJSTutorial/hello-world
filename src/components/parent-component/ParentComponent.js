import React, { Component } from 'react'
import * as R from 'ramda'
import ChildComponent from 'components/child-component/ChildComponent'

class ParentComponent extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent = (childName) => {
        alert(R.concat('Hello ', R.concat(R.path(['parentName'], this.state), ' from ' + childName)) )
    }

    render() {
        return (
        <div>
            <ChildComponent greetHandler={this.greetParent} />
        </div>
        )
    }
}

export default ParentComponent