import react, { useState } from 'react';
    
    
const BoxDisplay = (props) => {
    
    return (
        <>
        <p>{props.colorlist.map(color => {
          return <div style={{backgroundColor: color, width: "100px", height: "100px", display:'inline-block'}}>{color}</div>
        })}</p>
        </>
    );
};
    
export default BoxDisplay;
