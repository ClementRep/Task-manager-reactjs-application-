

import {useState} from 'react';


const AddTask=({onAdd})=>
{
const [text,setText]=useState("");

const [Day,setDay]=useState("");

const [reminder,setReminder]=useState(false);


const onSubmit=(e)=>
{
    e.preventDefault();
    if(!text){
        alert("please at something");
        return;
    }
    onAdd({text,Day,reminder});

    setText("");
    setDay("");
    setReminder(false);
}
    return (
        <form className='form' onSubmit={onSubmit}>
<div className="form-control">
    <label>Task</label>
    <input type="text" placeholder="add task"
    //Value is set to the value in our State Declared aat the top
    /*onChange listens to any chnages in the targeted textbox
    using e.target.value it listens to inpted values 
    */
  onChange={(e)=>setText(e.target.value)}
    />
    
    
    </div>

    <div className="form-control">
    <label>Date and Time</label>
    <input type="text" placeholder="add time and date"
    onChange={(e)=>setDay(e.target.value)}
    />
    </div>
    
    
    <div className="form-control form-control">
    <label>Reminder</label>
    <input type="checkbox"
//on a checkbox we use e.currentTarget.checked to check if the checkbox is checked
onChange={(e)=>setReminder(e.currentTarget.checked )}/>
    
    
    </div>
            <input type="submit" value="Save Task" className="btn"/>
                </form>
    )

}

export default AddTask;

