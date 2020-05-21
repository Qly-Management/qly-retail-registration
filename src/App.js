import React, { useState } from 'react';
import './App.css'
import logo from './assets/Logo.png'
import States from './states.js'
import { TimePicker, Checkbox } from 'antd'


function App() {

  const timeIntervalOptions = ['15', '30', '60']

  const [state, setState] = useState('Select State')
  const [cheapness, setCheapness] = useState(1)
  const [timePickerOpen, setPickerOpen] = useState(false)
  const [timePickerOpen2, setPickerOpen2] = useState(false)
  const [checklist, setChecklist] = useState([])

  function handleOpenChange(open) {
    setPickerOpen(open)
  }

  function handleOpenChange2(open) {
    setPickerOpen2(open)
  }

  function stateSelect(e)  {
    setState(e.target.value)
  }

  function cheapSelect(e)  {
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

        <select className="stateSelect" name="select" onChange={cheapSelect}>
        {
          ['Cheapness', 1,2,3,4].map(function(n) { 
            return (<option value={n} selected={cheapness === n}>{n}</option>);
          })
        }
        </select>

        <input type="text" placeholder="Total Store Capacity" />

        <input type="text" placeholder="Capacity Cushion"/>    

        <TimePicker
          use12Hours
          className="tp"
          open={timePickerOpen}
          onOpenChange={handleOpenChange}
          format="HH:mm"
          placeholder="Enter opening time"
        />
        <br />

        <div style={{marginBottom:10}}/>

        <TimePicker
          use12Hours
          className="tp"
          open={timePickerOpen2}
          onOpenChange={handleOpenChange2}
          format="HH:mm"
          placeholder="Enter closing time"
        />

        <div style={{marginBottom:10}}/>

        <input type="text" placeholder="Special Instructions"/>

        <input type="text" placeholder="Description"/>

        <Checkbox.Group
          options={timeIntervalOptions}
          value={checklist}
          onChange={(checkList) => setChecklist(checkList)}
        />

        <button className="submit" type="submit">Submit</button>
       
      </form>
       

    </div>
  );
}

export default App;
