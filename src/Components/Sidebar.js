import { useState } from 'react'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  // all useState hooks are used inside on the top of the functional component 
  //before the return 
  const colorArray = ["blue","red", "yellow"]
  const [ colors, setColors] = useState();
  const [name, setName] = useState("Juan");
  // [state, setState] = useState(initial state)
  
  return (
    <div className='sidebar'>
      <h1>{ name }</h1>
      <button onClick={() => setName('JJ')}>
        change name</button>

        {colorArray.map((color) =>{
          return <p style={{color: color, marginLef: "10px" }}>{color}</p>
        })}
    </div>
  )
}

export default Sidebar