import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import States from './states.js'
import './StateSelect.css'

export default function() {
  console.log(States)
  const states = Object.values(States)

  return (
    <div className="StateSelect">
      <Dropdown id="state-selector-button" title="State">

        <Dropdown.Toggle variant="primary">
					State
        </Dropdown.Toggle>

        <Dropdown.Menu className="menu">
        {
          states.map(state => {
            return <Dropdown.Item key={state}>{state}</Dropdown.Item>
          })
        }

        </ Dropdown.Menu>
      </Dropdown>
    </div>
  )
}