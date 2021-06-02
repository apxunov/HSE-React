import React from 'react'
import {Task} from './Task/Task'
import {Redirect} from 'react-router-dom'

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
        return (<Redirect to='/404'/>)
    }
}

export default TaskList