import Header from "./components/Header.js";
import "./App.css";
import Tasks from "./components/tasks.js";
import { useState,useEffect } from "react";
import AddTasks from "./components/AddTasks.js";


function App() {
  //what we use here its useState
  //its an array decostructor
  //it can only be used inside a component
  const [tasks, setTask] = useState([]);
//AddTask


//it deals with side effect 
useEffect(()=>{
const getTasks=async()=>{
const tasksFromServer= await fetchTasks()
setTask(tasksFromServer)
}
  getTasks();
},[])
const fetchTasks=async ()=>{
  const res=await fetch("http://localhost:3000/tasks")
  const data=await res.json();

  return data
}



const addTask=async(task)=>{
const 
res =await fetch("http://localhost:3000/tasks",{
  method:'POST',
  headers:{
'content-type':'application/json'
  },
  body:JSON.stringify(task)
})

const data=await res.json()

setTask([...tasks,data])
  /*
  //Generating random number to have an id in the task
 const id =Math.floor(Math.random()*10000) +1 

 const newTask={id,...task}
 /* we taking the id of the generated math
 -with the spread of task which is the copy of the objects tasks
 */

 //setTask([...tasks,newTask]);//set task we use to 
}
  //toogle reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task)=>
    //we using map to map trough the object of tasks
    //its an if else statement
      task.id===id ? //if the id equals to the id selected
      
      {...task,reminder:!task.reminder}
      //spread the task(spread ... three dots copies the actual object)
     // comma is there because thats what we wanna change
      //if its not what = task reminder of the selected task change it
      
      :task))
  }

  return (
    <div className="Container">
      <Header></Header>

      <AddTasks onAdd={addTask}></AddTasks>
      {/* we passing props
   2.the data was put inside the app because app is the root 
   its easier to pass the props from parent to children
   3.*/
      }
      <Tasks tasks={tasks} onToggle={toggleReminder} ></Tasks>
     
    </div>

  );
}

export default App;
