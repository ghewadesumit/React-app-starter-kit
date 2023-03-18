import {useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';


export function replaceCamelWithSpaces(colorName){
  return  colorName.replace(/\B([A-Z])\B/g,' $1');
}

function App() {
  let [color,setColor] = useState('red');
  let [isDisabled,setIsDisabled] = useState(false);
  let newButton = color == 'red' ? 'blue' : 'red';
  const handleClick = ()=>{
    setColor(()=> newButton);
  }
  const handleCheckboxClick = ()=>{
    setIsDisabled(prev => !prev);
    
  }
  return (
    <div >
      <button  style={{backgroundColor: isDisabled ? 'gray' : color}} disabled={isDisabled} onClick={handleClick}> Change to {newButton}</button>
      <input id="disabled-button-checkbox" type="checkbox" onClick={handleCheckboxClick}/>
      <label htmlFor='disabled-button-checkbox'>checkbox disabled</label>
    </div>
  );
}

export default App;
