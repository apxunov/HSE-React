import React from 'react'
import Task from './Task/Task'

const TaskList = ( {tasksList, onClick} ) => {
    if (tasksList) {
        return (
            tasksList.map( task => {
                return (
                    <Task
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        description={task.description}
                        completed={task.completed}
                        onClick={onClick}
                    />
                )
            })
        )
    }
    else {
        return (<h1>Currently this project has no tasks</h1>)
    }
}

export default TaskList