import React from 'react';
import './App.css'
import logo from './assets/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import StateSelect from './StateSelect'

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="Qly logo" />
      <h1>Registration Form</h1>

      <form>
        <input type="text" placeholder="Enter company name" />
        <input type="text" placeholder="Address line 1" />
        <input type="text" placeholder="Address line 2" />
        <input type="text" placeholder="City" />
        <StateSelect />

      </form>

    </div>
  );
}

export default App;
