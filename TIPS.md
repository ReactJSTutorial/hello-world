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

# Binding event handlers
This is done because the **this** keyword.

1. Binding in the render() method:
```
...
    clickHandler = () => {
        this.setState((prevState) => ({
            message: 'Goodbye!'
        }))
    }
...
  render() {
    return (
      <div>
          <div>{R.path(['message'], this.state)}</div>
          <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    )
  }
  ...
```

2. Use arrow functions in the render() method (is the easiest way to pass parameters):
```
...
<button onClick={ () => this.clickHandler()}>Click</button>
...
```

3. To do the event binding in the class constructor:
```
...
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }
...

  render() {
    return (
      <div>
          <div>{R.path(['message'], this.state)}</div>
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }

```

With the last approach, the binding process just happens once and not every time that the component is re-render, if
the biding is done in the render() method.

# Methods as props
It's used when a child component wants to commnuicate with the parent component. In this case, we will use **props**, but
this time, we will pass **a reference to a method as props** to the child component.

**ParentComponent**
We pass to the child component a parent method reference as  a props:
```
class ParentComponent extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent = () => {
        alert(R.concat('Hello ', R.path(['parentName'], this.state)))
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
```

**ChildComponent**
From the props in the child component, we can execute the parent methods passed as reference to it:
```
const ChildComponent = (props) => {
  return (
    <div>
        <button onClick={R.path(['greetHandler'], props)}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
```

## Pass a parameter and calling the parent method from the child component
For this, we will use arrow function, because is the easiest way to pass parameters from the child component to the parent component.
**ChildComponent**
```
const ChildComponent = (props) => {
  return (
    <div>
        <button onClick={ () => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}
```

**ParentComponent**
```
...
greetParent = (childName) => {
        alert(R.concat('Hello ', R.concat(R.path(['parentName'], this.state), ' from ' + childName)) )
    }
...
```