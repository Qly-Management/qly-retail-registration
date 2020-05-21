import React, { useState } from 'react';
import States from './states.js'
import { TimePicker, Checkbox } from 'antd'

export default function() {
  const timeIntervalOptions = ['15', '30', '60']

  // States for the fields
  const [name, setName] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [pin, setPin] = useState(null)
  const [capacity, setCapacity] = useState(null)
  const [cushion, setCushion] = useState(null)
  const [openingTime, setOpeningTime] = useState('')
  const [closingTime, setClosingTime] = useState('')
  const [inst, setInstr] = useState('')
  const [des, setDes] = useState('')
  const [state, setState] = useState('Select State')
  const [cheapness, setCheapness] = useState('Cheapness')
  const [checklist, setChecklist] = useState([])

  // States to handle opening and closing of time selection fields
  const [timePickerOpen, setPickerOpen] = useState(false)
  const [timePickerOpen2, setPickerOpen2] = useState(false)

  // functions to handle opening and closing of time selection fields
  function handleOpenChange(open) {
    setPickerOpen(open)
  }

  function handleOpenChange2(open) {
    setPickerOpen2(open)
  }

  return (
    <div>
      <form action="" method="post">

    
        <input 
          value={name} 
          onChange={(e)=> setName(e.target.value)} 
          type="text" 
          placeholder="Enter company name" 
        />

        <input 
          value={address1} 
          onChange={(e)=> setAddress1(e.target.value)} 
          type="text" 
          placeholder="Address line 1" 
        />

        <input 
          value={address2} 
          onChange={(e)=> setAddress2(e.target.value)} 
          type="text" 
          placeholder="Address line 2" 
        />

        <input 
          value={city} 
          onChange={(e)=> setCity(e.target.value)} 
          type="text" 
          placeholder="City" 
        />
        
        <select 
          style={{color: state === 'Select State' ? '#A9A9A9' : 'black'}} 
          className="stateSelect" 
          name="select" 
          onChange={(e)=>setState(e.target.value)}
        >
          {
            ['Select State', ...Object.values(States)].map(function(n) { 
              return (<option value={n} selected={state === n}>{n}</option>);
            })
          }
        </select>
        
        <input 
          value={pin} 
          onChange={(e) => setPin(e.target.value)} 
          type="text" 
          placeholder="Pin Code" 
        />

        <select 
          style={{color: cheapness === 'Cheapness' ? '#A9A9A9' : 'black'}} 
          className="stateSelect" name="select" 
          onChange={(e)=>setCheapness(e.target.value)}
        >
          {
            ['Cheapness', 1,2,3,4].map(function(n) { 
              return (<option value={n} selected={cheapness === n}>{n}</option>);
            })
          }
        </select>

        <input 
          value={capacity} 
          onChange={(e) => setCapacity(e.target.value)} 
          type="text" 
          placeholder="Total Store Capacity" 
        />

        <input 
          value={cushion} 
          onChange={(e) => setCushion(e.target.value)} 
          type="text" 
          placeholder="Capacity Cushion"
        />    

        <TimePicker
          use12Hours
          className="tp"
          open={timePickerOpen}
          onOpenChange={handleOpenChange}
          format="HH:mm"
          placeholder="Enter opening time"
          onChange={(_, timeString) => setOpeningTime(timeString)}
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
          onChange={(_, timeString) => setClosingTime(timeString)}
        />

        <div style={{marginBottom:10}}/>

        <input 
          value={inst} 
          onChange={(e) => setInstr(e.target.value)} 
          type="text" 
          placeholder="Special Instructions"
        />

        <input 
          value={des} 
          onChange={(e) => setDes(e.target.value)} 
          type="text" 
          placeholder="Description"
        />

        <Checkbox.Group
          options={timeIntervalOptions}
          value={checklist}
          onChange={(checkList) => setChecklist(checkList)}
        />

        <button 
          name="submit" 
          value="submit" 
          className="submit" 
          type="submit"
        >Submit
        </button>
       
      </form>
    </div>
  )

}