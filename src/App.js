import Greet from 'components/greet/Greet';
import Welcome from 'components/welcome/Welcome';
import './App.css';
import Message from 'components/message/Message';
import Counter from 'components/counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/> 
      <Message />*/}
    </div>
  );
}

export default App;
