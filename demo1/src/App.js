import logo from './logo.svg';
import './App.css';
import Greet from './comonents/Greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Greet name="Bruce" heroName="Batman" add="usa">
           <p>This is cildren props</p>
           <button>CLICK</button>
         </Greet>
         <Greet name="Clark" heroName="Superman" add="usa"/>
         <Greet name="Diana" heroName="Wonderwoman" add="usa"/>
      </header>
    </div>
  );
}

export default App;
