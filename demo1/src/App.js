import logo from './logo.svg';
import './App.css';
import Greet from './comonents/Greet';
import Welcome from './comonents/Welcome';
import Message from './comonents/Message';
import Counter from './comonents/Counter';
import EventBind from './comonents/EventBind';
import ParentComponent from './comonents/ParentComponent';
import UserGreeting from './comonents/UserGreeting';
import NameList from './comonents/NameList';
import Stylesheet from './comonents/Stylesheet';
import Inline from './comonents/Inline';
import Form from './comonents/Form'

import './comonents/appStyles.css';
import styles from './comonents/appStyles.module.css';
import  PureComp  from './comonents/PureComp';
import ParentComp from './comonents/ParentComp';
import RefsDemo from './comonents/RefsDemo';
import Hero from './comonents/Hero';
import ErrorBoundary from './comonents/ErrorBoundary';
import PortalDemo from './comonents/PortalDemo';
import ClickCounter from './comonents/ClickCounter';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <PortalDemo/> */}
        <ClickCounter/>

        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
       
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}

        {/* <RefsDemo/> */}

       {/* <ParentComp/> */}

        {/* <Form></Form> */}

        {/* <h1 className='error'>ERROR</h1>
        <h1 class={styles.success}>SUCCESS</h1>

        <Inline/> */}
        {/* <Stylesheet primary={true}/> */}
         {/* <Greet name="Bruce" heroName="Batman" add="usa">
           <p>This is cildren props</p>
           <button>CLICK</button>
         </Greet>
         <Greet name="Clark" heroName="Superman" add="usa"/>
         <Greet name="Diana" heroName="Wonderwoman" add="usa"/>
         <Welcome name="Tony Stark" heroName="Ironman"></Welcome> */}
        
        {/* <Message/> */}

        {/* <Counter/> */}

        {/* <EventBind /> */}

        {/* <ParentComponent/> */}

        {/* <UserGreeting/> */}

        {/* <NameList /> */}

      </header>
    </div>
  );
}

export default App;
