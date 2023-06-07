const Task = ({ task, onToggle }) => {
    return (
        /*task.reminder if its not =reminder 
        which is true change the color if not leave it 
        */
        <div className={`task ${task.reminder?
        "reminder":''}`}
            onClick={() => onToggle(task.id)}>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div>

    );

}
export default Task;