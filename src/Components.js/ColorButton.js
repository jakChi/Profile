import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../Reducers.js/ColorChanger';

function ColorButton() {
  const dispatch = useDispatch();
  const [ color, setColor ] = useState("");
  return (
    <div>
      <input onChange={(event) => {setColor(event.target.value)}} />
      <button onClick={() => dispatch(changeColor(color))}>Change Color</button>
    </div>
  )
}

export default ColorButton;

