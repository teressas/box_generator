import './App.css';
import React, { useState } from 'react';
import BoxGeneratorForm from './Components/BoxGeneratorForm';
import BoxGeneratorDisplay from './Components/BoxGeneratorDisplay';

function App() {
  
  const [colorlist, setColorlist ] = useState([""]);
  // const [newBoxColor, setNewBoxColor] = useState("");
  // const createBox = (e) => {
  //   e.preventDefault();
  //   // props.onNewBox(color);
  //   setColor("");
  // };

  const addBox = (colorInput) => {
    console.log(colorInput);
    const copyBoxes = [...colorlist];
    copyBoxes.push(colorInput);
    setColorlist(copyBoxes);
  };


  return (
    <>
      <div className='App'>
        <h1>Box Generator</h1>
        {/* <p>{colorlist.map(color => {
          return <div style={{backgroundColor: color, width: "100px", height: "50px", display:'inline-block'}}>{color}</div>
        })}</p> */}
      <BoxGeneratorForm addBox = {addBox}/>
      <BoxGeneratorDisplay colorlist={colorlist}/>
      </div>
    </>
  );
}

export default App;


