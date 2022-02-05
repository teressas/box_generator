import React, {useState} from "react";

const BoxForm = (props) => {

    const [colorInput, setColorInput] = useState("");
    

    // const handleColorInput = (event) => {
    //     setBox({
    //         [event.target.name]: event.target.value
    //     })
    // }

    const createBox = (e) => {
        e.preventDefault();
        props.addBox(colorInput);
        setColorInput("");
    };
   

    return (
        <div>
            {/* {JSON.stringify(color)}<br/>
            {JSON.stringify(setColor)}<br/> */}
            <form onSubmit={ createBox }>
                <div>
                    <label>Color: </label> 
                    <input type="text" name="color" onChange={ (e) => setColorInput(e.target.value) } value={colorInput}/>
                    {/* {e => setColor(e.target.value)}  */}
                </div>
                <input type="submit" value="Create Box" />
            </form>
        </div>
        
    );
    
};

export default BoxForm;