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
constructor(props) {
  super(props);
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

# setState
Install the **"ES7+ React/Redux/React-Native snippets"** VisualStudio Code.
**rconst** : Create the component's constructor initialized with an state object
```
...
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
```
- Always make use of **setState** and never modify the state directly.
- Code has to be executed after the state has been updated? Place that code in the callback function which is the
  second argument to the **setState** method.
- When you have to update state based on the previous state value, pass in a function as an argument instead of the
  regular object.