import React, {useState} from 'react'
import { Dropdown, FormControl } from 'react-bootstrap'
import States from './states.js'
import './StateSelect.css'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  // eslint-disable-next-line
  <a href="#"
    style={{color: 'black', borderColor: 'black', borderWidth: '1px'}}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25BE;
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Search state..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value.toLowerCase()),
          )}
        </ul>
      </div>
    );
  },
);


export default function({style}) {
  console.log(States)
  const states = Object.values(States)

  return (
    <div style={{...style, width: '30%'}} className="StateSelect">
      <Dropdown id="state-selector-button" title="State">
        <div className="div1">
        <Dropdown.Toggle className="dropButton" as={CustomToggle} variant="primary">
					State
        </Dropdown.Toggle>
        </div>

        <Dropdown.Menu className="menu" as={CustomMenu}>
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