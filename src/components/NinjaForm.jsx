import React ,{useState} from 'react';

const NinjaForm = (props) => {
    const{ ninjaBoxArray, setNinjaBoxArray } = props;
    // this is the state to keep track of the text box input value
    const [ color, setColor] = useState("");
    const [ size, setSize] = useState(50);

    const submitHandler = (e) => {
        e.preventDefault();
        setNinjaBoxArray([...ninjaBoxArray,{
            color:color,
            //be sure to add the px to the string so it can update the style correctly 
            size: size + "px",
        }]);
        //clear out the color input and reset to the default size value on successful submission.
        setColor("");
        setSize(50);
    }
    return (
        <div>
            <form onSubmit={ submitHandler } style = {{ margin:"20px" }}>
                <div>
                    <label>Color</label>
                    <input
                    type = "text"
                    name = "size"
                    value={color}
                    onChange = {(e) =>setColor(e.target.value)}
                    />
                </div>

                <div>
                    <label>Width and Height in Pixels</label>
                    <input
                    type = "text"
                    name = "size"
                    value={size}
                    onChange = {(e) =>setSize(e.target.value)}
                    />
                </div>
            <button>Add</button>
            </form>
        </div>
    );
}

export default NinjaForm;
