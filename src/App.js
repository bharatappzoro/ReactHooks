import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter,setcounter] = useState(0) // return you and an length array 2
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {counter}
        </p>
        <button
         onClick={incrisecounter}
        >
          incriment
        </button>       
      </header>
    </div>   
  );
  function incrisecounter() {
    debugger;    
    setcounter(counter+1) 
   } 

}

export default App;
