import React from 'react';
import * as R from 'ramda';

const Greet = (props) => {

    const {name, heroName, children} = props

    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
        </div>
    );
}

export default Greet;