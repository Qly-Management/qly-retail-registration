import React, { useState } from 'react';
import States from './states.js'
import { TimePicker, Checkbox } from 'antd'

export default function() {
  const timeIntervalOptions = ['15', '30', '60']

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

  const [timePickerOpen, setPickerOpen] = useState(false)
  const [timePickerOpen2, setPickerOpen2] = useState(false)

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
    <div>
      <form action="" method="post">
        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter company name" />

        <input value={address1} onChange={(e)=> setAddress1(e.target.value)} type="text" placeholder="Address line 1" />

        <input value={address2} onChange={(e)=> setAddress2(e.target.value)} type="text" placeholder="Address line 2" />

        <input value={city} onChange={(e)=> setCity(e.target.value)} type="text" placeholder="City" />
        
        <select className="stateSelect" name="select" onChange={stateSelect}>
        {
          ['Select State', ...Object.values(States)].map(function(n) { 
            return (<option value={n} selected={state === n}>{n}</option>);
          })
        }
        </select>
        
        <input value={pin} onChange={(e) => setPin(e.target.value)} type="text" placeholder="Pin Code" />

        <select className="stateSelect" name="select" onChange={cheapSelect}>
        {
          ['Cheapness', 1,2,3,4].map(function(n) { 
            return (<option value={n} selected={cheapness === n}>{n}</option>);
          })
        }
        </select>

        <input value={capacity} onChange={(e) => setCapacity(e.target.value)} type="text" placeholder="Total Store Capacity" />

        <input value={cushion} onChange={(e) => setCushion(e.target.value)} type="text" placeholder="Capacity Cushion"/>    

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

        <input value={inst} onChange={(e) => setInstr(e.target.value)} type="text" placeholder="Special Instructions"/>

        <input value={des} onChange={(e) => setDes(e.target.value)} type="text" placeholder="Description"/>

        <Checkbox.Group
          options={timeIntervalOptions}
          value={checklist}
          onChange={(checkList) => setChecklist(checkList)}
        />

        <button name="submit" value="submit" className="submit" type="submit">Submit</button>
       
      </form>
    </div>
  )

}