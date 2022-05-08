import React from 'react';
import * as R from 'ramda';

const Greet = (props) => {
    return (
        <div>
            <h1>Hello {R.path(['name'], props)} a.k.a {R.path(['heroName'], props)}</h1>
            {R.path(['children'], props)}
        </div>
    );
}

export default Greet;