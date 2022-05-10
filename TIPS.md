# Using Ramda.js
```
npm i -S @types/ramda ramda --save 
```

# Shortcuts to create react component
```
rcc->  == class component skeleton
rsc->  == stateless component skeleton
rsf->  == stateless named function skeleton
```

# Functional vs Class components
## Functional Components
- They are simple functions.
- Use them as much as possible.
- Absence of 'this' keyword.
- Solution without using state.
- Mainly responsible for the UI.
- They are called as  Stateless/Dumb/Presentational components.

## Class Components
- More feature rich.
- Maintain their own private data => state.
- Complex UI logic.
- Provide lifecycle hooks.
- Thhey are called as Stateful/Smart/Container components.

# State

## props vs state
            props                                           state
            -----                                           -----
- props get passed to the component        - state is managed within the component
- Function parameters                      - Variables declared in the function body
- props are immutable                      - state can be changed
- props -> Functional Components           - useState Hook -> Functional Components 
  this.props -> Class Components             this.state -> Class Components

### Using state in Class Components
1. Create the state object and initialize it. Its usually done inside the class constructor:
```
...
constructor() {
  super();
  this.state = {
    message: 'Welcome visitor'
  };
}

changeMessage = () => {
    this.setState({
        message: 'Thank you for subscribing'
    });
}

render() {
    return (
        <div>
          <h1>{R.path(['message'], this.state)}</h1> 
          <button onClick={ () => this.changeMessage()}>Subscribe</button>  
        </div>
    );
}
...
```