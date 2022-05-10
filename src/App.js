import Greet from 'components/greet/Greet';
import Welcome from 'components/welcome/Welcome';
import './App.css';
import Message from 'components/message/Message';
import Counter from 'components/counter/Counter';
import FunctionClick from 'components/function-click/FunctionClick';
import ClassClick from 'components/class-click/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick/>
      <ClassClick />
      {/*<Greet name="Diana" heroName="Wonder Woman"></Greet>
      <Welcome name="Bruce" heroName="Batman"/>
       <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Welcome name="Clark" heroName="Superman"/> 
      <Message />*/}
    </div>
  );
}

export default App;
