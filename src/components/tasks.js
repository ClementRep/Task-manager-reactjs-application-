import Task from "./Task";


const Tasks = ({ tasks,onToggle}) => {
    return (
        <>
            {/*map function
1. Creates A list
2.loops through the object and retrieves the task.id as we requested
*/}

            {tasks.map(
                // because we imported the task component we looping through the 
                //tasks and pass em as props using task={task} as our variable
                (task) =>(
                <Task key={task.id} 
                task={task} onToggle={onToggle}/>
                //we passed out the task to the Task component
                ))}
</>
    )
}

export default Tasks;