import React, { Component } from 'react';
import * as R from 'ramda';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {R.path(['name'], this.props)} a.k.a {R.path(['heroName'], this.props)}</h1>
      </div>
    )
  }
}
