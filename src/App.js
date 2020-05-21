import React, { useState } from 'react';
import './App.css'
import logo from './assets/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import States from './states.js'

function App() {

  const [state, setState] = useState('Select State')
  const [cheapness, setCheapness] = useState(1)

  function stateSelect(e)  {
    setState(e.target.value)
  }

  function stateSelect(e)  {
    setCheapness(e.target.value)
  }

  return (
    <div className="App">
      <img className="logo" src={logo} alt="Qly logo" />
      <h1>Registration Form</h1>

      <form>
        <input type="text" placeholder="Enter company name" />
        <input type="text" placeholder="Address line 1" />
        <input type="text" placeholder="Address line 2" />
        <input type="text" placeholder="City" />
        {/* <StateSelect className="ddown" style={{ backgroundColor: 'blue'}}/> */}
        
        <select className="stateSelect" name="select" onChange={stateSelect}>
        {
          ['Select State', ...Object.values(States)].map(function(n) { 
            return (<option value={n} selected={state === n}>{n}</option>);
          })
        }
        </select>
        <input type="text" placeholder="Pin Code" />

        <select className="stateSelect" name="select" onChange={setCheapness}>
        {
          ['Cheapness', 1,2,3,4].map(function(n) { 
            return (<option value={n} selected={state === n}>{n}</option>);
          })
        }
        </select>

        <input type="text" placeholder="Total Store Capacity" />
        <input type="text" placeholder="Capacity Cushion" />




        
                
      </form>

    </div>
  );
}

export default App;
