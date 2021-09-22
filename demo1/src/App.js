import logo from './logo.svg';
import './App.css';
import Greet from './comonents/Greet';
import Welcome from './comonents/Welcome';
import Message from './comonents/Message';
import Counter from './comonents/Counter';
import EventBind from './comonents/EventBind';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* <Greet name="Bruce" heroName="Batman" add="usa">
           <p>This is cildren props</p>
           <button>CLICK</button>
         </Greet>
         <Greet name="Clark" heroName="Superman" add="usa"/>
         <Greet name="Diana" heroName="Wonderwoman" add="usa"/>
         <Welcome name="Tony Stark" heroName="Ironman"></Welcome> */}
        
        {/* <Message/> */}

        {/* <Counter/> */}

        <EventBind />
      </header>
    </div>
  );
}

export default App;
